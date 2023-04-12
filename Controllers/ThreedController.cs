using System.IO;
using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using threed.Data;
using threed.Models;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json; 
using System.Net;
using System.Net.Sockets;

namespace reactnet3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ThreedController : ControllerBase
    {
        private readonly ThreedContext _context;
        public string emailid = "xyz@gmail.com";
        public string username = "PeterPan";
        public string usergroup = "service";        
        public string role = "guest";
        public string lcid = "1030";

        public ThreedController(ThreedContext context)
        {
            _context = context;
        }

        // GET: api/Threed
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Threed>>> GetThreeds()
        {
            return await _context.Threeds.ToListAsync();
        }

        [HttpGet("getInfo1")]
        public string GetInfo()
        {            
            try{
                string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json");                
                JObject myJObject = JObject.Parse(System.IO.File.ReadAllText(filepath));
                foreach (JProperty property in myJObject.Properties())
                {
                    Console.WriteLine(property.Name + " - " + property.Value);
                    if(property.Name == "username"){
                        username = property.Value.ToString();
                    }
                    else if(property.Name == "usergroup"){
                        usergroup = property.Value.ToString();
                    }
                    else if(property.Name == "role"){
                        role = property.Value.ToString();
                    }
                    else if(property.Name == "lcid"){
                        lcid = property.Value.ToString();
                    }
                }
                
            }
            catch(Exception e){
                throw e;
            }
            return $"{username}:{role}:{usergroup}:{lcid}";            
        }

        [HttpGet("authInformate")]
        public RedirectResult GetUrl(string username, string usergroup, string role, string lcid)
        {     
            username = username;
            usergroup = usergroup;
            role = role;
            lcid = lcid;
            Console.WriteLine(username);
            Console.WriteLine(usergroup);
            Console.WriteLine(role);
            Console.WriteLine(lcid);
            try{
                JObject auth = new JObject(
                new JProperty("username", username),
                new JProperty("usergroup", usergroup),
                new JProperty("role", role),
                new JProperty("lcid", lcid));
                string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json");                      
                System.IO.File.WriteAllText(filepath, auth.ToString());
                Thread.Sleep(5000);
                }
                catch(Exception e){
                    throw e;
            }           
            return Redirect("/"); // redirects to internal url
            // return RedirectPermanent("https://localhost:5001/"); //in local PC            
            //return RedirectPermanent("http://3.129.246.13:5000/"); //in AWS
        }

        // GET: api/Threed/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Threed>> GetThreeed(long id)
        {
            var threeed = await _context.Threeds.FindAsync(id);

            if (threeed == null)
            {
                return NotFound();
            }

            return threeed;
        }


[HttpPut("LineDirection/{name}")]
    public async Task<IActionResult> UpdateLineDirection(string name, Threed threeed)
    {
        try
        {
            var threedModels = await _context.Threeds.Where(m => m.Name == name).ToListAsync();

            if (threedModels == null || threedModels.Count==0)
                    {
                        return BadRequest();
                    }
                    foreach(var threedModel in threedModels)
                {
                        threedModel.line_rotation=threeed.line_rotation;
                        threedModel.line_position=threeed.line_position;
                    
                }         
                    await _context.SaveChangesAsync();
                    // return Ok (threedModel);

            // threedModel.line_rotation = threeed.line_rotation;

            // await _context.SaveChangesAsync();

            return Ok(threedModels);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ThreedExistsWithName(name))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
    }
    private bool ThreedExistsWithName(string name)
    {
        return _context.Threeds.Any(e => e.Name == name);
    }
        // PUT: api/Threed/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThreeed(long id, Threed threeed)
        {

            try
            {
                if (id != threeed.Id)
                {
                    return BadRequest();
                }

                threeed.CreatedBy = GetAuthUser();
                threeed.UpdatedBy = GetAuthUser();
                threeed.CreatedDatetime = DateTime.Now.ToString();
                threeed.UpdatedDatetime = DateTime.Now.ToString();
                _context.Entry(threeed).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

    

        // PUT: api/Threed/6
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        //Rename Case for case design
        [HttpPut("renamecase/{name}")]
        public async Task<IActionResult> PutRenameThreeed(string name, Threed threeed)
        {

            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
                var existingThreed = await _context.Threeds.FirstOrDefaultAsync(x => x.Name == threeed.Name);

              if (existingThreed != null)
             {
                 return BadRequest("CaseName already exists");
              }
               
             foreach(var caseData in caseDatas)
               {
                 if(caseData.Name==threeed.Name){
                    return BadRequest("CaseName already exist");
                 } 
                    caseData.old_case_name = caseData.Name;
                    caseData.Name= threeed.Name;
                    caseData.import_data_filename=threeed.import_data_filename;
                    caseData.renamed_by = GetAuthUser();
                    caseData.renamed_datetime = DateTime.Now.ToString();
                    // caseData.saveas_from_caseid = threeed.saveas_from_caseid;
                    // caseData.import_data_filename = threeed.import_data_filename;
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        [HttpPut("importfile/{name}")]
        public async Task<IActionResult> ImportFileThreeed(string name, Threed threeed)
        {

            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
               
             foreach(var caseData in caseDatas)
               {
                    caseData.import_data_filename=threeed.import_data_filename;
                   
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
       

        // POST: api/Threed
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Threed>> PostThreeed(Threed threeed)
        {
           
            threeed.CreatedBy = GetAuthUser();
            threeed.UpdatedBy = GetAuthUser();
            threeed.CreatedDatetime= DateTime.Now.ToString();
            threeed.UpdatedDatetime= DateTime.Now.ToString();
            // threeed.import_data_filename=threeed.Name;
            // threeed.saveas_from_caseid=threeed.Id;
            _context.Threeds.Add(threeed);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetThreeed", new { id = threeed.Id }, threeed);
        }

        //SaveAs Api for case design
         [HttpPost("savecase/{name}")]
        public async Task<ActionResult<Threed>> SaveAsThreeed(string name, Threed threeed)
        {
        try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name == name).ToListAsync();
               if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
            var existingThreed = await _context.Threeds.FirstOrDefaultAsync(x => x.Name == threeed.Name);

                    if (existingThreed != null)
                    {
                        return BadRequest("CaseName already exists");
                    }
                
               foreach(var caseData in caseDatas)
               {
                 if(caseData.Name==threeed.Name){
                    return BadRequest("CaseName already exist");
                 }
                  caseData.Id = 0;
                  caseData.Name= threeed.Name;
                 _context.Threeds.Add(caseData);
              
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

    }

        //saveAS api for pallet Design

         [HttpPost("savepallet/{id}")]
        public async Task<ActionResult<Threed>> SavePallet(long id, PalletDesign pallet)
        {
        try
            {
                var SavePalletNames= await _context.PalletDesigns.Where(x=>x.PalletId == id).ToListAsync();
               if (SavePalletNames == null || SavePalletNames.Count==0)
                {
                    return BadRequest();
                }
                var existingPallet = await _context.PalletDesigns.FirstOrDefaultAsync(x => x.PalletName == pallet.PalletName);

                if (existingPallet != null)
                {
                    return BadRequest("PalletName already exists");
                }
                var savpal = new  palletId{
                PalletName = pallet.PalletName
            };
           
            _context.PalletIds.Add(savpal);
            await _context.SaveChangesAsync();
                
                 foreach(var SavePalletName in SavePalletNames)
               {
                 if(SavePalletName.PalletName==pallet.PalletName){
                    return BadRequest("palletName already exist");
                 }
                SavePalletName.pId=0;
                SavePalletName.PalletId=savpal.PalletId;
                SavePalletName.PalletName = pallet.PalletName;
                _context.PalletDesigns.Add(SavePalletName);
              
               }         
                await _context.SaveChangesAsync();
                return Ok (SavePalletNames);
      
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaletteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

    }

       //Rename for pallet Design
    [HttpPut("renamepallet/{id}")]
        public async Task<IActionResult> RenamePallet(long id, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletId== id).ToListAsync();
                var PalletinPalletId= await _context.PalletIds.Where(x=>x.PalletId==id).FirstOrDefaultAsync();
                if(PalletinPalletId==null){
                    return BadRequest();
                } 
                 var existingPallet = await _context.PalletDesigns.FirstOrDefaultAsync(x => x.PalletName == pallet.PalletName);

                if (existingPallet != null)
                {
                    return BadRequest("PalletName already exists");
                }
        
                PalletinPalletId.PalletName=pallet.PalletName;
                await _context.SaveChangesAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {
                if(PalletRename.PalletName==pallet.PalletName){
                    return BadRequest("palletName already exist");
                 }
                PalletRename.old_pallet_name = PalletRename.PalletName;
                PalletRename.PalletName=pallet.PalletName;
                PalletRename.renamed_by = GetAuthUser();
                PalletRename.renamed_datetime = DateTime.Now.ToString();
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaletteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
    
        public string GetAuthUser(){
             string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json"); 
           
             using (StreamReader r = new StreamReader(filepath))
            {
                string json = r.ReadToEnd();
                var item = JObject.Parse(json);
                var name = Convert.ToString(item["username"]);

                return name;
            }
            
        }

        // DELETE: api/Threed/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteThreeed(long id)
        {
            var threeed = await _context.Threeds.FindAsync(id);
            if (threeed == null)
            {
                return NotFound();
            }

            _context.Threeds.Remove(threeed);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ThreeedExists(long id)
        {
            return _context.Threeds.Any(e => e.Id == id);
        }
         private bool ThreeedExistsWithName(string id)
        {
            return _context.Threeds.Any(e => e.Name == id);
        }
         private bool PalletExistsWithName(string id)
        {
            return _context.PalletDesigns.Any(e => e.PalletName == id);
        }
        [HttpGet("getdropdown")]
        public async Task<ActionResult<IEnumerable<Dropdown>>> getDropdown()
        {
            return await _context.Dropdowns.ToListAsync();
        }

         // Get Palette design data from Sqlite DB
          [HttpGet("getPallets")]
        public async Task<ActionResult<IEnumerable<PalletDesign>>> getPallets()
        {
            return await _context.PalletDesigns.ToListAsync();
            
        }


         [HttpGet("GetSinglePallet/{id}")]
         public async Task<ActionResult<object>> GetSinglePallet(long id)
         {
            var pallet = await _context.PalletDesigns.Where(x=>x.PalletId == id).Select(x => new {
                x.PalletId,
                x.OriginPal1,
                x.OriginPal2,
                x.Firstcasepal1,
                x.Firstcasepal2,
                x.IntermediateLayerType,
                x.CaseType,
                // x.pallet_no,
                // x.PalletName,
                // x.Working_area_1_Width_X_Direction,
                // x.Working_area_1_Length_Y_Direction,
                // x.Working_area_1_Offset_X_Direction,
                // x.Working_area_1_Offset_Y_Direction,
                // x.Working_area_2_Width_X_Direction,
                // x.Working_area_2_Length_Y_Direction,
                // x.Working_area_2_Offset_X_Direction,
                // x.Working_area_2_Offset_Y_Direction,
                // x.PalletType,
                // x.NoOfLayers,
                // x.CasesSchemaA,
                // x.CasesSchemaB,
                // x.CasesSchemaC,
                // x.OutsideLabelPriority,
                // x.rule_symmetric_mass_distribution,
                // x.horizontal_mass_distribution,
                // x.vertical_mass_distribution,
                // x.SchemaA,
                // x.SchemaB,
                // x.SchemaC,
                }).ToListAsync();
                if (pallet == null){
                    return NotFound();
                    }
                return Ok(pallet);}

        // full update api for case design
[HttpPut("importforCase/{name}")]
        public async Task<IActionResult> PutRenameThreeedCase(string name, Threed threeed)
        {
            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
               
             foreach(var caseData in caseDatas)
               {
                //  if(caseData.Name==threeed.Name){
                //     return BadRequest("CaseName already exist");
                //  } 
                   caseData.Name = threeed.Name;
                   caseData.Length = threeed.Length;
                   caseData.Width = threeed.Width;
                   caseData.Height = threeed.Height;
                   caseData.Material = threeed.Material;
                   caseData.Mass = threeed.Mass;
                   caseData.Directionx = threeed.Directionx;
                   caseData.Directiony = threeed.Directiony;
                   caseData.Directionz = threeed.Directionz;
                   caseData.labelcolour = threeed.labelcolour;
                   caseData.Typename = threeed.Typename;
                   caseData.Labelname = threeed.Labelname;
                   caseData.Labelx = threeed.Labelx;
                   caseData.Labely = threeed.Labely;
                   caseData.Labelwidth = threeed.Labelwidth;
                   caseData.Labelheight = threeed.Labelheight;


                    caseData.old_case_name = caseData.Name;
                    caseData.Name= threeed.Name;
                    caseData.import_data_filename=threeed.import_data_filename;
                    caseData.renamed_by = GetAuthUser();
                    caseData.renamed_datetime = DateTime.Now.ToString();
                    // caseData.saveas_from_caseid = threeed.saveas_from_caseid;
                    // caseData.import_data_filename = threeed.import_data_filename;
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
    //full update api for pallet design
    [HttpPut("importForPallet/{name}")]
        public async Task<IActionResult> RenamePallet1(string name, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletName== name).ToListAsync();
                // var PalletinPalletId= await _context.PalletIds.Where(x=>x.PalletId==id).FirstOrDefaultAsync();
                // if(PalletinPalletId==null){
                //     return BadRequest();
                // }
        
                // PalletinPalletId.PalletName=pallet.PalletName;
                // await _context.SaveChangesAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {

                // if(PalletRename.PalletName==pallet.PalletName){
                //     return BadRequest("palletName already exist");
                //  }
                 PalletRename.PalletId = pallet.PalletId;
                 PalletRename.pallet_no = pallet.pallet_no;
                 PalletRename.PalletName = pallet.PalletName;
                 PalletRename.OriginPal1 = pallet.OriginPal1;
                 PalletRename.OriginPal2 = pallet.OriginPal2;
                 PalletRename.Firstcasepal1 = pallet.Firstcasepal1;
                 PalletRename.Firstcasepal2 = pallet.Firstcasepal2;
                 PalletRename.PalletType = pallet.PalletType;
                 PalletRename.IntermediateLayerType = pallet.IntermediateLayerType;
                 PalletRename.CaseType = pallet.CaseType;
                 PalletRename.NoOfLayers = pallet.NoOfLayers;
                 PalletRename.CasesSchemaA = pallet.CasesSchemaA;
                 PalletRename.CasesSchemaB = pallet.CasesSchemaB;
                 PalletRename.CasesSchemaC = pallet.CasesSchemaC;
                 PalletRename.OutsideLabelPriority = pallet.OutsideLabelPriority;
                 PalletRename.rule_symmetric_mass_distribution = pallet.rule_symmetric_mass_distribution;
                 PalletRename.horizontal_mass_distribution = pallet.horizontal_mass_distribution;
                 PalletRename.vertical_mass_distribution = pallet.vertical_mass_distribution;
                 PalletRename.SchemaA = pallet.SchemaA;
                 PalletRename.SchemaB = pallet.SchemaB;
                 PalletRename.SchemaC = pallet.SchemaC;
                 PalletRename.Working_area_1_Width_X_Direction = pallet.Working_area_1_Width_X_Direction;
                 PalletRename.Working_area_1_Length_Y_Direction = pallet.Working_area_1_Length_Y_Direction;
                 PalletRename.Working_area_1_Offset_X_Direction = pallet.Working_area_1_Offset_X_Direction;
                 PalletRename.Working_area_1_Offset_Y_Direction = pallet.Working_area_1_Offset_Y_Direction;
                 PalletRename.Working_area_2_Width_X_Direction = pallet.Working_area_2_Width_X_Direction;
                 PalletRename.Working_area_2_Length_Y_Direction = pallet.Working_area_2_Length_Y_Direction;
                 PalletRename.Working_area_2_Offset_Y_Direction = pallet.Working_area_2_Offset_X_Direction;
                 PalletRename.Working_area_2_Offset_X_Direction = pallet.Working_area_2_Offset_X_Direction;
                 PalletRename.Working_area_2_Offset_Y_Direction = pallet.Working_area_2_Offset_Y_Direction;

                 PalletRename.intermediate_Layer = pallet.intermediate_Layer;
                 PalletRename.case_position = pallet.case_position;

                PalletRename.old_pallet_name = pallet.PalletName;
                PalletRename.PalletName=pallet.PalletName;
                PalletRename.renamed_by = GetAuthUser();
                PalletRename.renamed_datetime = DateTime.Now.ToString();
                await _context.SaveChangesAsync();
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PalletExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }







     [HttpPut("importPalletFile/{id}")]
        public async Task<IActionResult> importPalletFile(long id, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletId== id).ToListAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {
                // if(PalletRename.PalletName==pallet.PalletName){
                //     return BadRequest("palletName already exist");
                //  }
               PalletRename.import_data_filename=pallet.import_data_filename;
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaletteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }


        // Get Palette design data from Sqlite DB

        [HttpGet("getPallet/{PalletId}/{palletNo}")]
        public async Task<ActionResult<PalletDesign>> getPallet(long PalletId ,int palletNo)
        {
            var paletteData = await _context.PalletDesigns.Where( x=> x.PalletId == PalletId && x.pallet_no == palletNo).ToListAsync();
            if (paletteData.Count >0)
            {
                  return Ok(paletteData);            
            }
           return NotFound();;
        }
        // using in import data for pallets
        [HttpGet("getPallet/{name}")]
        public async Task<ActionResult<PalletDesign>> getPalletById(string name)
        {
            var paletteData = await _context.PalletDesigns.Where( x=> x.PalletName == name ).ToListAsync();
            
             return Ok(paletteData);            
          
        }
        



[HttpGet("getFiles")]
public async Task<ActionResult<object[]>> getImport()
{
    try
    {
        string importDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForCase");

        string[] filePaths = Directory.GetFiles(importDirectoryPath);

        object[] fileObjects = filePaths.Select(filePath =>
        {
            string fileName = Path.GetFileNameWithoutExtension(filePath);
            // DateTime lastModified = File.GetLastWriteTime(filePath);

            return new
            {
                Name = fileName,
                // LastModified = lastModified
            };
        }).ToArray();

        return fileObjects;
    }
    catch (IOException ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

[HttpGet("getFilesForPallet")]
public async Task<ActionResult<object[]>> getImport1()
{
    try
    {
        string importDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForPallet");

        
        string[] filePaths = Directory.GetFiles(importDirectoryPath);

      
        object[] fileObjects = filePaths.Select(filePath =>
        {
            string fileName = Path.GetFileNameWithoutExtension(filePath);
           

            return new
            {
                Name = fileName,
                // LastModified = lastModified
            };
        }).ToArray();

        
        return fileObjects;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

[HttpGet("getCaseContents")]
public async Task<ActionResult<string>> getFileContents(string fileName)
{
    try
    {
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForCase", fileName + ".json");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound();
        }

        string fileContents = System.IO.File.ReadAllText(filePath);

        return fileContents;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}


[HttpGet("getPalletContents")]
public async Task<ActionResult<string>> getPalletContents(string fileName)
{
    try
    {
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForPallet", fileName + ".json");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound();
        }

        string fileContents = System.IO.File.ReadAllText(filePath);

        return fileContents;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

            [HttpPost("savePallet")]
            public async Task<ActionResult<PalletDesign>> savePallet(PalletDesign pallet )
            {
            
                var savpal = new  palletId{
                    PalletName = pallet.PalletName
                };
            
                _context.PalletIds.Add(savpal);
                await _context.SaveChangesAsync();
            
                pallet.pId = 0;
                pallet.PalletId = savpal.PalletId;
                pallet.pallet_no = 1;
                pallet.PalletName = savpal.PalletName;
                pallet.CreatedDate = DateTime.Now.ToString();
                pallet.UpdatedDate = DateTime.Now.ToString();
                _context.PalletDesigns.Add(pallet);
                await _context.SaveChangesAsync();

            
                pallet.pId = 0;
                pallet.PalletId = savpal.PalletId;
                pallet.pallet_no = 2;
                pallet.PalletName = savpal.PalletName;
                pallet.CreatedDate = DateTime.Now.ToString();
                pallet.UpdatedDate = DateTime.Now.ToString();
                _context.PalletDesigns.Add(pallet);
                await _context.SaveChangesAsync();

            return pallet;
            }

            //Update the record in Palette design master

            [HttpPut("updatePallet/{PalletId}/{palletNo}")]
            public async Task<IActionResult> PutPalette(long PalletId, PalletDesign pallet , int palletNo)
            {
            try
                {
                var paletteData = await _context.PalletDesigns.Where( x=> x.PalletId == PalletId && x.pallet_no == palletNo).FirstOrDefaultAsync();

                if (paletteData == null)
                {
                    return BadRequest();
                } 
            
                paletteData.OriginPal1 =  pallet.OriginPal1;
                paletteData.OriginPal2 =  pallet.OriginPal2;
                paletteData.Firstcasepal1=  pallet.Firstcasepal1;
                paletteData.Firstcasepal2 =  pallet.Firstcasepal2;
                paletteData.PalletType =  pallet.PalletType;
                paletteData.IntermediateLayerType =  pallet.IntermediateLayerType;
                paletteData.CaseType =  pallet.CaseType;
                paletteData.NoOfLayers =  pallet.NoOfLayers;
                paletteData.CasesSchemaA =  pallet.CasesSchemaA;
                paletteData.CasesSchemaB =  pallet.CasesSchemaB;
                paletteData.CasesSchemaC =  pallet.CasesSchemaC;
                paletteData.OutsideLabelPriority =  pallet.OutsideLabelPriority;
                paletteData.rule_symmetric_mass_distribution =  pallet.rule_symmetric_mass_distribution;
                paletteData.horizontal_mass_distribution = pallet.horizontal_mass_distribution;
                paletteData.vertical_mass_distribution = pallet.vertical_mass_distribution;
                paletteData.SchemaA =  pallet.SchemaA;
                paletteData.SchemaB =  pallet.SchemaB;
                paletteData.SchemaC =  pallet.SchemaC;
                paletteData.Working_area_1_Width_X_Direction =  pallet.Working_area_1_Width_X_Direction;
                paletteData.Working_area_1_Length_Y_Direction =  pallet.Working_area_1_Length_Y_Direction;
                paletteData.Working_area_1_Offset_X_Direction =  pallet.Working_area_1_Offset_X_Direction;
                paletteData.Working_area_1_Offset_Y_Direction =  pallet.Working_area_1_Offset_Y_Direction;
                paletteData.Working_area_2_Width_X_Direction =  pallet.Working_area_2_Width_X_Direction;
                paletteData.Working_area_2_Length_Y_Direction =  pallet.Working_area_2_Length_Y_Direction;
                paletteData.Working_area_2_Offset_X_Direction =  pallet.Working_area_2_Offset_X_Direction;
                paletteData.Working_area_2_Offset_Y_Direction =  pallet.Working_area_2_Offset_Y_Direction;
                paletteData.intermediate_Layer =  pallet.intermediate_Layer;
                paletteData.case_position = pallet.case_position;
                paletteData.IsActive =  pallet.IsActive;
                paletteData.CreatedBy =  pallet.CreatedBy;
                paletteData.CreatedDate =  DateTime.Now.ToString();
                paletteData.UpdatedBy =  pallet.UpdatedBy;
                paletteData.UpdatedDate =  DateTime.Now.ToString();

                paletteData.simulation_speed =  pallet.simulation_speed;
                paletteData.simulation_result =  pallet.simulation_result;
                paletteData.simulation_reason =  pallet.simulation_reason;
                paletteData.export_documentation =  pallet.export_documentation;
                paletteData.case_dimensions =  pallet.case_dimensions;
                paletteData.label_description =  pallet.label_description;
                paletteData.basic_parameter =  pallet.basic_parameter;
                paletteData.design_parameter =  pallet.design_parameter;
                paletteData.pattern_wizard =  pallet.pattern_wizard;
                paletteData.layer_creator =  pallet.layer_creator;
                paletteData.program_routine_creator =  pallet.program_routine_creator;
                paletteData.simulation =  pallet.simulation;
                paletteData.export_palette_data =  pallet.export_palette_data;
                
            
                _context.Entry(paletteData).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PaletteExists(PalletId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            return Ok(pallet);
            }


        


            private bool PaletteExists(long id)
            {
                return _context.PalletDesigns.Any(e => e.PalletId == id);
            }


            // DELETE: Delete Pallet design
            [HttpDelete("deletePallet/{PalletId}")]
            public async Task<IActionResult> DeletePallet(long PalletId)
            {
                try{
                    var Pallet1 = await _context.LayerCreators.Where(x=> x.Palletid == PalletId).ToListAsync();
                    _context.LayerCreators.RemoveRange(Pallet1);
                }
                catch(Exception ex){
                    throw ex;
                }
                try{
                    var Pallet2 = await _context.ProgramRoutineCreaters.Where(x=> x.PalletId == PalletId).ToListAsync();
                    _context.ProgramRoutineCreaters.RemoveRange(Pallet2);
                }
                catch(Exception ex){
                    throw ex;
                }            
                var Pallet = await _context.PalletDesigns.Where(x=> x.PalletId == PalletId).ToListAsync();
                if (Pallet == null)
                {
                    return NotFound();
                }
                _context.PalletDesigns.RemoveRange(Pallet);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            [HttpGet("getLayer")]
            public async Task<ActionResult<IEnumerable<LayerCreator>>> getlayer()
            {
                return await _context.LayerCreators.ToListAsync();
            }

            
            [HttpGet("getLayer/{palletId}")]
            public async Task<ActionResult<IEnumerable<LayerCreator>>> getlayerbyPalletId(int palletId)
            {
                var getlayer = await _context.LayerCreators.Where(x=>x.Palletid == palletId).ToListAsync();

                if(getlayer == null)
                {
                    return NotFound();
                }
                return getlayer;
            }

            // Insert the record in Palette design master

            [HttpPost("saveLayer/{palletId}")]
            public async Task<ActionResult<LayerCreator>> saveLayer(int palletId, List<LayerCreator> layerCreator)
            {
                
            await DeleteLayer(palletId);
            if(layerCreator==null)
            return  BadRequest();

            // layerCreator.Updated_DateTime=DateTime.Now.ToString();
                await _context.LayerCreators.AddRangeAsync(layerCreator);
                try{
                    await _context.SaveChangesAsync();
                }catch(Exception ex){
                    throw ex;
                }
            // await _context.SaveChangesAsync();
                //return Ok();
            return Ok(layerCreator);
            }

            [HttpPost("saveLayerCreater/{palletId}")]
            public async Task<ActionResult<List<LayerCreator>>> SaveLayer1([FromBody]List<LayerCreator> layerCreator , int palletId )
            {
                await DeleteLayer(palletId);
            
            if(layerCreator != null){
                if(layerCreator.Count>0){
                    layerCreator.ForEach(l => l.Updated_DateTime = DateTime.Now.ToString());
                    await _context.LayerCreators.AddRangeAsync(layerCreator);
                await _context.SaveChangesAsync();
                return  layerCreator;
                }
                else{
                    return null;
                }
            }
            else{
                    return null;
            }
            
            }
            [HttpDelete("Deletelayer/{palletId}")]
            public async Task<ActionResult<List<LayerCreator>>> DeleteLayer(int palletId)
            {
                var layers = await _context.LayerCreators.Where(x=>x.Palletid == palletId).ToListAsync();
                if (layers != null && layers.Any())
                {
                    _context.LayerCreators.RemoveRange(layers);
                    await _context.SaveChangesAsync();
                    return layers;
                }

                return NotFound();
                
            }

            private bool LayerExists(long id)
            {
                return _context.LayerCreators.Any(e => e.Palletid == id);
            }

            [HttpGet("getPRCs")]
            public async Task<ActionResult<IEnumerable<ProgramRoutineCreater>>> GetPRC(){
                return await _context.ProgramRoutineCreaters.ToListAsync();
            }

            // Get PRC details by PalletId
            [HttpGet("getPrc/{PalletId}")]
            public async Task<ActionResult<IEnumerable<ProgramRoutineCreater>>> GetPRCbyPalletId(int PalletId ){
                var pallet = await _context.ProgramRoutineCreaters.Where(x => x.PalletId == PalletId).ToListAsync();
                if(pallet == null){
                    return NotFound();
                }

                return Ok(pallet);
            }
            
            // Insert records PRC based on palletID
            [HttpPost("savePRC/{PalletId}")]
            public async Task<ActionResult<List<ProgramRoutineCreater>>> SavePRCDetails( List<ProgramRoutineCreater> programRoutineCreater , int PalletId){
                
                await RemovePRCByPalletId(PalletId);
                if(programRoutineCreater != null)
                {   
                    if(programRoutineCreater.Count > 0){

                        programRoutineCreater=programRoutineCreater.Select(l =>{l.updated_datetime = DateTime.Now.ToString();
                                                                            l.created_datetime = DateTime.Now.ToString();return l;}).ToList();
                        await _context.ProgramRoutineCreaters.AddRangeAsync(programRoutineCreater);
                        try{
                            await _context.SaveChangesAsync();
                            }catch(Exception ex){
                                    throw(ex);
                            }
                        return programRoutineCreater;
                        }
                        else{
                            return null;
                        }
                }
                
                return null;
            }

            // Delete PRC  based on PalletId
            [HttpDelete("removePRC/{PalletId}")]
            public async Task<ActionResult<List<ProgramRoutineCreater>>> RemovePRCByPalletId(int PalletId){
                var pallets = await _context.ProgramRoutineCreaters.Where(x => x.PalletId == PalletId).ToListAsync();
                if(pallets !=null && pallets.Any()){
                    _context.ProgramRoutineCreaters.RemoveRange(pallets);
                    await _context.SaveChangesAsync();
                }
                return Ok("Records Deleted Successfully");
            }
            
            
            
            // Get case by label Id
            [HttpGet("getcasebyLabelId")]
            public async Task<ActionResult<IEnumerable<Threed>>> GetThreedslabelById(long id)
            {
                var getLabelById =await _context.Threeds.Where(x=>x.Id == id).Select(x=>$"labelName : {x.Labelname}").ToListAsync();
                
            Console.WriteLine(getLabelById);
            
                return Ok(getLabelById);
            }
            
            // Get case by label Id
            [HttpGet("getlabel/{caseid}")]
            public async Task<ActionResult<IEnumerable<Threed>>> getlabel(long caseid)
            {
            // var getLabelById =await _context.Threeds.Where(x=>x.Id == caseid).Select(x=>$"labelName : {x.Labelname}_{x.Typename}").ToListAsync();
                var getLabelById = await _context.Threeds.Where(x=>x.Id == caseid).Select(x => new {label = $"{x.Labelname}_{x.Typename}"}).ToListAsync();
                return Ok(getLabelById);
            }  
            


            // Get cases with case Id and case dimensions
            [HttpGet("getcase")]
        
            public async Task<ActionResult<Threed>> GetThreedsCase1( )
            {
                //  var getCase = await _context.Threeds.Select(s=> $"caseId : {s.Id}    caseType : {s.Name}_{s.Length}_{s.Width}_{s.Height}").ToListAsync();
            
            var getCase = await _context.Threeds.Select(s => new { caseId= s.Id,
                    caseType=$"{s.Name}_{s.Length}_{s.Width}_{s.Height}"
                }).ToListAsync();
                return Ok(getCase);
            
            }
            [HttpGet("getcase/{name}")]
        
            public async Task<ActionResult<Threed>> GetThreedsCaseByName(string name )
            {
                 var getCase = await _context.Threeds.Where(s=>s.Name==name).ToListAsync();
        
                return Ok(getCase);
            
            }
        }
    }