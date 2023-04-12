import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";


import { handleSelection1, updateSelectionForCases } from '../Controller/pwController'
import { CircularProgress } from "@mui/material";
import {useState } from "react";



const PatternWizard = ({ handleChangepanel,
  drawPallet_1_2,
  expanded_panel,
  t,
  color1,  
  handleSelection,
  G_listForOutsideLabelPrior,
  G_tempLabelindex,
  S_HWeightedSymmetric,
  selectedOne,
  S_HWeighted1,
  S_HWeighted2,
  S_VWeighted1,
  S_VWeighted2,
  S_setVariantName_SchemaA,
  S_setVariantName_SchemaB,
  S_setVariantName_SchemaC,
  S_outside_Label_Priority,
  G_outsideLabelPrior,
  G_outside_Label_Priority,
  S1_outside_Label_Priority,
  clearingSchemaFields,
  firstCaseOriginChangeFlush,
  S_colorA,
  S_colorB,
  S_colorC,
  handlecolorA,
  handlecolorB,
  handlecolorC,
  callSchemaDropdown,
  reOrderingSwiperIndex,
  disableAlgoPW,
  updatePallet,
}) => {
const [circular,setCircular]=useState('hidden')

  const showProgress=(ms)=>{
    setCircular('visible')
    setTimeout(() => {
      setCircular('hidden')
    }, ms);
  }

  return (
<>

    <Grid item xs={12} style={{ marginTop: "7px", }} >
      <ExpansionPanel style={{ boxShadow: "none", left: "-11px", backgroundColor: "#f5f5f5" }}
        expanded={expanded_panel === 'panel3'}
        onChange={handleChangepanel('panel3')}
      // onClick={this.callSchema}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1-header"
        >
          <Typography>{t('patternWizard')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outside_labelpriority"
                label=""
                defaultValue={t('outsideLabelPriority')}
                // className={classes.textField}
                margin="dense" style={{ height: 27, width: "200px" }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", top: "2px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              {selectedOne
                ?
                <TextField
                  style={{ border: "1px solid white !important", top: "9px", height: "27px important", left: "29px", padding: "0px", margin: "0px", width: "42.6%" }}
                  // id="outlined-type"
                  id="outside_labelpriority"
                  value={S_outside_Label_Priority}
                  // value={this.state.selectcase}
                  onChange={(e) => handleSelection1(
                    "outsideLabelPriority",
                    e,
                    clearingSchemaFields,
                    firstCaseOriginChangeFlush,
                    G_outsideLabelPrior,
                    G_outside_Label_Priority,
                    S1_outside_Label_Priority,
                    S_colorA,
                    S_colorB,
                    S_colorC,
                    handlecolorA,
                    handlecolorB,
                    handlecolorC,
                    callSchemaDropdown,
                    reOrderingSwiperIndex,
                    disableAlgoPW
                  )}
                  onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
                  select
                  // className={classes.textField3}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "12px", }
                  }}
                  InputProps={{
                    style: { fontSize: "12px", }
                  }}
                  margin="dense"
                  //  style={{ height: 38,marginLeft:50 }}
                  variant="outlined"
                  size="small">

                  {G_listForOutsideLabelPrior.map((value, index) => {
                    return <MenuItem id="dropDown-type" onClick={(e) =>{
                       G_tempLabelindex = index
                       showProgress(3000);
                      }} value={value}>{value}</MenuItem>;
                  })}
                  {/* {this.state.casenames.map((value, index) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })} */}
                </TextField>
                :
                <TextField
                  style={{ border: "1px solid white !important", top: "9px", height: "27px important", left: "29px", padding: "0px", margin: "0px", width: "42.6%" }}
                  // id="outlined-type"
                  id="outside_labelpriority"
                  value={S_outside_Label_Priority}
                  // value={this.state.selectcase}
                  onChange={(e) => handleSelection1(
                    "outsideLabelPriority",
                    e,
                    clearingSchemaFields,
                    firstCaseOriginChangeFlush,
                    G_outsideLabelPrior,
                    G_outside_Label_Priority,
                    S1_outside_Label_Priority,
                    S_colorA,
                    S_colorB,
                    S_colorC,
                    handlecolorA,
                    handlecolorB,
                    handlecolorC,
                    callSchemaDropdown,
                    reOrderingSwiperIndex,
                    disableAlgoPW
                  )}
                  onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
                  select
                  // className={classes.textField3}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "12px", }
                  }}
                  InputProps={{
                    style: { fontSize: "12px", }
                  }}
                  margin="dense"
                  //  style={{ height: 38,marginLeft:50 }}
                  variant="outlined"
                  size="small">

                  {G_listForOutsideLabelPrior.map((value, index) => {
                    return <MenuItem id="dropDown-type" onClick={(e) =>{
                      G_tempLabelindex = index
                      showProgress(3000) 
                    }} value={value}>{value}</MenuItem>;
                  })}
                  {/* {this.state.casenames.map((value, index) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })} */}
                </TextField>
              }
            </Grid>
            {/* <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                      <TextField
                        id="outlined-read-only-input"
                        label=""
                        defaultValue={t('ruleSymetricMassDistribution')}
                        // className={classes.textField}
                        margin="dense" style={{ height: 38, width: 200 }}
                        InputProps={{
                          readOnly: true,
                          disableUnderline: true,
                          style: { fontSize: 12, padding: 10 }
                        }}
                        variant="standard"
                        size="small"
                      />
                      <Checkbox
                        className="checkbox"
                        style={{ marginLeft: "200px" }}
                        sx={{
                          color: "grey",
                          '&.Mui-checked': {
                            color: "rgb(0,125,129)",
                          },
                        }}
                        onChange={this.handleSelection("Mass Distribution")}
                        checked={this.state.ruleSymetricMassDistribution}
                        onBlur={this.updateSelection}
                      />
                    </Grid> */}
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue={t('ruleHorizontalSymmetricMassDistribution')}
                // className={classes.textField}
                margin="dense" style={{ height: 38, width: "74%" }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", width: "140%", top: "5px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              <Checkbox
                className="checkbox"
                style={{ left: "43px" }}
                disabled={S_HWeightedSymmetric}
                sx={{
                  color: "grey",
                  '&.Mui-checked': {
                    color: "rgb(0,125,129)",
                  },
                }}
                onChange={handleSelection("HWeighted")}
                checked={selectedOne ? S_HWeighted1 : S_HWeighted2}
                onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
              />
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue={t('ruleVerticalSymmetricMassDistribution')}
                // className={classes.textField}
                margin="dense" style={{ height: 38, width: "74%" }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", width: "140%", top: "5px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              <Checkbox
                className="checkbox"
                style={{ left: "43px" }}
                disabled={S_HWeightedSymmetric}
                sx={{
                  color: "grey",
                  '&.Mui-checked': {
                    color: "rgb(0,125,129)",
                  },
                }}
                onChange={handleSelection("VWeighted")}
                checked={selectedOne ? S_VWeighted1 : S_VWeighted2}
                onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue={t('schemaA')}
                // className={classes.textField}
                margin="dense" style={{ height: 27 }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", width: "140%", top: "5px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              <TextField
                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "138px", height: "27px", top: "11px", width: "29%" }}
                id="outlined-read-only-input"
                defaultValue=""
                value={S_setVariantName_SchemaA}
                // onChange = {this.handleCarouselUpdate}
                onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
                disabled={true}
                // disabled="true"
                InputLabelProps={{
                  shrink: true,
                  style: { color: "black", fontSize: "12px", top: "3px" }
                }}
                InputProps={{
                  style: { color: "black", fontSize: "12px", top: "3px" },
                  disableUnderline: true
                }}
                margin="dense"
                //  style={{ height: 38 ,marginLeft:150}}
                variant="outlined"
                size="small"
              />


            </Grid>
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue={t('schemaB')}
                // className={classes.textField}
                margin="dense" style={{ height: 27 }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", width: "140%", top: "5px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              <TextField
                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "138px", height: "27px", top: "11px", width: "29%" }}
                id="outlined-read-only-input"
                defaultValue=""
                value={S_setVariantName_SchemaB}
                // onChange = {this.handleCarouselUpdate}
                onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
                disabled={true}
                // disabled="true"
                InputLabelProps={{
                  shrink: true,
                  style: { color: "black", fontSize: "12px", top: "3px" }
                }}
                InputProps={{
                  style: { color: "black", fontSize: "12px", top: "3px" },
                  disableUnderline: true
                }}
                margin="dense"
                // style={{ height: 38 ,marginLeft:150}}
                variant="outlined"
                size="small"
              />



            </Grid>
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: color1, marginBottom: "4px" }}>
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue={t('schemaC')}
                // className={classes.textField}
                margin="dense" style={{ height: 27 }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, left: "10px", bottom: "2px", width: "140%", top: "5px", padding: 1 }
                }}
                variant="standard"
                size="small"
              />
              <TextField
                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "138px", height: "27px", top: "11px", width: "29%" }}
                id="outlined-read-only-input"
                defaultValue=""
                value={S_setVariantName_SchemaC}
                // onChange = {this.handleCarouselUpdate}
                onBlur={(e)=>updateSelectionForCases(e,updatePallet)}
                disabled={true}
                // disabled="true"
                InputLabelProps={{
                  shrink: true,
                  style: { color: "black", fontSize: "12px", top: "3px" }
                }}
                InputProps={{
                  style: { color: "black", fontSize: "12px", top: "3px" },
                  disableUnderline: true
                }}
                margin="dense"
                // style={{ height: 38 ,marginLeft:150}}
                variant="outlined"
                size="small"
              />



            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
          
    <div className="parent-blur" style={{zIndex: 5,justifyContent: "center", alignItems: "center", display: circular == "visible" ? "flex" : "none", position: "fixed", width: '100%', height: '100%', marginTop: "-607px",marginLeft:"-840px", opacity: '0.4', backgroundColor: "black" }}>
          <CircularProgress
            style={{
              // backgroundColor: 'yellow',
              // className:'div.third',
              // opacity:'0.4',
              width: "100px",
              height: "100px",
              color: "#5eb8b3",
              visibility: circular,
            }}
          />
        </div>

</>
  );
}


export default PatternWizard;