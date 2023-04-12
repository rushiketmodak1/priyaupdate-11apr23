


// function Welcome(props) {
// export const
// const Welcome = (props) => {

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";

// import {
//     updateSelectionPal2, firstCase12OnChange, updateSelectionCase1, updateSelectionCase2,
//     callBlurFor_WorkingareaX, callBlurFor_WorkingareaY, callBlurFor_WorkingareaoffsetX, callBlurFor_WorkingareaoffsetY,
//     callBlurFor_Workingareafor2X, callBlurFor_Workingareafor2Y, callBlurFor_WorkingareaoffsetXfor2, callBlurFor_WorkingareaoffsetYfor2
//   } from './Controller/bpController';


import {
    updateSelectionPal2,
    firstCase12OnChange, updateSelectionCase1, updateSelectionCase2,
    callBlurFor_WorkingareaX, callBlurFor_WorkingareaY, callBlurFor_WorkingareaoffsetX, callBlurFor_WorkingareaoffsetY
    , callBlurFor_Workingareafor2X, callBlurFor_Workingareafor2Y, callBlurFor_WorkingareaoffsetXfor2, callBlurFor_WorkingareaoffsetYfor2
} from '../Controller/bpController';

// import Green_arrow from './Green_arrow.png';



const BasicParameter = ({ handleChangepanel,
    drawPallet_1_2,
    expanded_panel,
    enablefor2,
    handleSelection,
    originPal1,
    updateSelectionPal1,
    basic_parameter,
    enablefor1,
    originPal2,
    // onBlur_OriginPal2,
    firstcase_pal1,
    // firstCase12OnChange,
    // updateSelectionCase1,
    firstcase_pal2,
    // updateSelectionCase2,

    //
    errorWorkingaraeaWidth,
    errorHelperForWorkingareaWidth,
    // callBlurFor_WorkingareaX,

    errorWorkingaraeaLength,
    errorHelperForWorkingareaLength,
    G_Pallet_Length,
    S_WA_1_Length_Y_Dir,
    G_WA_1_Length_Y_Dir,

    // callBlurFor_WorkingareaY,

    //Offset
    errorWorkingaraeaoffsetLength,
    errorHelperForWorkingareaoffsetLength,
    WA_1_Offset_Y_Dir,

    errorWorkingaraeaoffsetWidth,
    errorHelperForWorkingareaoffsetWidth,
    // S_WA_1_Offset_X_Dir,
    // callBlurFor_WorkingareaoffsetX,

    //2
    errorWorkingaraeaWidthfor2,
    errorHelperForWorkingareaWidthfor2,
    WA_2_width_X_Dir,
    // callBlurFor_Workingareafor2X,

    errorWorkingaraeaLengthfor2,
    errorHelperForWorkingareaLengthfor2,
    S_WA_2_Length_Y_Dir,
    // callBlurFor_Workingareafor2Y,

    errorWorkingaraeaoffsetLengthfor2,
    errorHelperForWorkingareaoffsetLengthfor2,
    S_WA_2_Offset_Y_Dir,
    // callBlurFor_WorkingareaoffsetYfor2,

    errorWorkingaraeaoffsetWidthfor2,
    errorHelperForWorkingareaoffsetWidthfor2,
    S_WA_2_Offset_X_Dir,
    // callBlurFor_WorkingareaoffsetXfor2,


    t,
    color1,
    Green_arrow,
    Red_arrow,
    exceptThisSymbols1,
    exceptThisSymbols,
    firstCaseOriginChangeFlush,
    circle,
    updatePallet,
    selectedOne,
    selectedTwo,
    CasesSchemaA,
    CasesSchemaB,
    CasesSchemaC,
    cases_Schema_A1,
    cases_Schema_B1,
    cases_Schema_C1,
    cases_Schema_A2,
    cases_Schema_B2,
    cases_Schema_C2,
    G_firstcase_pal1,
    G_firstcase_pal2,

    G_WA_1_width_X_Dir,
    S_WA_1_width_X_Dir,
    G_Pallet_Width,
    setWA_1_width_X_Dir,
    setErrorWorkingaraeaWidth,
    setErrorHelperForWorkingareaWidth1,
    set_WA_1_Length_Y_Dir,
    setErrorWorkingaraeaLength,
    setErrorHelperForWorkingareaLength1,

    G_originPal1,
    G_WA_1_Offset_X_Dir,
    S_WA_1_Offset_X_Dir,
    set_WA_1_Offset_X_Dir,
    setErrorWorkingaraeaoffsetWidth,
    setErrorHelperForWorkingareaoffsetWidth1,


    G_WA_1_Offset_Y_Dir,
    S_WA_1_Offset_Y_Dir,
    set_WA_1_Offset_Y_Dir,
    setErrorWorkingaraeaoffsetLength,
    setErrorHelperForWorkingareaoffsetLenght1,


    G_WA_2_width_X_Dir,
    S_WA_2_width_X_Dir,
    set_WA_2_width_X_Dir,
    setErrorWorkingaraeaWidthfor2,
    setErrorHelperForWorkingareaWidthfor2,


    G_WA_2_Length_Y_Dir,
    set_WA_2_Length_Y_Dir,
    setErrorWorkingaraeaLengthfor2,
    setErrorHelperForWorkingareaLengthfor2,

    G_originPal2,
    G_WA_2_Offset_X_Dir,
    set_WA_2_Offset_X_Dir,
    setErrorWorkingaraeaoffsetWidthfor2,
    setErrorHelperForWorkingareaoffsetWidthfor2,

    G_WA_2_Offset_Y_Dir,
    set_WA_2_Offset_Y_Dir,
    setErrorWorkingaraeaoffsetLengthfor2,
    setErrorHelperForWorkingareaoffsetLengthfor2,
    setS_role


}) => {
    return (

        <Grid item xs={12} style={{ marginTop: "-9px", }}>
                  <ExpansionPanel style={{ boxShadow: "none", left: "-11px", backgroundColor: "#f5f5f5" }}
                expanded={expanded_panel === 'panel1'}
                onChange={handleChangepanel('panel1')}
                onClick={(e) => drawPallet_1_2(e)}>
                <ExpansionPanelSummary
                    // onMouseEnter={() => this.knowAllCasedata()}
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography>{t('BasicParameter')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >

                        <Grid item xs={12} className='Basics' style={{ display: 'flex', width: "100%", height: "48px", flexDirection: 'row', padding: 0, marginBottom: "4px", backgroundColor: color1 }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal1')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "43.6%", top: "8px" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={{ border: "1px solid white !important", top: "11px", left: "15px", padding: "0px", margin: "0px", width: "42.5%" }}
                                id="outlined-type"
                                disabled={enablefor2 || setS_role === "regular"}
                                value={originPal1}
                                onChange={handleSelection("OriginPal1")}
                                onBlur={updateSelectionPal1}
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
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} className="Basics" style={{ display: 'flex', width: "100%", height: "48px", backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal2')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "43.6%", top: "8px" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={{ border: "1px solid white !important", top: "11px", left: "15px", padding: "0px", margin: "0px", width: "42.5%" }}
                                id="outlined-type"
                                disabled={enablefor1 || setS_role === "regular"}
                                value={originPal2}

                                onChange={handleSelection("OriginPal2")}
                                onBlur={(e) => updateSelectionPal2(
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    selectedOne,
                                    selectedTwo,
                                    circle,
                                    G_firstcase_pal2,
                                    G_firstcase_pal1,
                                    updatePallet,
                                )}
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
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
          return <MenuItem value={value}>{value}</MenuItem>;
        })} */}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} className="Basics" style={{ display: 'flex', width: "100%", height: "48px", backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal1')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "43.6%", top: "8px" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={{ border: "1px solid white !important", top: "11px", left: "15px", padding: "0px", margin: "0px", width: "42.5%" }}
                                id="outlined-type"
                                disabled={enablefor2 || setS_role === "regular"}
                                value={firstcase_pal1}
                                onChange={(e) => firstCase12OnChange("pal1", e, firstCaseOriginChangeFlush, circle)}
                                onBlur={(e) => updateSelectionCase1(
                                    circle,
                                    updatePallet,
                                    selectedOne,
                                    selectedTwo,
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    G_firstcase_pal1,
                                    G_firstcase_pal2,
                                    e
                                )}
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
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>


                        <Grid item xs={12} className="Basics" style={{ display: 'flex', width: "100%", height: "48px", backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal2')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "43.6%", top: "8px" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={{ border: "1px solid white !important", top: "11px", left: "15px", padding: "0px", margin: "0px", width: "42.5%" }}
                                id="outlined-type"
                                disabled={enablefor1 || setS_role === "regular"}
                                value={firstcase_pal2}

                                // onChange={this.handleSelection("Firstpal2")}
                                onChange={(e) => firstCase12OnChange("pal2", e, firstCaseOriginChangeFlush, circle)}
                                onBlur={(e) => updateSelectionCase2(
                                    circle,
                                    updatePallet,
                                    selectedOne,
                                    selectedTwo,
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    G_firstcase_pal1,
                                    G_firstcase_pal2,
                                    e,
                                )}
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
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>


                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea1Width')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#82b366', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaWidth}
                                    helperText={errorHelperForWorkingareaWidth}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_width_X_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaX(
                                        e,
                                        updatePallet,
                                        G_WA_1_width_X_Dir,
                                        S_WA_1_width_X_Dir,
                                        G_Pallet_Width,
                                        setWA_1_width_X_Dir,
                                        setErrorWorkingaraeaWidth,
                                        setErrorHelperForWorkingareaWidth1,
                                    )}
                                    onChange={handleSelection("working_area_1_Width_X_Direction")}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    // width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea1Length')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#b85450', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaLength}
                                    helperText={errorHelperForWorkingareaLength}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Length_Y_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaY(
                                        e,
                                        updatePallet,
                                        G_WA_1_Length_Y_Dir,
                                        G_Pallet_Length,
                                        set_WA_1_Length_Y_Dir,
                                        setErrorWorkingaraeaLength,
                                        setErrorHelperForWorkingareaLength1,
                                    )}
                                    onChange={handleSelection("working_area_1_Length_Y_Direction")}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    width="60"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        {/* Offset  */}

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea1Offset')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#b85450', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                        <TrendingFlatIcon id="trending-flaticon" />
                                      </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaoffsetLength}
                                    helperText={errorHelperForWorkingareaoffsetLength}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Offset_Y_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetY(
                                        e,
                                        G_originPal1,
                                        G_Pallet_Width,
                                        G_WA_1_width_X_Dir,
                                        G_WA_1_Offset_Y_Dir,
                                        S_WA_1_Offset_Y_Dir,
                                        set_WA_1_Offset_Y_Dir,
                                        setErrorWorkingaraeaoffsetLength,
                                        setErrorHelperForWorkingareaoffsetLenght1,
                                        updatePallet,
                                    )}
                                    onChange={handleSelection("working_area_1_Offset_Y_Direction")}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}

                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea1Offset')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#82b366', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaoffsetWidth}
                                    helperText={errorHelperForWorkingareaoffsetWidth}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Offset_X_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetX(
                                        e,
                                        G_originPal1,
                                        G_Pallet_Length,
                                        G_WA_1_Length_Y_Dir,
                                        G_WA_1_Offset_X_Dir,
                                        S_WA_1_Offset_X_Dir,
                                        set_WA_1_Offset_X_Dir,
                                        setErrorWorkingaraeaoffsetWidth,
                                        setErrorHelperForWorkingareaoffsetWidth1,
                                        updatePallet
                                    )}
                                    onChange={handleSelection("working_area_1_Offset_X_Direction")}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        {/* 2 */}

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: "12px" }}
                                >
                                    {t('workingArea2Width')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: "12px" }}
                                >
                                    {/* <div style={{ color: '#82b366', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaWidthfor2}
                                    helperText={errorHelperForWorkingareaWidthfor2} //done up to 
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}
                                    value={S_WA_2_width_X_Dir}
                                    onChange={handleSelection("working_area_2_Width_X_Direction")}
                                    onBlur={(e) => callBlurFor_Workingareafor2X(
                                        e,
                                        G_WA_2_width_X_Dir,

                                        G_Pallet_Width,
                                        set_WA_2_width_X_Dir,
                                        setErrorWorkingaraeaWidthfor2,
                                        setErrorHelperForWorkingareaWidthfor2,
                                        updatePallet,

                                    )}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}

                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea2Length')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#b85450', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaLengthfor2}
                                    helperText={errorHelperForWorkingareaLengthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Length_Y_Dir}
                                    onChange={handleSelection("working_area_2_Length_Y_Direction")}
                                    onBlur={(e) => callBlurFor_Workingareafor2Y(
                                        e,
                                        G_Pallet_Length,
                                        G_WA_2_Length_Y_Dir,
                                        set_WA_2_Length_Y_Dir,
                                        setErrorWorkingaraeaLengthfor2,
                                        setErrorHelperForWorkingareaLengthfor2,
                                        updatePallet
                                    )}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>


                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea2Offset')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {/* <div style={{ color: '#b85450', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                        <TrendingFlatIcon id="trending-flaticon" />
                                      </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaoffsetLengthfor2}
                                    helperText={errorHelperForWorkingareaoffsetLengthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Offset_Y_Dir}
                                    onChange={handleSelection("working_area_2_Offset_Y_Direction")}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetYfor2(
                                        e,
                                        G_originPal2,
                                        G_WA_2_Offset_Y_Dir,
                                        G_WA_2_width_X_Dir,
                                        G_Pallet_Width,
                                        set_WA_2_Offset_Y_Dir,
                                        setErrorWorkingaraeaoffsetLengthfor2,
                                        setErrorHelperForWorkingareaoffsetLengthfor2,
                                        updatePallet,
                                    )}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1
                            }}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: "12px" }}
                                >
                                    {t('workingArea2Offset')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: "12px" }}
                                >
                                    {/* <div style={{ color: '#82b366', marginBottom:"8px", marginTop:"-13px", marginRight:"56px", marginLeft:"-67px"}} className="arrow" >
                                          <TrendingFlatIcon id="trending-flaticon" />
                                        </div> */}
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} style={{ color: "red", marginTop: "-16px", marginLeft: "-41px", width: "95px", }} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 30,
                                    width: 50,
                                    marginBottom: 8,
                                }}
                            >
                                <TextField
                                    style={{ border: "1px solid white !important", backgroundColor: "white", right: "21px", width: "143px", left: "16px", top: "3px", height: "27px", bottom: "3px" }}
                                    error={errorWorkingaraeaoffsetWidthfor2}
                                    helperText={errorHelperForWorkingareaoffsetWidthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Offset_X_Dir}
                                    onChange={handleSelection("working_area_2_Offset_X_Direction")}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetXfor2(
                                        e,
                                        G_originPal2,
                                        G_WA_2_Length_Y_Dir,
                                        G_Pallet_Length,
                                        G_WA_2_Offset_X_Dir,
                                        set_WA_2_Offset_X_Dir,
                                        setErrorWorkingaraeaoffsetWidthfor2,
                                        setErrorHelperForWorkingareaoffsetWidthfor2,
                                        updatePallet,
                                    )}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    InputProps={{
                                        style: { fontSize: "12px", top: "2px" }
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12, marginLeft: "-35px", marginBottom: "8px", marginTop: "-4px", }}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>



                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    );
}


export default BasicParameter;