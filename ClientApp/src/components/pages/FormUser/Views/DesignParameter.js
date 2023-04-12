import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";

import {
    handleSelection_PalletType,
    updateSelection3,
    handleChangeForCasesSchemaA,
    handleChangeForCasesSchemaB,
    handleChangeForCasesSchemaC,
    changeLayer,
    handleSelection_CaseType,
    updateSelection2
} from '../Controller/dpController'

const DesignParameter = ({ handleChangepanel,
    drawPallet_1_2,
    expanded_panel,
    value_PalletType,
    onBlur_PalletType,
    value_CaseType,
    onBlur_CaseType,
    onChange_CaseType,
    value_IntermediateLayerType,
    value_LayerCreator,
    onChange_LayerCreator,
    onBlur_LayerCreator,
    value_SchemaA,
    onChange_SchemaA,
    onBlur_SchemaA,
    value_SchemaB,
    onChange_SchemaB,
    onBlur_SchemaB,
    value_SchemaC,
    onChange_SchemaC,
    onBlur_SchemaC,
    t,
    color1,
    typeoptions1,
    WA_1_width_X_Dir,
    WA_1_Length_Y_Dir,
    G_WA_1_Offset_Y_Dir,
    G_WA_1_Offset_X_Dir,
    WA_2_width_X_Dir,
    WA_2_Length_Y_Dir,
    G_WA_2_Offset_Y_Dir,
    G_WA_2_Offset_X_Dir,
    typeoptions3,
    error_NumberOfInter,
    helper_Text,
    error1,
    helperText1,
    exceptThisSymbols,
    palletType1,
    palletType2,
    updatefor_Basiparameter_working_Area,
    handleSelection_intermediateLayer,
    setPallete_Type,
    setintermediate_Layer_Type,
    updatePallet,
    G_intermediateLayerType1,
    G_intermediateLayerType2,
    S_errorHelperForInter,
    S_errorNumberOfInter,
    setS_errorHelperForInter,
    setS_errorNumberOfInter,
    setS_intermediate_Layer_Type,
    G_setVariantName_SchemaA,
    G_cases_Schema_A1,
    G_CasesSchemaA,
    G_cases_Schema_A2,
    G_colorA,
    G_colorB,
    G_colorC,
    setSetVariantName_SchemaA,
    setCases_Schema_A,
    casesSchemaPrcUpdate,
    forceUpdate,
    G_setVariantName_SchemaB,
    G_cases_Schema_B1,
    G_CasesSchemaB,
    G_cases_Schema_B2,
    setSetVariantName_SchemaB,
    setCases_Schema_B,
    setS_errorNumberOfLayer,
    setS_errorHelperForLayer,
    setS_layers,
    G_noOfLayers,
    setS_no_Of_Layers,
    G_drawCaseImage,
    setS_outside_Label_Priority,
    G_outside_Label_Priority,
    splitCaseType,
    G_listForOutsideLabelPrior,
    getCallLabel,
    G_typeoptions5,
    G_caseType,
    selectedOne,
    selectedTwo,
    firstCaseOriginChangeFlush,
    firstCaseOriginChangeFlushA,
    firstCaseOriginChangeFlushB,
    firstCaseOriginChangeFlushC,
    G_tempLabelindex,
    setS_case_Type,
    clearingSchemaFields,
    setS_setDefaultCase,
    setS_caseTypeSet,
    G_setVariantName_SchemaC,
    setS_setVariantName_SchemaC,
    G_cases_Schema_C1,
    G_CasesSchemaC,
    G_cases_Schema_C2,
    setS_cases_Schema_C,
    setS_pallete_Type,
    G_palletType1,
    G_palletType2,
    clearingSchemaFields1,
    S1_dyMarginTop_swiperText,
    S1_dyMarginLeft_swiperText,
    S1_dyMarginBottom_swiperText,
    toast,

}) => {

    return (

        <Grid item xs={12} style={{ marginTop: "7px", }} >
            <ExpansionPanel style={{ boxShadow: "none", left: "-11px", backgroundColor: "#f5f5f5" }}
                expanded={expanded_panel === 'panel2'}
                onChange={handleChangepanel('panel2')}
                onClick={(e) => drawPallet_1_2(e)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography>{t('designParameter')}</Typography>

                </ExpansionPanelSummary>

                <ExpansionPanelDetails>

                    <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >

                        <Grid item xs={12} className="Basic" style={{ display: 'flex', width: "100%", height: "48px", flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('palletType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "42.8%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "3px", top: "7px", padding: 1 }
                                }}
                                variant="standard"
                                size="large"
                            />
                            <TextField
                                style={{ border: "1px solid white !important", left: "15px", padding: "0px", margin: "0px", width: "42.5%", top: "11px" }}
                                id="outlined-type"
                                value={value_PalletType}
                                onChange={(e) => handleSelection_PalletType(
                                    "palletType",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setintermediate_Layer_Type,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,                                    
                                    toast
                                )}
                                onBlur={onBlur_PalletType}
                                select


                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {typeoptions1.filter((onePalType, i) => {

                                    let split_width = onePalType.split(" ")[4];
                                    let split_Length = onePalType.split(" ")[2];
                                    let WA_width_X_Dir = selectedOne ? WA_1_width_X_Dir : WA_2_width_X_Dir ;
                                    let WA_Length_Y_Dir = selectedOne ? WA_1_Length_Y_Dir : WA_2_Length_Y_Dir;
                                    let G_WA_Offset_Y_Dir = selectedOne ? G_WA_1_Offset_Y_Dir : G_WA_2_Offset_Y_Dir;
                                    let G_WA_Offset_X_Dir = selectedOne ? G_WA_1_Offset_X_Dir : G_WA_2_Offset_X_Dir ;
                                    
                                    if ((WA_Length_Y_Dir - Math.abs(G_WA_Offset_X_Dir)) >= split_Length && (WA_width_X_Dir - Math.abs(G_WA_Offset_Y_Dir)) >= split_width) {

                                        return true;
                                    } else {
                                        return false;
                                    }

                                }).map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('caseType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "42.8%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "3px", top: "7px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                style={{ border: "1px solid white !important", left: "15px", padding: "0px", margin: "0px", width: "42.5%", top: "11px" }}
                                id="outlined-type"
                                value={value_CaseType}
                                onBlur={(e) => updateSelection2(updatePallet, e)}
                                onChange={(event) => handleSelection_CaseType(
                                    "caseType",
                                    event,
                                    G_drawCaseImage,
                                    setS_outside_Label_Priority,
                                    G_outside_Label_Priority,
                                    splitCaseType,
                                    G_listForOutsideLabelPrior,
                                    getCallLabel,
                                    G_typeoptions5,
                                    G_caseType,
                                    selectedOne,
                                    selectedTwo,
                                    firstCaseOriginChangeFlush,
                                    G_tempLabelindex,
                                    setS_case_Type,
                                    clearingSchemaFields,
                                    setS_setDefaultCase,
                                    setS_caseTypeSet
                                )}
                                // onChange={(event)=>onChange_CaseType("caseType")(event)}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {typeoptions3.map((value, index) => {

                                    // let displayingValue = value.split("_")[0];
                                    let displayingValue = value.split("_", (value.split("_").length - 3)).join('_');

                                    return <MenuItem value={value}>{displayingValue}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayerType')}
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
                                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "134px", height: "27px", top: "12px", width: "29.4%" }}
                                error={error_NumberOfInter}
                                helperText={helper_Text}
                                id="outlined-zdim"
                                value={value_IntermediateLayerType}
                                onChange={(e) => handleSelection_PalletType(
                                    "intermediateLayerType",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setintermediate_Layer_Type,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,
                                )}
                                onBlur={(e) => updateSelection3(
                                    e,
                                    "intermediateLayerType",
                                    updatePallet,
                                    G_intermediateLayerType1,
                                    G_intermediateLayerType2,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    setS_intermediate_Layer_Type)}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />
                            <div
                                class="child_div_2"
                                style={{ fontSize: 12, marginTop: "16px", marginLeft: "148px" }}
                            >
                                mm{" "}
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberOfLayers')}
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
                                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", margin: "0px", padding: "0px", left: "134px", height: "27px", top: "12px", width: "29.4%" }}
                                error={error1}
                                helperText={helperText1}
                                id="outlined-zdim"
                                // label="Height"
                                value={value_LayerCreator}
                                onChange={(e) => changeLayer(
                                    e,
                                    setS_errorNumberOfLayer,
                                    setS_errorHelperForLayer,
                                    setS_layers,
                                    G_noOfLayers,
                                    setS_no_Of_Layers
                                )}
                                onBlur={onBlur_LayerCreator}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaA')}
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
                                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", margin: "0px", padding: "0px", left: "134px", height: "27px", top: "12px", width: "29.4%" }}
                                id="outlined-zdim"
                                // label="Height"
                                value={value_SchemaA}
                                onChange={(e) => handleChangeForCasesSchemaA(
                                    "CasesSchemaA",
                                    e,
                                    G_setVariantName_SchemaA,
                                    G_cases_Schema_A1,
                                    G_CasesSchemaA,
                                    G_cases_Schema_A2,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    setSetVariantName_SchemaA,
                                    setCases_Schema_A,
                                    casesSchemaPrcUpdate,
                                    forceUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushA
                                )}
                                onBlur={onBlur_SchemaA}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaB')}
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
                                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "134px", height: "27px", top: "12px", width: "29.4%" }}
                                id="outlined-zdim"
                                // label="Height"
                                value={value_SchemaB}
                                //disabled={true}
                                onChange={(e) => handleChangeForCasesSchemaB(
                                    "CasesSchemaB",
                                    e,
                                    G_setVariantName_SchemaB,
                                    G_cases_Schema_B1,
                                    G_CasesSchemaB,
                                    G_cases_Schema_B2,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    setSetVariantName_SchemaB,
                                    setCases_Schema_B,
                                    forceUpdate,
                                    casesSchemaPrcUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushB
                                )}
                                onBlur={onBlur_SchemaB}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaC')}
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
                                style={{ border: "1px solid white !important", backgroundColor: "white", margin: "0px", padding: "0px", left: "134px", height: "27px", top: "12px", width: "29.4%" }}
                                id="outlined-zdim"
                                // label="Height"
                                value={value_SchemaC}
                                onChange={(e) => handleChangeForCasesSchemaC(
                                    "CasesSchemaC",
                                    e,
                                    G_setVariantName_SchemaC,
                                    setS_setVariantName_SchemaC,
                                    G_cases_Schema_C1,
                                    G_CasesSchemaC,
                                    G_cases_Schema_C2,
                                    setS_cases_Schema_C,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    casesSchemaPrcUpdate,
                                    forceUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushC
                                )}
                                onBlur={onBlur_SchemaC}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                //disabled={true}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                    </Grid>

                </ExpansionPanelDetails>

            </ExpansionPanel>

        </Grid>
    );
}


export default DesignParameter;



