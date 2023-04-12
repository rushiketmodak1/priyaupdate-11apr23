import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";

import { handleSelectionLayerPallet, handleSelectionIntLayer } from "../Controller/lcController";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LayerCreator = ({

    handleChangepanel,
    expanded_panel,
    layerGrid,
    G_typeoptions6,

    S_cases_Schema_A,
    S_cases_Schema_B,
    S_cases_Schema_C,

    S_setVariantName_SchemaA,
    S_setVariantName_SchemaB,
    S_setVariantName_SchemaC,

    t,
    color1,
    obj,

    G_layerdata,
    G_intermediate_layer,
    G_layer_name,
    G_layer_sequence,
    S_palletid,
    S_layer_data,
    S1_layer_data,




}) => {
    return (

        <Grid item xs={12} style={{ marginTop: "7px", }} >
            <ExpansionPanel style={{ boxShadow: "none", left: "-11px", overflow: "hidden", backgroundColor: "#f5f5f5" }}
                expanded={expanded_panel === 'panel4'}
                onChange={handleChangepanel('panel4')}
            // onClick={this.drawPallet_1_2}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography>{t('layerCreator')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            // overflowY:"hidden",
                            // overflow:"hidden",
                            padding: 0,
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                width: "100%", height: "48px",
                                marginBottom: "4px",
                                backgroundColor: color1,
                            }}
                        >
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayer')}
                                // className={classes.textField}
                                margin="dense"
                                style={{ height: 27, width: "42%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", top: "5px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                            />
                            <Checkbox
                                className="checkbox"
                                style={{ left: "198px" }}
                                {...label}
                                checked={obj.length > 0 ? obj[0]?.intermediatelayer : true}
                                // onChange={this.handleSelection("intermediate_Layer")}
                                // onBlur={this.updateSelection}
                                onChange={handleSelectionIntLayer({
                                    name: "intermediatelayer", 
                                    value: 0,
                                    G_layerdata,
                                    G_intermediate_layer,
                                    G_layer_name,
                                    G_layer_sequence,
                                    S_palletid,
                                    S1_layer_data,
                                })}
                                onBlur={layerGrid}
                            />
                        </Grid>
                        {/* {[...Array(this.state.layer_data.length)].map( */}
                        {S_layer_data.length > 0 && [...Array(S_layer_data.length - 1)].map(
                            // (console.log(""))
                            (value, index) => {
                                console.log(
                                    " array1 " + S_layer_data.length
                                  );
                                return (
                                    <>

                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                padding: 0,
                                                width: "100%", height: "48px",
                                                marginBottom: "4px",
                                                backgroundColor: color1,
                                            }}
                                        >


                                            <TextField
                                                id="outlined-read-only-input"
                                                label=""
                                                value={t('layer') + " " + (index + 1)}
                                                // className={classes.textField}
                                                margin="dense"
                                                style={{ height: 27 }}
                                                InputProps={{
                                                    readOnly: true,
                                                    disableUnderline: true,
                                                    style: { fontSize: 12, left: "10px", bottom: "2px", width: "95%", top: "5px", padding: 1 }
                                                }}
                                                variant="standard"
                                                size="small"
                                            />
                                            <TextField
                                                style={{ border: "1px solid white !important", top: "10px", left: "72px", padding: "0px", margin: "0px", width: "42%" }}
                                                id="outlined-type"
                                                value={obj[index + 1].layername}
                                                onChange={handleSelectionLayerPallet({
                                                    name: "layername", 
                                                    value: index + 1,
                                                    G_layerdata,
                                                    G_layer_name,
                                                    G_layer_sequence,
                                                    S_palletid,
                                                    S_layer_data,
                                                    S1_layer_data,
                                                })}
                                                onBlur={layerGrid}
                                                select
                                                // className={classes.textField3}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    style: { fontSize: "12px" },
                                                }}
                                                InputProps={{
                                                    style: { fontSize: "12px" },
                                                }}
                                                margin="dense"
                                                // style={{ height: 38 ,marginLeft:110}}
                                                variant="outlined"
                                                size="small"
                                            >
                                                {G_typeoptions6.filter((value, i) => {
                                                    if (value == "Schema A") {
                                                        if (S_cases_Schema_A == 0 || S_setVariantName_SchemaA == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }
                                                    if (value == "Schema B") {
                                                        if (S_cases_Schema_B == 0 || S_setVariantName_SchemaB == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }
                                                    if (value == "Schema C") {
                                                        if (S_cases_Schema_C == 0 || S_setVariantName_SchemaC == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }

                                                }).map(
                                                    (value, index) => {
                                                        return (
                                                            <MenuItem value={value}>
                                                                {value}
                                                            </MenuItem>
                                                        );
                                                    }
                                                )}
                                            </TextField>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                padding: 0,
                                                width: "100%", height: "48px",
                                                marginBottom: "4px",
                                                backgroundColor: color1,
                                            }}
                                        >
                                            <TextField
                                                id="outlined-read-only-input"
                                                label=""
                                                defaultValue={t('intermediateLayer')}
                                                // className={classes.textField}
                                                margin="dense"
                                                style={{ height: 27, width: "42%px" }}
                                                InputProps={{
                                                    readOnly: true,
                                                    disableUnderline: true,
                                                    style: { fontSize: 12, left: "10px", bottom: "2px", top: "4px", padding: 1 }
                                                }}
                                                variant="standard"
                                                size="small"
                                            />
                                            <Checkbox
                                                className="checkbox"
                                                // style={{ marginLeft: "124px" }}
                                                // {...label}
                                                style={{ left: "250px" }}
                                                {...label}
                                                checked={obj[index + 1].intermediatelayer}
                                                onChange={handleSelectionIntLayer({
                                                    name: "intermediatelayer", 
                                                    value: index + 1,
                                                    G_layerdata,
                                                    G_intermediate_layer,
                                                    G_layer_name,
                                                    G_layer_sequence,
                                                    S_palletid,
                                                    S1_layer_data,
                                                })}
                                                onBlur={layerGrid}
                                            />
                                        </Grid>
                                    </>
                                );
                            }
                        )}

                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

    );
}

export default LayerCreator;
