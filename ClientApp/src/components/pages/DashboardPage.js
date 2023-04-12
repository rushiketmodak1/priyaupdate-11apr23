import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import logo from "./logo.png";
import FormUserPage1 from "./FormUser/FormUser1";
import PaletteDesignerPage from "./FormUser/PaletteDesigner";
import { useState } from "react";
// import { threedcases } from "./utils/threedcases";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// import DeleteIcon from "@material-ui/icons/Delete";
// import ForwardIcon from "@material-ui/icons/DoubleArrow";
import {
  DeleteOutline,
  EditOutlined,
  CloudDownloadOutlined,
} from "@material-ui/icons";
import { FileDownload } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { RadioGroup, Radio } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import { FormGroup, FormControlLabel } from "@mui/material";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from "@mui/material/Box";
import { Select, MenuItem } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import TranslateIcon from "@mui/icons-material/Translate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

var color1 = "#f5f5f5";
let arrayData = [];
let arrayData1 = [];
// const useStyles = makeStyles({
const useStyles = (theme) => ({
  table: {
    minWidth: 650,
    fontFamily: "Roboto",
    display: "flex",
  },
  tableHead: {
    display: "flex",
    fontFamily: "Roboto",
    flexDirection: "column",
  },
  tableBody: {
    display: "flex",
    fontFamily: "Roboto",
  },
  tableRow: {
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#f2f2f2",
    },

    display: "flex",
    fontFamily: "Roboto",
    flexDirection: "column",
  },
  root: {
    width: 19,
    height: 19,
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    marginTop: 50,
    marginLeft: 0,
    margin: "auto",
    border: "1px dashed",
  },
  textField: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 12,
  },
  textField5: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 12,
  },
  textField1: {
    marginLeft: 2,
    marginRight: 2,
    width: 18,
    fontSize: 12,
  },
  textField2: {
    marginLeft: 2,
    marginRight: 2,
    width: 100,
    fontSize: 12,
  },
  textField3: {
    marginLeft: 2,
    marginRight: 2,
    height: 27,
    width: 120,
    fontSize: 12,
  },
  radioLabel: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 18,
    fontSize: 12,
  },
  dense: {
    marginTop: 16,
  },
  scrollable: {
    maxHeight: "0vh",
    overflow: "auto",
  },
  menu: {
    width: 200,
  },
  /* STYLES FOR THE OUTLINE BORDER */
  specialOutline: {
    borderColor: "pink",
    borderWidth: 4,
  },
});

const threedwidth = 791;
const threedheight = 372;
const widgetwidth = 526;
const paddingadjust = 0;
const styles = {
  listItem: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginLeft: "-8px",
    textAlign: "left",
  },
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      item: "",
      item1: "",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      id: "",
      pId: "",
      AllPid: [],
      Allcases: [],
      caseRename: "",
      caseSave: "",
      PalletRename: "",
      PalletSaveAs: "",
      caseName: "",
      palletName: "",
      palletnames: [],
      pallets: [],
      threedcases: [],
      threedRows: [],
      casenames: [],
      imprtData: [],
      role: "guest",
      selectcase: "",
      importCase: "",
      compareAddCase: "",
      compareSaveCase: "",
      compareAddPallet: "",
      compareSavePallet: "",
      compareValues: [],
      importFile: [],
      importFilePallet: [],
      caseImport: "",
      casepallet: "",

      selectpallet: "",
      operationCompleted: false,
      operation: "",
      expanded: "",
      panelname: "",
      threedcases: [],
      imprtData1: [],
      imprtData2: [],
    };
    // this.threedcases = [];
    this.threedpallet = [];
    this.Allcases = [];
    this.casenames = [];
    this.imprtData1 = [];
    this.imprtData2 = [];
    this.compareValues = [];
    this.importFile = [];
    this.importFilePallet = [];
    this.palletnames = [];
    this.updatedCheckedState = [];
    this.AllPid = [];
    this.handleSelectionRename = this.handleSelectionRename.bind(this);
    this.importFilePalletToDB = this.importFilePalletToDB.bind(this);
    this.ImporthandleSelection = this.ImporthandleSelection.bind(this);
    this.ImporthandleSelectionForPalletFile = this.ImporthandleSelectionForPalletFile.bind(this);
    this.handleSelectionFileImport = this.handleSelectionFileImport.bind(this);
    this.handleSelectionSaveAs = this.handleSelectionSaveAs.bind(this);
    this.handleSelectionPalletRename = this.handleSelectionPalletRename.bind(this);
    this.handleSelectionPalletSaveAS = this.handleSelectionPalletSaveAS.bind(this);
    this.RenamePallet = this.RenamePallet.bind(this);
    this.SaveAsPallet = this.SaveAsPallet.bind(this);
    this.RenameCase = this.RenameCase.bind(this);
    this.SaveCase = this.SaveCase.bind(this);
    this.VerifyOldCaseAndNewCase = this.VerifyOldCaseAndNewCase.bind(this);
    this.VerifyOldPalletAndPallet = this.VerifyOldPalletAndPallet.bind(this);

    this.firstEvent = this.firstEvent.bind(this);
    this.secondEvent = this.secondEvent.bind(this);
    this.palletEvent = this.palletEvent.bind(this);
    this.thirdEvent = this.thirdEvent.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.saveLabel = this.saveLabel.bind(this);
    this.deleteAllLabel = this.deleteAllLabel.bind(this);
    this.getAllLabels = this.getAllLabels.bind(this);
    this.initCases = this.initCases.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.getAuthInfo = this.getAuthInfo.bind(this);
    this.sleep = this.sleep.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.executeUserAction = this.executeUserAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.charallow = this.charallow.bind(this);
    this.charallowpallet = this.charallowpallet.bind(this);
    this.deleteOneCase = this.deleteOneCase.bind(this);
    this.deleteOnePallet = this.deleteOnePallet.bind(this);
    this.createThreedDataExport = this.createThreedDataExport.bind(this);
    this.createThreedData = this.createThreedData.bind(this);
    this.getPallets = this.getPallets.bind(this);
    this.downloadFilePallet = this.downloadFilePallet.bind(this);
    this.handleSelectionPallet = this.handleSelectionPallet.bind(this);
    this.executeUserActionPallet = this.executeUserActionPallet.bind(this);
    this.palletcharallow = this.palletcharallow.bind(this);
    this.deleteOnePallet = this.deleteOnePallet.bind(this);
    this.deleteAllPallet = this.deleteAllPallet.bind(this);
    this.addPallet = this.addPallet.bind(this);
    this.createPalletDataExport = this.createPalletDataExport.bind(this);
    this.handlexpand = this.handlexpand.bind(this);
    this.getImport = this.getImport.bind(this);
    this.getImport1 = this.getImport1.bind(this);

    this.initCases();
    this.toggle = false;
    this.tablecasenames = [];
    this.emailid = "xyz@gmail.com";
    this.username = "PeterPan";
    this.usergroup = "service";
    this.role = "guest";
    this.lcid = "1030";
    var auth = "xyz@gmail.com:guest";
    this.getAuthInfo();
    this.orgPalID = [];
    this.orgPalVal = [];
    this.pallets = [];
    this.setState({
      threedRows: [],
    });
  }

  initCases = async () => {
    // this.threedcases = [];
    this.state.threedcases = [];
    this.casenames = [];
    const records = await this.getAllLabels();

    let tempCaseNamesDuplicateCheck = [];
    for (let i = 0; i < records.length; i++) {
      tempCaseNamesDuplicateCheck.push(records[i].name);
    }
    for (var record of records) {
      let tempnamecount = 0;
      for (let i = 0; i < tempCaseNamesDuplicateCheck.length; i++) {
        if (tempCaseNamesDuplicateCheck[i] == record.name) {
          tempnamecount += 1;
        }
      }
      console.log("record.name = ", record.name, " count : ", tempnamecount);
      if (tempnamecount > 1) {
        if (record.labelname != null) {
          this.state.threedcases.push(record);
        }
      } else {
        this.state.threedcases.push(record);
      }

      if (this.casenames.length == 0) {
        this.casenames.push(record.name);
      } else {
        if (this.casenames.indexOf(record.name) > -1) {
          console.log("Case name already exists");
        } else {
          this.casenames.push(record.name);
        }
      }
    }
    if (this.casenames.length > 0) {
      this.state.selectcase = this.casenames[0];
    }
    console.log("this.casenames inside initCases = ", this.casenames);
    this.setState({
      casenames: this.casenames,
    });

    const palletRecords = await this.getPallets();
    for (var record of palletRecords) {
      console.log("record.name = ", record.palletName);
      this.pallets.push(record);

      let plt = {
        id: record.palletId,
        value: record.palletName,
      };
      if (this.palletnames.length == 0) {
        this.palletnames.push(plt);
      } else {
        if (this.palletnames.indexOf(record.palletName) > -1) {
          console.log("Pallet name already exists");
        } else {
          this.palletnames.push(plt);
        }
      }
    }
    if (this.palletnames.length > 0) {
      this.setState({
        selectpallet: this.palletnames[0].id,
      });
    }
    var clean;
    try {
      var arr = this.palletnames;
      clean = arr.filter(
        (arr, index, self) =>
          index === self.findIndex((t) => t.value === arr.value)
      );
      console.log("clean inside initCases = " + JSON.stringify(clean));
    } catch (e) {
      console.log("error inside initCases = " + e);
    }
    this.palletnames = [];
    this.palletnames = clean;
    console.log("this.palletnames inside initCases = ", this.palletnames);
    this.setState({
      palletnames: this.palletnames,
    });
  };

  componentDidMount() {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
      this.props.i18n.changeLanguage("en");
    } else {
      this.props.i18n.changeLanguage(localStorage.getItem("language"));
    }
    this.getImport();
    this.getImport1();
  }

  componentWillMount() {
    this.props.i18n.changeLanguage(localStorage.getItem("language"));
  }

  saveLabel = (value) => {
    axios
      .post("/Threed", value)
      .then((response) => {
        console.log("Case is saved successfully");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            console.log("Case save failure");
          }
        } else {
          console.log("Something went wrong. " + err);
        }
      });
  };
  handleSetLocalization = (e) => {
    //bind

    console.log("localization handeling" + e.target.value);

    if (e.target.value === "en") {
      localStorage.setItem("language", "en");
      this.props.i18n.changeLanguage("en");
    }
    if (e.target.value === "de") {
      localStorage.setItem("language", "de");
      this.props.i18n.changeLanguage("de");
    }

    // document.getElementById("localizationDropdown").blur();
  };

  createThreedDataExport = (
    name,
    width,
    length,
    height,
    mass,
    material,
    labelname,
    labelcolour,
    typename,
    labelx,
    labely,
    labelwidth,
    labelheight,
    directionx,
    directiony,
    directionz,
    createdBy,
    createdDatetime,
    updatedBy,
    updatedDatetime
  ) => {
    return {
      name,
      width,
      length,
      height,
      mass,
      material,
      labelname,
      labelcolour,
      typename,
      labelx,
      labely,
      labelwidth,
      labelheight,
      directionx,
      directiony,
      directionz,
      createdBy,
      createdDatetime,
      updatedBy,
      updatedDatetime,
    };
  };

  createThreedData = (
    id,
    name,
    width,
    length,
    height,
    mass,
    material,
    labelname,
    labelcolour,
    typename,
    labelx,
    labely,
    labelwidth,
    labelheight,
    directionx,
    directiony,
    directionz,
    createdBy,
    createdDatetime,
    updatedBy,
    updatedDatetime
  ) => {
    return {
      id,
      name,
      width,
      length,
      height,
      mass,
      material,
      labelname,
      labelcolour,
      typename,
      labelx,
      labely,
      labelwidth,
      labelheight,
      directionx,
      directiony,
      directionz,
      createdBy,
      createdDatetime,
      updatedBy,
      updatedDatetime,
    };
  };

  createPalletDataExport = (
    palletId,
    pallet_no,
    palletName,
    originPal1,
    originPal2,
    firstcasepal1,
    firstcasepal2,
    working_area_1_Width_X_Direction,
    working_area_1_Length_Y_Direction,
    working_area_1_Offset_X_Direction,
    working_area_1_Offset_Y_Direction,
    working_area_2_Offset_Y_Direction,
    working_area_2_Width_X_Direction,
    working_area_2_Length_Y_Direction,
    working_area_2_Offset_X_Direction,
    palletType,
    intermediateLayerType,
    caseType,
    noOfLayers,
    casesSchemaA,
    casesSchemaB,
    casesSchemaC,
    outsideLabelPriority,
    rule_symmetric_mass_distribution,
    horizontal_mass_distribution,
    vertical_mass_distribution,
    schemaA,
    schemaB,
    schemaC,
    layername,
    layerSequence,
    intermediatelayer,
    schema,
    pre_Pos_X,
    pre_Pos_Y,
    pre_Pos_Z,
    auto_generation,
    rotation,
    cases,
    offset_X_neg,
    offset_Y_neg,
    position,
    position_freezed
  ) => {
    return {
      palletId,
      pallet_no,
      palletName,
      originPal1,
      originPal2,
      firstcasepal1,
      firstcasepal2,
      working_area_1_Width_X_Direction,
      working_area_1_Length_Y_Direction,
      working_area_1_Offset_X_Direction,
      working_area_1_Offset_Y_Direction,
      working_area_2_Offset_Y_Direction,
      working_area_2_Width_X_Direction,
      working_area_2_Length_Y_Direction,
      working_area_2_Offset_X_Direction,
      palletType,
      intermediateLayerType,
      caseType,
      noOfLayers,
      casesSchemaA,
      casesSchemaB,
      casesSchemaC,
      outsideLabelPriority,
      rule_symmetric_mass_distribution,
      horizontal_mass_distribution,
      vertical_mass_distribution,
      schemaA,
      schemaB,
      schemaC,
      layername,
      layerSequence,
      intermediatelayer,
      schema,
      pre_Pos_X,
      pre_Pos_Y,
      pre_Pos_Z,
      auto_generation,
      rotation,
      cases,
      offset_X_neg,
      offset_Y_neg,
      position,
      position_freezed,
    };
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  charallow(e) {
    if (this.casenames.indexOf(e.target.value) > -1) {
      alert("Case name already exists");
      this.setState({
        item: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      alert("Special characters not allowed");
      this.setState({
        item: "",
      });
    } else {
      this.setState({ item: e.target.value });
      // this.setState({ item: e.target.value.replace(/[^a-zA-Z0-9-#_]/ig, '') });
    }
  }

  charallowpallet(e) {
    if (this.palletnames.indexOf(e.target.value) > -1) {
      alert("Pallet name already exists");
      this.setState({
        item1: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      alert("Special characters not allowed");
      this.setState({
        item1: "",
      });
    } else {
      this.setState({ item1: e.target.value });
      // this.setState({ item: e.target.value.replace(/[^a-zA-Z0-9-#_]/ig, '') });
    }
  }

  firstEvent = (event) => {
    if (this.casenames.indexOf(event.target.value) > -1) {
      alert("Case name already exists");
      this.setState({
        item: "",
      });
    } else {
      this.setState({
        item: event.target.value,
      });
    }
  };

  secondEvent = () => {
    if (this.state.item.trim() != "") {
      this.casenames.push(this.state.item);
      this.state.selectcase = this.state.item;
      this.setState({
        casenames: this.casenames,
      });
      this.setState({
        item: "",
      });
      axios
        .post("/Threed", {
          id: 0,
          name: this.state.selectcase,
        })
        .then((response) => {
          let data = response.data;
          console.log("data inside addCase " + JSON.stringify(data));
          this.setState({
            formClassName: "success",
            formSuccessMessage: response.data.msg,
          });

          let tempObj = {
            name: this.state.selectcase,
            length: 10,
            height: 10,
            width: 10,
            mass: 0,
            material: "Texture1",
            labelname: null,
            labelcolour: null,
            typename: null,
            labelx: null,
            labely: null,
            labelwidth: null,
            labelheight: null,
            directionx: null,
            directiony: null,
            directionz: null,
            createdBy: data.createdBy,
            createdDatetime: data.createdDatetime,
            updatedBy: data.updatedBy,
            updatedDatetime: data.updatedDatetime,
          };
          this.state.threedcases.unshift(tempObj);
          // this.initCases()
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data) {
              this.setState({
                formClassName: "warning",
                formErrorMessage: err.response.data.msg,
              });
            }
          } else {
            this.setState({
              formClassName: "warning",
              formErrorMessage: "Something went wrong. " + err,
            });
          }
        });
    } else {
      console.log("Case name is invalid");
      alert("Case name is invalid");
    }
  };

  palletEvent = () => {
    console.log("this.state.item1 inside palletEvent = " + this.state.item1);
    if (this.state.item1.trim() != "") {
      this.palletnames.push(this.state.item1);
      this.state.selectpallet = this.state.item1;
      this.setState({
        palletnames: this.palletnames,
      });
      this.setState({
        item1: "",
      });
    } else {
      console.log("Pallet name is invalid");
      alert("Pallet name is invalid");
    }
  };

  addPallet = () => {
    if (this.state.item1.trim() != "") {
      // this.palletnames.push(this.state.item1);
      this.state.selectpallet = this.state.item1;

      this.setState({
        item1: "",
      });

      axios
        .post("/Threed/savePallet", {
          palletId: 0,
          palletName: this.state.selectpallet,
        })
        .then((response) => {
          let data = response.data;
          let plt = {
            id: data.palletId,
            value: data.palletName,
          };

          this.pallets.push(data);

          this.palletnames.push(plt);
          this.setState({
            palletnames: this.palletnames,
          });

          this.setState({
            selectpallet: plt.id,
          });

          this.setState({
            formClassName: "success",
            formSuccessMessage: response.data.msg,
          });
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data) {
              this.setState({
                formClassName: "warning",
                formErrorMessage: err.response.data.msg,
              });
            }
          } else {
            this.setState({
              formClassName: "warning",
              formErrorMessage: "Something went wrong. " + err,
            });
          }
        });
    } else {
      console.log("Pallet name is invalid");
      alert("Pallet name is invalid");
    }
  };

  palletcharallow(e) {
    console.log("value inside palletcharallow" + e.target.value);
    let palletid = e.target.value;
    let palletTemp = this.palletnames;
    let palletnamesTemp = [];
    palletTemp.forEach(function (pallet, index) {
      palletnamesTemp.push(pallet.value);
    });
    if (palletnamesTemp.indexOf(e.target.value) > -1) {
      alert("Pallet name already exists");
      this.setState({
        item1: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,.<>\/+?~`]/)) {
      alert("Special characters not allowed");
      this.setState({
        item1: "",
      });
    } else {
      this.setState({ item1: e.target.value });
      // this.setState({ item: e.target.value.replace(/[^a-zA-Z0-9-#_]/ig, '') });
    }
  }

  getAuthInfo = async () => {
    let id = 0;
    let auth = "";
    try {
      let resonse = await axios.get(`/Threed/getInfo1`);
      auth = resonse.data;
      console.log("resonse = ", resonse);
      console.log("auth = ", auth);
      let authArr = auth.toString().split(":");
      // this.emailid = authArr[0];
      this.username = authArr[0];
      this.role = authArr[1];
      this.usergroup = authArr[2];
      this.lcid = authArr[3];
      const role = this.role;
      console.log("this.emailid = ", this.emailid);
      console.log("this.role = ", this.role);
      this.setState({
        role: role,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getAllLabels = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      console.log("records = ", records);
      return records;
    } catch (err) {
      console.log(err);
    }
  };

  getImport = async () => {
    try {
      await axios.get(`/Threed/getFiles`).then((response) => {
        console.log(response.data, "getFiles");
        if (response.data.length > -1) {
          this.setState({
            imprtData1: response.data,
          });
          console.log("records inside getImport = ", this.state.imprtData1);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  getImport1 = async () => {
    try {
      await axios.get(`/Threed/getFilesForPallet`).then((response) => {
        console.log(response.data, "getFilesforpalleet");
        if (response.data.length > -1) {
          this.setState({
            imprtData2: response.data,
          });
          console.log("records inside getImport 2 = ", this.state.imprtData2);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPallets = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed/getPallets`);
      records = resonse.data;
      console.log("records = ", records);
      return records;
    } catch (err) {
      console.log(err);
    }
  };

  deleteAllPallet = async (namein) => {
    let id = 0;
    const records = await this.getPallets();
    for (var record of records) {
      if (record.palletId === namein) {
        id = record.palletId;
        const url = "/Threed/deletePallet/" + id;
        await axios.delete(url, {}).catch((err) => {
          if (err.response) {
            if (err.response.data) {
              this.setState({
                formClassName: "warning",
                formErrorMessage: err.response.data.msg,
              });
            }
          } else {
            this.setState({
              formClassName: "warning",
              formErrorMessage: "Something went wrong. " + err,
            });
          }
        });
      }
    }
    return "deleted";
  };

  deleteAllLabel = async (namein) => {
    let id = 0;
    const records = await this.getAllLabels();
    for (var record of records) {
      if (record.name === namein) {
        id = record.id;
        const url = "/Threed/" + id;
        await axios.delete(url, {}).catch((err) => {
          if (err.response) {
            if (err.response.data) {
              this.setState({
                formClassName: "warning",
                formErrorMessage: err.response.data.msg,
              });
            }
          } else {
            this.setState({
              formClassName: "warning",
              formErrorMessage: "Something went wrong. " + err,
            });
          }
        });
      }
    }
    return "deleted";
  };

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  deleteOneCase = () => {
    const deletecasename = this.state.selectcase;
    const status = this.deleteAllLabel(deletecasename);
    this.sleep(2000);
    let casenamesTemp = this.casenames;
    casenamesTemp.forEach(function (casename, index) {
      if (casename === deletecasename) {
        //Remove from array
        casenamesTemp.splice(index, 1);
      }
    });
    this.casenames = casenamesTemp;
    this.state.threedcases.map(({ name }, index) => {
      console.log(name);
      if (deletecasename === name) {
        this.state.threedcases.splice(index, 1);
      }
    });
    if (this.casenames.length > 0) {
      this.state.selectcase = this.casenames[0];
    } else {
      this.state.selectcase = "";
    }
    this.updateTable();
    this.updatedCheckedState = [];
    this.setState({
      checked: [],
    });
  };

  deleteOnePallet = () => {
    const deletePallet = this.state.selectpallet;
    const status = this.deleteAllPallet(deletePallet);
    this.sleep(2000);
    let palletsTemp = this.pallets;
    palletsTemp.forEach(function (id, index) {
      if (id.palletId === deletePallet) {
        //Remove from array
        palletsTemp.splice(index, 1);
      }
    });
    this.pallets = palletsTemp;
    this.pallets.map(({ id }, index) => {
      console.log(id);
      if (deletePallet === id) {
        this.pallets.splice(index, 1);
      }
    });

    let palletsTemp1 = this.palletnames;
    palletsTemp1.forEach(function (id, index) {
      if (id.palletId === deletePallet) {
        //Remove from array
        palletsTemp1.splice(index, 1);
      }
    });
    this.palletnames = palletsTemp1;
    this.palletnames.map(({ id }, index) => {
      console.log(id);
      if (deletePallet === id) {
        this.palletnames.splice(index, 1);
      }
    });
    console.log("palletsTemp1 inside deleteOnePallet = " + palletsTemp1);
    this.setState({
      palletnames: this.palletnames,
    });
    let palname = "";
    if (palletsTemp1.length > 0) {
      this.state.selectpallet = palletsTemp1[0].id;
      palname = palletsTemp1[0].value;
    } else {
      this.state.selectpallet = "";
      palname = "";
    }
    //  // this.updateTable();
    //   this.updatedCheckedState = [];
    //   this.setState({
    //     checked: []
    //   });
    console.log("palname inside deleteOnePallet = " + palname);
    this.setState({
      pallet: palname,
    });
  };

  thirdEvent = () => {
    console.log("this.updatedCheckedState = ", this.updatedCheckedState);
    const names = [];
    console.log("this.casenames inside thirdEvent", this.casenames);
    this.updatedCheckedState.map((index) => {
      names.push(this.casenames[index]);
    });
    console.log("names inside thirdEvent", names);
    names.map((nameIn, indexin) => {
      console.log("nameIn inside thirdEvent", nameIn);
      const status = this.deleteAllLabel(nameIn);
      this.sleep(2000);
      let casenamesTemp = this.casenames;
      casenamesTemp.forEach(function (casename, index) {
        if (casename === nameIn) {
          //Remove from array
          casenamesTemp.splice(index, 1);
        }
      });
      this.casenames = casenamesTemp;
      console.log("casenamesTemp inside thirdEvent - after", casenamesTemp);
      console.log("this.casenames inside thirdEvent - after", this.casenames);
      this.state.threedcases.map(({ name }, index) => {
        console.log(name);
        if (nameIn === name) {
          this.state.threedcases.splice(index, 1);
        }
      });
    });
    this.updatedCheckedState = [];
    this.updateTable();
    // setChecked([]);
    this.setState({
      checked: [],
    });
  };

  updateTable = () => {
    let threedRowsTemp = [];
    threedRowsTemp.length = 0;
    console.log("threedRowsTemp inside updateTable beginning", threedRowsTemp);
    console.log(
      "this.updatedCheckedState inside updateTable beginning",
      this.updatedCheckedState
    );
    let counter = 1;
    this.updatedCheckedState.map((index) => {
      const casename = this.casenames[index];
      console.log("casename inside updateTable", casename);
      this.state.threedcases.map(({ name }, index) => {
        console.log("name inside updateTable", name);
        console.log(
          "this.state.threedcases[index].labelname inside updateTable = ",
          this.state.threedcases[index].labelname
        );
        if (
          casename === name &&
          this.state.threedcases[index].labelname !== "Label0"
        ) {
          threedRowsTemp.push(
            this.createThreedData(
              "Label" + counter++,
              this.state.threedcases[index].name,
              this.state.threedcases[index].length,
              this.state.threedcases[index].height,
              this.state.threedcases[index].width,
              this.state.threedcases[index].mass,
              this.state.threedcases[index].material,
              this.state.threedcases[index].labelname,
              this.state.threedcases[index].labelcolour,
              this.state.threedcases[index].typename,
              this.state.threedcases[index].labelx,
              this.state.threedcases[index].labely,
              this.state.threedcases[index].labelwidth,
              this.state.threedcases[index].labelheight,
              this.state.threedcases[index].directionx,
              this.state.threedcases[index].directiony,
              this.state.threedcases[index].directionz,
              this.state.threedcases[index].createdBy,
              this.state.threedcases[index].createdDatetime,
              this.state.threedcases[index].updatedBy,
              this.state.threedcases[index].updatedDatetime
            )
          );
        }
      });
    });
    this.setState({
      threedRows: threedRowsTemp,
    });
    console.log("threedRowsTemp inside updateTable end", threedRowsTemp);
  };

  handleToggle = (value) => () => {
    console.log("Checkbox is clicked");

    this.state.threedRows = [];

    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // setChecked(newChecked);
    this.updatedCheckedState = newChecked;
    this.updateTable();
    console.log("newChecked = ", newChecked);
    console.log("this.state.checked = ", this.state.checked);
    this.setState({
      checked: newChecked,
    });
    // this.initCases();

  };

  downloadFile = async () => {
    let threedRowsTemp = [];
    const casename = this.state.selectcase;
    this.state.threedcases.map(({ name }, index) => {
      if (this.state.role === "admin" || this.state.role === "regular")
        if (casename === name) {
          if (
            this.state.threedcases[index].labelname &&
            this.state.threedcases[index].labelname != "Label0" &&
            this.state.threedcases[index].labelname != ""
          ) {
            threedRowsTemp.push(
              this.createThreedDataExport(
                this.state.threedcases[index].name,
                this.state.threedcases[index].length,
                this.state.threedcases[index].height,
                this.state.threedcases[index].width,
                this.state.threedcases[index].mass,
                this.state.threedcases[index].material,
                this.state.threedcases[index].labelname,
                this.state.threedcases[index].labelcolour,
                this.state.threedcases[index].typename,
                this.state.threedcases[index].labelx,
                this.state.threedcases[index].labely,
                this.state.threedcases[index].labelwidth,
                this.state.threedcases[index].labelheight,
                this.state.threedcases[index].directionx,
                this.state.threedcases[index].directiony,
                this.state.threedcases[index].directionz,
                this.state.threedcases[index].createdBy,
                this.state.threedcases[index].createdDatetime,
                this.state.threedcases[index].updatedBy,
                this.state.threedcases[index].updatedDatetime
              )
            );
          }
        }
    });
    const fileName = "file";
    const json = JSON.stringify(threedRowsTemp);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  getPRC = async (palletid, pallet_no) => {
    // arrayData=[];
    console.log(
      "all pallets schema add:... " +
        (this.pallets[0].casesSchemaA +
          this.pallets[0].casesSchemaB +
          this.pallets[0].casesSchemaC)
    );
    await axios.get(`Threed/getPrc/` + palletid).then((resonse) => {
      let Prcrecord = resonse.data;
      let PrcrecordSortedArray = [];
      let pal1SchemaAtempRec = [];
      let pal1SchemaBtempRec = [];
      let pal1SchemaCtempRec = [];
      let pal2SchemaAtempRec = [];
      let pal2SchemaBtempRec = [];
      let pal2SchemaCtempRec = [];
      for (let i = 0; i < Prcrecord.length; i++) {
        if (Prcrecord[i].pallet == 1) {
          if (Prcrecord[i].schema == "Schema A") {
            if (!pal1SchemaAtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaAtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema B") {
            if (!pal1SchemaBtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaBtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema C") {
            if (!pal1SchemaCtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaCtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          }
        } else if (Prcrecord[i].pallet == 2) {
          if (Prcrecord[i].schema == "Schema A") {
            if (!pal2SchemaAtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaAtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema B") {
            if (!pal2SchemaBtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaBtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema C") {
            if (!pal2SchemaCtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaCtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          }
        }
      }
      console.log("prc records inside getPRC = ", PrcrecordSortedArray);
      console.log(
        "prc records inside getPRC = ",
        JSON.stringify(PrcrecordSortedArray)
      );
      arrayData.push(PrcrecordSortedArray);
      let schemaArecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[0]
      );
      let schemaBrecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[1]
      );
      let schemaCrecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[2]
      );
      console.log("schemaArecords inside getPRC =", schemaArecords);
      console.log("schemaBrecords inside getPRC =", schemaBrecords);
      console.log("schemaCrecords inside getPRC =", schemaCrecords);
      return [schemaArecords, schemaBrecords, schemaCrecords];
    });
  };

  getLayer = async (palletid, pallet_no) => {
    arrayData = [];
    let response = await axios.get(`Threed/getLayer/` + palletid);
    const layerrecord = response.data;
    console.log("records inside getLayer = ", JSON.stringify(layerrecord));
    // this.pallets.push(layerrecord);
    arrayData.push(layerrecord);
    // console.log("this.pallets 2 " + JSON.stringify(this.pallets));
    let found = layerrecord.filter((item) => item.pallet_no === pallet_no);
    console.log("pallet_no inside getLayer = " + pallet_no);
    console.log("found getLayer " + JSON.stringify(found));
    return found;
  };

  downloadFilePallet = async (pallet_no) => {
    let PalletRowsTemp = [];
    const pltid = this.state.selectpallet;
    // let response = await axios.get("Threed/getPallet/" + pltid + "/" + 1);
    // console.log("response downloadFilePallet " + response.data);

    var layerdate1 = await this.getLayer(pltid);
    console.log("response 1" + layerdate1);

    // let response1 = await axios.get("Threed/getPallet/" + pltid + "/" + 1 );
    // console.log("response downloadFilePallet " + response1.data)

    // if(pallet_no == 1){
    //   this.pallets[index].working_area_2_Width_X_Direction = false,
    //   this.pallets[index].working_area_2_Length_Y_Direction = false,
    //   this.pallets[index].working_area_2_Offset_X_Direction = false,
    //   this.pallets[index].working_area_2_Offset_Y_Direction = false;
    // }

    var casedate1 = await this.getPRC(pltid);
    console.log("response 2 " + casedate1);

    console.log("this.pallets 1 " + JSON.stringify(this.pallets));
    try {
      this.pallets.map((val, index) => {
        // console.log(val)
        if (this.state.role === "admin" || this.state.role === "regular")
          if (pltid === val.palletId) {
            PalletRowsTemp.push(
              this.createPalletDataExport(
                this.pallets[index].palletId,
                this.pallets[index].pallet_no,
                this.pallets[index].palletName,
                this.pallets[index].originPal1,
                this.pallets[index].originPal2,
                this.pallets[index].firstcasepal1,
                this.pallets[index].firstcasepal2,
                this.pallets[index].working_area_1_Width_X_Direction,
                this.pallets[index].working_area_1_Length_Y_Direction,
                this.pallets[index].working_area_1_Offset_X_Direction,
                this.pallets[index].working_area_1_Offset_Y_Direction,
                this.pallets[index].working_area_2_Width_X_Direction,
                this.pallets[index].working_area_2_Length_Y_Direction,
                this.pallets[index].working_area_2_Offset_X_Direction,
                this.pallets[index].working_area_2_Offset_Y_Direction,
                this.pallets[index].palletType,
                this.pallets[index].intermediateLayerType,
                this.pallets[index].caseType.split("_")[0],
                this.pallets[index].noOfLayers,
                this.pallets[index].casesSchemaA,
                this.pallets[index].casesSchemaB,
                this.pallets[index].casesSchemaC,
                this.pallets[index].outsideLabelPriority,
                this.pallets[index].rule_symmetric_mass_distribution,
                this.pallets[index].horizontal_mass_distribution,
                this.pallets[index].vertical_mass_distribution,
                this.pallets[index].schemaA,
                this.pallets[index].schemaB,
                this.pallets[index].schemaC,
                this.pallets[index].layername,
                this.pallets[index].layerSequence,
                this.pallets[index].intermediatelayer,
                this.pallets[index].schema,
                this.pallets[index].pre_Pos_X,
                this.pallets[index].pre_Pos_Y,
                this.pallets[index].pre_Pos_Z,
                this.pallets[index].auto_generation,
                this.pallets[index].cases,
                this.pallets[index].offset_X_neg,
                this.pallets[index].offset_Y_neg,
                this.pallets[index].position,
                this.pallets[index].position_freezed,
                this.pallets[index].rotation,
                this.pallets[index].createdBy,
                this.pallets[index].createdDate,
                this.pallets[index].updatedBy,
                this.pallets[index].updatedDate
              )
            );
          }
      });

      const fileName = "Pallets";
      const outputjason = PalletRowsTemp.concat(arrayData);
      console.log("outputjason " + JSON.stringify(outputjason));
      const json1 = JSON.stringify(outputjason);
      const blob = new Blob([json1], { type: "application/json" });
      const href = await URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.log("error inside downloadFilePallet = " + e);
    }
  };

  handleSelectionPalletRename = (event) => {
    const select = event.target.value;
    this.setState({
      PalletRename: select,
    });

    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      alert("Special characters not allowed");
      this.setState({
        item4: "",
        PalletRename:"",
      });
    } else {
      this.setState({ item4: event.target.value });
    }
    console.log(select, "palletRename");
  };

  handleSelectionPalletSaveAS = (event) => {
    const select = event.target.value;
    this.setState({
      PalletSaveAs: select,
      compareSavePallet: select,
    });


    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      alert("Special characters not allowed");
      this.setState({
        item5: "",
        PalletSaveAs:"",
      });
    } else {
      this.setState({ item5: event.target.value });
    }
    console.log(select, "saveaspallet");
  };

  handleSelectionRename = (event) => {
    const select = event.target.value;
    if (this.casenames.indexOf(event.target.value) > -1) {
      alert("Case name already exists");
      this.setState({
        item2: "",
        caseRename: ""
      });
    }
    else {
      this.setState({
        caseRename: select,
      });
      //


      if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
        alert("Special characters not allowed");
        this.setState({
          item2: "",
          caseRename: "",
        });
      } else {
        this.setState({ item2: event.target.value });
        // this.setState({ item: e.target.value.replace(/[^a-zA-Z0-9-#_]/ig, '') });
      }




      console.log(select, "caseRename");
    }
  };

  handleSelectionSaveAs = (event) => {
    const select = event.target.value;
    this.setState({
      caseSave: select,
      compareSaveCase: select,
    });
    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      alert("Special characters not allowed");
      this.setState({
        item3: "",
        caseSave:"",
      });
    } else {
      this.setState({ item3: event.target.value });
    }
    console.log(select, "Saveas");
  };

  handleSelection = (event) => {
    const selected = event.target.value;
    console.log("selected label = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      selectcase: selected,
      compareAddCase: selected,
    });
  };

  ImporthandleSelection = async (event) => {
    const selected = event.target.value;
    console.log("selectedlabel = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      caseImport: selected,
    });
    await axios
      .get(`threed/getCaseContents?Filename=${selected}`)
      .then((response) =>
        this.setState({
          importFile: response.data,
        })
      );
    // if (selected) {
    //   this.getCaseFileContent();
    // }
  };
  ImporthandleSelectionForPalletFile = async (event) => {
    const selected = event.target.value;
    console.log("selectedlabel = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      casepallet: selected,
    });
    await axios
      .get(`threed/getPalletContents?Filename=${selected}`)
      .then((response) =>
        this.setState({
          importFilePallet: response.data,
        })
      );
    // if (selected) {
    //   this.getCaseFileContent();
    // }
  };
  handleSelectionFileImport = (event) => {
    const selected = event.target.value;
    console.log("selectedimport = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      importCase: selected,
    });
  };

  handleSelectionPallet = (event) => {
    const selected = event.target.value;
    console.log("selected label = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      selectpallet: selected,
      compareAddPallet: selected,
    });
  };

  SaveCase = async () => {
    const caseSave = this.state.caseSave;
    //to include everything after # we use encodeURIComponent
    const name = encodeURIComponent(this.state.selectcase);
    console.log(this.state.caseSave, "saveas");
    if (!caseSave) {
      return toast.error("Empty Values not allowed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    await axios
      .post(`/threed/savecase/${name}`, { Name: caseSave })
      .then((response) => {
        if (response.data) {
          this.VerifyOldCaseAndNewCase();
          this.initCases();
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // alert("CaseName already exist");
          toast.error("CaseName already exist !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    this.setState({
      caseSave: "",
    });
  };

  VerifyOldCaseAndNewCase = () => {

    const comparecase = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareAddCase);

    const comparesave = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareSaveCase);

    console.log("Inside VerifyOldCaseAndNewCase comparecase = " + JSON.stringify(comparecase) + " comparesave = " + JSON.stringify(comparesave));
    const isSame = JSON.stringify(comparecase) === JSON.stringify(comparesave);
    console.log("Inside VerifyOldCaseAndNewCase isSame = " + isSame);

    if (isSame) {
      toast.info("Case Data is compared and verified successfully", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
    else {
      toast.info("Case Data is comparing and verifying failed", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
  };

  RenameCase = async () => {
    const id = this.state.id;
    //to include everything after # we use encodeURIComponent
    const name = encodeURIComponent(this.state.selectcase);
    const caseRename = this.state.caseRename;
    if (!caseRename) {
      return toast.error("Empty Values not allowed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }

    await axios
      .put(`/threed/renamecase/${name}`, { Name: caseRename })
      .then((response) => {
        console.log("display data ", this.renamecase);
        if (response.data) {
          const updatedItem = response.data[0];
          this.setState(prevState => ({
            //to update threedcases when rename is successful
            //as threedcases contains that data
            threedcases: prevState.threedcases.map(item => {
              if (item.name === prevState.selectcase) {
                return updatedItem;
              } else {
                return item;
              }
            }),
            //check if value selected in DROPDOWN is same as previous
            //value in threedrows only then update name getting from backend
            threedRows: prevState.threedRows.map(row => {
              if (row.name === prevState.selectcase) {
                return {
                  ...row,
                  name: updatedItem.name
                };
              } else {
                return row;
              }
            }),
            // threedValues: true
          }));
          this.initCases();
        }
        toast.info("Casename Renamed successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // alert("CaseName already exist");
          toast.error("CaseName already exist !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    this.setState({
      caseRename: "",
    });
  };

  RenamePallet = async () => {
    // const PalletRename = this.state.PalletRename;
    const id = this.state.selectpallet;
    const { palletnames, PalletRename, selectpallet } = this.state;
    if (!PalletRename) {
      return toast.error("please fill rename field value", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }

    await axios
      .put(`threed/renamepallet/${id}`, { PalletName: PalletRename })
      .then((response) => {
        if (response.data) {
          this.palletnames = [];
          toast.info("Casename Renamed successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
          });

          this.initCases();
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // alert("palletName already exist");
          toast.error("palletName already exist !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    this.setState({
      PalletRename: "",
    });
  };

  importData = async () => {
    const dataArray = this.state.importFile;
    dataArray.forEach((dataItem) => {
      axios
        .get(`/threed/getcase/${dataItem.name}`)
        .then((response) => {
          console.log(response.data.length, "response");
          if (response.data.length > 0) {
            // Data item already exists, make a PUT request to update it
            axios
              .put(`/threed/importforCase/${dataItem.name}`, dataItem)
              .then((response) => {
                console.log(response.data);
                this.initCases();
                toast.info("Successfully imported !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            // Data item does not exist, make a POST request to create it
            axios
              .post("/threed", dataItem)
              .then((response) => {
                this.initCases();
                toast.info("Successfully imported !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  importFilePalletToDB = async () => {
    const dataArray = this.state.importFilePallet;
    dataArray.forEach((dataItem) => {
      axios
        .get(`/threed/getPallet/${dataItem.palletName}`)
        .then((response) => {
          console.log(response.data.length, "response");
          if (response.data.length > 0) {
            // Data item already exists, make a PUT request to update it
            axios
              .put(`/threed/${dataItem.palletName}`, dataItem)
              .then((response) => {
                console.log(response.data);
                this.initCases();
                // alert("Data updated successfully");
                toast.info("Successfully imported !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            // Data item does not exist, make a POST request to create it
            axios
              .post("/threed/savePallet", dataItem)
              .then((response) => {
                console.log(response.data);
                this.initCases();
                // alert("Data updated successfully");
                toast.info("Successfully imported !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  VerifyOldPalletAndPallet = () => {

    const comparecase = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareAddCase);

    const comparesave = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareSaveCase);

    console.log("Inside VerifyOldPalletAndPallet comparecase = " + JSON.stringify(comparecase) + " comparesave = " + JSON.stringify(comparesave));
    const isSame = JSON.stringify(comparecase) === JSON.stringify(comparesave);
    console.log("Inside VerifyOldPalletAndPallet isSame = " + isSame);

    if (isSame) {
      toast.info("Pallet Data is compared and verified successfully", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
    else {
      toast.info("Pallet Data is comparing and verifying failed", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
  };
  SaveAsPallet = async () => {
    const id = this.state.selectpallet;
    const PalletName = this.state.PalletSaveAs;
    if (!PalletName) {
      return toast.error("palletName Shouldn,t be empty !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    axios
      .post(`/threed/savepallet/${id}`, { palletName: PalletName })
      .then((response) => {
        if (response.data) {
          this.VerifyOldPalletAndPallet();
          this.initCases();
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error("palletName already exist !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    this.setState({
      PalletSaveAs: "",
    });
  };

  executeUserAction = (operation) => {
    console.log("operation = ", operation);
    if (operation === "addCase") {
      this.secondEvent();
    } else if (operation === "editCase") {
      let casename = "";
      casename = this.state.selectcase;
      console.log("casename.. " + casename);
      if (casename.includes("#")) {
        var values = casename;
        casename = values.replaceAll("#", "$");
        console.log("replaced case: " + casename);
      }
      console.log("this.casename", casename);
      const path = "/profile1/" + casename;
      console.log("Path is " + path);
      this.props.history.push(path);
    } else if (operation === "Rename") {
      this.RenameCase();
    } else if (operation === "SaveAs") {
      this.SaveCase();
    } else if (operation === "deleteCase") {
      this.deleteOneCase();
    } else if (operation === "exportData") {
      this.downloadFile();
    } else if (operation === "ImportData") {
      console.log("operation inside executeUserAction1 = " + operation);
      this.importData();
    }
    // else if (operation === "ImportData") {
    //   console.log("operation inside executeUserAction1 = " + operation)
    //   // this.downloadFile();
    // }

    this.setState({
      operationCompleted: true,
    });
  };

  executeUserActionPallet = (operation) => {
    console.log("operation = ", operation);
    if (operation === "addPallet") {
      this.addPallet();
    } else if (operation === "editPallet") {
      let palletid = 0;
      let palletname = "";
      palletid = this.state.selectpallet;
      console.log("Pallet id.. " + palletid);
      // let palletTemp = this.palletnames;
      // palletTemp.forEach(function (pallet, index) {
      //   if (pallet.id === palletid) {
      //     palletname = pallet.value
      //   }
      // });
      const path = "/palette/" + palletid;
      console.log("Path is " + path);
      this.props.history.push(path);
    } else if (operation === "RenamePallet") {
      this.RenamePallet();
    } else if (operation === "SaveAsPallet") {
      this.SaveAsPallet();
    } else if (operation === "deletePallet") {
      this.deleteOnePallet();
    } else if (operation === "exportPalletData") {
      this.downloadFilePallet();
    } else if (operation === "ImportData2") {
      this.importFilePalletToDB();
    }
    // else if (operation === "ImportData2") {
    //   // this.downloadFilePallet();
    // }

    this.setState({
      operationCompleted: true,
    });
  };

  handlexpand = (name) => {
    if (this.state.panelname != name) {
      this.state.panelname = name;
      console.log("name inside handleChangepanel if = " + this.state.panelname);
    } else {
      this.state.panelname = "";
      console.log("name inside handleChangepanel = " + this.state.panelname);
    }

    this.setState({
      expanded: this.state.panelname,
    });
  };
  render() {
    const { classes } = this.props;
    const {
      item,
      item1,
      caseName,
      palletName,
      imprtData1,
      imprtData2,
    } = this.state;

    console.log(imprtData1, "render imparetData");
    console.log(imprtData2, "render imparetData");
    // console.log(imprtData1, "render");
    // const newImportCase = Array.from(Object.values(imprtData1));
    // console.log(typeof newImportCase, "render");

    // const newImportPallet = Object.values(imprtData2);
    // console.log(typeof newImportPallet, "render");
    this.state.casenames = this.casenames;
    this.state.palletnames = this.palletnames;

    this.tablecasenames = [];

    this.toggle = false;
    const role = this.state.role;
    console.log("role under render = ", role);
    console.log("this.props dashboard = ", this.props);
    let casename = "";
    let palletname = "";
    console.log("this.state.checked under render = ", this.state.checked);
    console.log("this.state.threedRows under render = ", this.state.threedRows);
    if (this.state.checked.length === 1) {
      const index = this.state.checked[0];
      this.state.caseName = this.casenames[index];
      casename = this.state.caseName;
    }
    // const path = "/profile/" + casename;
    const path = "/profile1/" + casename;
    // console.log("casename under render = ",casename.caseName);
    console.log("I am in Dashboard page.");
    const { t } = this.props; // localization
    console.log("this is", this);
    return (
      <div className="parent" style={{ width: "1366px", height: "500px" }}>
        {/* // <div className="container-fluid">       */}
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            {/* <a className="navbar-brand" href="https://www.sphinxworldbiz.com/" target="_blank">
              <img src={logo} width="200" height="100" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/" className="navbar-brand">
              {t("3dCaseDesign")}
            </Link>
            {/* <div className="collpase navbar-collapse">
                <ul className="navbar-nav ml-auto">

                  <li className="navbar-item">
                    <Link to="/palette" className="nav-link">Palette Designer</Link>
                  </li>

                </ul>
              </div> */}
            <FormControl
              id="localizationDropdown"
              sx={{ width: 50, marginLeft: "-21px" }}
              style={{ display: "inline", left: "1172px", paddingLeft: "8px" }}
            >
              <Select
                onChange={(e) => {
                  this.handleSetLocalization(e);
                  // e.target.blur();
                }}
                defaultValue={
                  localStorage.getItem("language") == "en" ? "en" : "de"
                }
                disableUnderline
              >
                <MenuItem value={"en"}>en</MenuItem>
                <MenuItem value={"de"}>de</MenuItem>
              </Select>
            </FormControl>
            {/* <div style={{ backgroundColor: "grey", display: "inline", marginLeft: "1099px", paddingLeft: "8px", borderRadius: "10px", color: "white" }}>
              <FormGroup >
                <FormControlLabel control={<Checkbox checked={localStorage.getItem("language") == "en" ? false : true} name={localStorage.getItem("language")} onChange={(e) => this.handleSetLocalization(e)} />} label="de" />
              </FormGroup>
            </ div> */}
          </nav>
          {/* <br /> */}
          {/* <Route path="/profile/:casename" component={<FormUserPage casename={casename} />} />           */}
          <Route
            path="/profile1/:casename"
            component={<FormUserPage1 casename={casename} />}
          />
          <Route
            path="/palette/:palletid"
            component={<PaletteDesignerPage />}
          />
        </div>

        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          spacing={0}
          fontFamily="Roboto"
        >
          <div
            className="parent"
            style={{
              width: "1366px",
              height: "439px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'> */}

            <Grid
              container
              xs={6}
              sm={6}
              md={6}
              lg={6}
              spacing={1}
              fontFamily="Roboto"
              style={{
                backgroundColor: "white",
                width: "526px",
                overflow: "auto",
                marginRight: "4px",
                marginLeft: "18px",
                paddingLeft: "3px",
                paddingRight: "7px",
                marginTop: "9px",
                marginBottom: "9px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                width={widgetwidth}
                style={{ width: "526px", color: "white", overflow: "hidden" }}
              >
                {/* {/* <div sx={{ display: 'flex', maxHeight: '100vh', overflow: 'auto', }}> */}
                {/* <div sx={{ display: 'flex', maxHeight: '100vh', overflow: 'auto' }}>  */}
                {/* <Box sx={{ display: 'flex', maxHeight: '100vh',overflowY: 'auto', OverflowX:"hidden", display:"flex", flexDirection:"column", width: '526px' }}> */}
                {/* <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0, overflow: 'auto' }} > */}
                <Grid item xs={12}>
                  <ExpansionPanel
                    style={{
                      boxShadow: "none",
                      width: "512px",
                      backgroundColor: "#f5f5f5",
                    }}
                    expanded={this.state.expanded === "panel1"}
                    onChange={(event) => this.handlexpand("panel1", event)}
                    // classes={{expanded:styles["&$expanded"]
                    // }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel3-header"
                    >
                      <Typography>{t("CompareCaseDesigns")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      {/* <Typography>
                      <List className="listcss"
                        dense
                        style={{ width: "495px", right: "6px",height: 150, overflowX: "hidden", }}
                        sx={{ maxHeight: 250, width: "12px", overflowY: "scroll", overflowX: "hidden", overflowY: "-moz-hidden-unscrollable", bgcolor: "background.paper", marginTop: 0, }}
                      >
                        {this.state.threedcases.length > 0 && this.state.casenames.filter((value, index) => {
                          console.log(" inside filter casenames: " + value);
                          let caseExists = [];
                          for (let i = 0; i < this.state.threedcases.length; i++) {
                            console.log(" this.state.threedcases[i].name: " + this.state.threedcases[i].name);
                            if (value == this.state.threedcases[i].name) {
                              if (this.state.threedcases[i].labelname != null && this.state.threedcases[i].labelname != "Label0") {
                                if (!caseExists.includes(this.state.threedcases[i].name)) {
                                  caseExists.push(this.state.threedcases[i].name)
                                  return this.state.threedcases[i].labelname != null;
                                }
                              }
                            }
                          }
                        }).map((name, index) => {

                          // const value = index;
                          const value = this.state.casenames.indexOf(name);
                          const labelId = `checkbox-list-secondary-label-${value}`;

                          return (
                            <ListItem className="inputfield2"
                              key={value}
                              secondaryAction={
                                <Checkbox style={{ height: "18px", width: "16px", marginRight: "5px" }}
                                  edge="end"
                                  id="chk-box"
                                  sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                      color: "rgb(0,125,129)",
                                    },
                                  }}
                                  onChange={this.handleToggle(value)}
                                  checked={this.state.checked.indexOf(value) !== -1}
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              }
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemText primaryTypographyProps={{ style: styles.listItem }} id={labelId} primary={`${name}`} />
                              </ListItemButton>
                            </ListItem>
                          );
                        })
                        }
                      </List>
                    </Typography> */}

                      <Typography>
                        <List
                          className="listcss"
                          dense
                          sx={{ width: 490, height: 150, overflowX: "hidden" }}
                          // sx={{ maxHeight: 250, overflowY: "scroll", overflowX: "hidden", overflowY: "-moz-hidden-unscrollable", bgcolor: "background.paper", marginTop: 0, borderRadius: 1 }}
                        >
                          {this.state.casenames.map((name, index) => {
                            const value = index;
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                              <ListItem
                                className="inputfield2"
                                key={value}
                                secondaryAction={
                                  <Checkbox
                                    style={{
                                      height: "18px",
                                      width: "16px",
                                      marginRight: "5px",
                                    }}
                                    edge="end"
                                    id="chk-box"
                                    sx={{
                                      color: "grey",
                                      "&.Mui-checked": {
                                        color: "rgb(0,125,129)",
                                      },
                                    }}
                                    onChange={this.handleToggle(value)}
                                    checked={
                                      this.state.checked.indexOf(value) !== -1
                                    }
                                    inputProps={{ "aria-labelledby": labelId }}
                                  />
                                }
                                disablePadding
                              >
                                <ListItemButton>
                                  <ListItemText
                                    primaryTypographyProps={{
                                      style: styles.listItem,
                                    }}
                                    id={labelId}
                                    primary={`${name}`}
                                  />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>

                <Grid item xs={12} style={{ marginTop: "7px" }}>
                  <ExpansionPanel
                    style={{
                      boxShadow: "none",
                      width: "512px",
                      backgroundColor: "#f5f5f5",
                    }}
                    expanded={this.state.expanded === "panel2"}
                    onChange={(event) => this.handlexpand("panel2", event)}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel2-header"
                    >
                      <Typography id="service2">{t("caseDesign")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid
                        container
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: 0,
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserAction(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            {/* <TextField
                            id="outlined-read-only-input"
                            label=""
                            defaultValue={t('addCase')}
                            className={classes.textField}
                            margin="dense" style={{ height: 28 }}
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: { fontSize: 12, padding: 10 }
                            }}
                            variant="standard"
                            size="small"
                          /> */}
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "130px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("addCase")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "1px",
                                top: "3px",
                                height: "27px",
                                left: "85px",
                                width: "60%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="outlined-textcase1"
                              // label={t('caseName')}
                              value={this.state.item}
                              inputProps={{ maxLength: 32 }}
                              onChange={this.charallow}
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="addCase"
                              control={
                                <Radio
                                  style={{ left: "417px", bottom: "38px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          {/* <TextField
                          id="outlined-read-only-input"
                          label=""
                          defaultValue={t('selectCase')}
                          className={classes.textField}
                          margin="dense" style={{ height: 38 }}
                          InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                            style: { fontSize: 12, padding: 10 }
                          }}
                          variant="standard"
                          size="small"
                        /> */}
                          <div
                            style={{
                              fontSize: 12,
                              height: 27,
                              marginTop: "17px",
                              minWidth: "130px",
                            }}
                            className={classes.textField}
                          >
                            <span
                              style={{ marginTop: "14px", marginLeft: "6px" }}
                            >
                              {t("selectCase")}
                            </span>
                          </div>
                          <TextField
                            style={{
                              border: "1px solid white !important",
                              width: "42.2%",
                              top: "4px",
                              height: "27px !important",
                              left: "88px",
                              bottom: "7.8px",
                            }}
                            id="outlined-type"
                            // label={t('selectedCase')}
                            value={this.state.selectcase}
                            onChange={this.handleSelection}
                            select
                            // className={classes.textField3}
                            InputLabelProps={{
                              shrink: true,
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            InputProps={{
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            margin="dense"
                            variant="outlined"
                            size="small"
                          >
                            {this.state.casenames.map((value, index) => {
                              return <MenuItem value={value}>{value}</MenuItem>;
                            })}
                          </TextField>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserAction(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "130px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("rename")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "1px",
                                top: "3px",
                                height: "27px",
                                left: "85px",
                                width: "60%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="outlined-textcase1"
                              inputProps={{ maxLength: 32 }}
                              value={this.state.caseRename}
                              onChange={this.handleSelectionRename}
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="Rename"
                              control={
                                <Radio
                                  style={{ left: "417px", bottom: "38px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserAction(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "130px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("saveAs")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "1px",
                                top: "3px",
                                height: "27px",
                                left: "85px",
                                width: "60%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="outlined-textcase1"
                              inputProps={{ maxLength: 32 }}
                              value={this.state.caseSave}
                              onChange={this.handleSelectionSaveAs}
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="SaveAs"
                              control={
                                <Radio
                                  style={{ left: "417px", bottom: "38px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            height: "48px",
                            flexDirection: "row",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserAction(e.target.value)
                            }
                            row
                          >
                            <FormControlLabel
                              value="editCase"
                              style={{ marginLeft: "21px", marginTop: "6px" }}
                              control={
                                <Radio
                                  style={{
                                    marginTop: "-12px",
                                    marginLeft: "-16px",
                                  }}
                                  id="edit-case1"
                                />
                              }
                              labelPlacement="start"
                              // label={"Edit & Save Label"}
                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "110px",
                                    fontSize: "12px !important",
                                    marginTop: "-10px",
                                    marginLeft: "-14px",
                                    lineHeight: "1",
                                    lineBreak: "auto",
                                  }}
                                  fontsize={12}
                                >
                                  {t("editCase")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              disabled={
                                role === "guest" || this.state.selectcase === ""
                              }
                            />
                            <FormControlLabel
                              value="deleteCase"
                              style={{ marginLeft: "21px", marginTop: "6px" }}
                              control={
                                <Radio
                                  style={{
                                    marginTop: "-12px",
                                    marginLeft: "-5px",
                                  }}
                                />
                              }
                              labelPlacement="start"
                              // label={"Delete Label"}
                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "100px",
                                    fontSize: "12px !important",
                                    marginTop: "-10px",
                                    marginLeft: "8px",
                                    lineBreak: "auto",
                                    lineHeight: "1",
                                  }}
                                  fontsize={12}
                                >
                                  {t("deleteCase")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              disabled={
                                role === "guest" || this.state.selectcase === ""
                              }
                            />
                            <FormControlLabel
                              style={{
                                marginTop: "5px",
                                left: "-13px",
                                bottom: "8px",
                              }}
                              value="exportData"
                              control={
                                <Radio
                                  style={{
                                    marginTop: "5px",
                                    left: "-13px",
                                    bottom: "8px",
                                  }}
                                />
                              }
                              labelPlacement="start"
                              // label={"Delete Label"}
                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "124px",
                                    fontSize: "12px !important",
                                    marginTop: "-10px",
                                    marginLeft: "18px",
                                    lineBreak: "auto",
                                    lineHeight: 1,
                                  }}
                                  fontsize={12}
                                >
                                  {t("exportData")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              disabled={
                                role === "guest" || this.state.selectcase === ""
                              }
                            />
                          </RadioGroup>
                        </Grid>
                        {/* <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', height: "48px", padding: 0, marginBottom: "4px", backgroundColor: color1 }}>

                        <RadioGroup
                          name="source"
                          value={this.state.operation}
                          onChange={e => this.executeUserAction(e.target.value)}
                          inputProps={{ size: "small" }}
                          row
                        >

                          <div style={{ fontSize: 12, height: 27, marginTop: "17px", minWidth: "130px" }} className={classes.textField}>
                            <span style={{ marginTop: "14px", marginLeft: "6px" }}>Import Data</span>
                          </div>
                          <TextField
                          style={{ border: "1px solid white !important", width: "85%",  height: "27px !important", left: "222px", bottom: "39px", }}
                          id="outlined-type"
                          value=""
                          select
                          InputLabelProps={{
                            shrink: true,
                            style: { fontSize: "12px", bottom: "2px" }
                          }}
                          InputProps={{
                            style: { fontSize: "12px", bottom: "2px" }
                          }}
                          margin="dense"
                          variant="outlined"
                          size="small"
                        >
                        </TextField>

                          <FormControlLabel
                            value="SaveAs"
                            control={<Radio style={{ left: "416px", bottom: "90px" }} />}
                            labelPlacement="start"
                            label={<Box component="div" fontSize={2}></Box>}
                            classes={classes.radioLabel}
                            disabled={(this.role === "guest")}
                          />
                        </RadioGroup>
                      </Grid> */}

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 12,
                              height: 27,
                              marginTop: "17px",
                              minWidth: "130px",
                            }}
                            className={classes.textField}
                          >
                            <span
                              style={{ marginTop: "14px", marginLeft: "6px" }}
                            >
                              {t("importData")}
                            </span>
                          </div>
                          <TextField
                            style={{
                              border: "1px solid white !important",
                              width: "100.2%",
                              top: "4px",
                              height: "27px !important",
                              marginLeft : "88px",
                              bottom: "7.8px",
                            }}
                            id="outlined-type"
                            // value={this.state.impdata}
                            select
                            InputLabelProps={{
                              shrink: true,
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            value={this.state.caseImport}
                            onChange={this.ImporthandleSelection}
                            InputProps={{
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            margin="dense"
                            variant="outlined"
                            size="small"
                          >

                            {console.log("Inside render imprtData1 = ", this.state.imprtData1)}

                            {Array.isArray(this.state.imprtData1) && this.state.imprtData1.length !== 0 ?
                              (this.state.imprtData1.map((value, index) =>
                                (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>)))
                              :
                              (<MenuItem disabled>No data found</MenuItem>)}
                          </TextField>

                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                              value={this.state.operation}
                              onChange={(e) =>
                                this.executeUserAction(e.target.value)
                              }
                            >
                              <FormControlLabel
                                id="ImportData1"
                                value="ImportData"
                                style={{
                                  marginLeft: "6px",
                                  marginBottom: "2px",
                                  marginTop: "10px",
                                  width: "12%",
                                  height: "27px",
                                }}
                                control={<Radio />}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  {/* </div> */}
                </Grid>

                <Grid item xs={12} style={{ marginTop: "7px" }}>
                  <ExpansionPanel
                    style={{
                      boxShadow: "none",
                      width: "512px",
                      backgroundColor: "#f5f5f5",
                    }}
                    expanded={this.state.expanded === "panel3"}
                    onChange={(event) => this.handlexpand("panel3", event)}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel2-header"
                    >
                      <Typography id="service2">{t("palletDesign")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid
                        container
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: 0,
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserActionPallet(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            {/* <TextField
                            id="outlined-read-only-input"
                            label=""
                            defaultValue={t('addPallet')}
                            className={classes.textField5}
                            margin="dense" style={{ height: 28 }}
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: { fontSize: 12, padding: 10 }
                            }}
                            variant="standard"
                            size="small"
                          /> */}
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "140px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("addPallet")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "4px",
                                height: "27px",
                                left: "80px",
                                top: "3px",
                                width: "59%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="#pallet_name"
                              // label={t('palletName')}
                              value={this.state.item1}
                              inputProps={{ maxLength: 32 }}
                              onChange={this.palletcharallow}
                              type="text"
                              // className={classes.textField5}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: 12, top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: 12, top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="addPallet"
                              control={
                                <Radio
                                  style={{ left: "420px", bottom: "42px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            height: "48px",
                            flexDirection: "row",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          {/* <TextField
                          id="outlined-read-only-input"
                          label=""
                          defaultValue={t('selectPallet')}
                          className={classes.textField}
                          margin="dense" style={{ height: 38 }}
                          InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                            style: { fontSize: 12, padding: 10 }
                          }}
                          variant="standard"
                          size="small"
                        /> */}
                          <div
                            style={{
                              fontSize: 12,
                              height: 27,
                              marginTop: "17px",
                              minWidth: "140px",
                            }}
                            className={classes.textField}
                          >
                            <span
                              style={{ marginTop: "14px", marginLeft: "6px" }}
                            >
                              {t("selectPallet")}
                            </span>
                          </div>
                          <TextField
                            style={{
                              border: "1px solid white !important",
                              left: "80px",
                              width: "42%",
                              height: "27px !important",
                              bottom: "2px",
                              top: "4px",
                            }}
                            id="outlined-type"
                            // label={t('selectedPallet')}
                            value={this.state.selectpallet}
                            onChange={this.handleSelectionPallet}
                            select
                            className={classes.textField5}
                            InputLabelProps={{
                              shrink: true,
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            InputProps={{
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            margin="dense"
                            variant="outlined"
                            size="small"
                          >
                            {this.state.palletnames.map(({ id, value }) => {
                              return (
                                <MenuItem key={id} value={id}>
                                  {value}
                                </MenuItem>
                              );
                            })}
                          </TextField>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserActionPallet(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "130px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("rename")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "1px",
                                top: "3px",
                                height: "27px",
                                left: "85px",
                                width: "60%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="outlined-textcase1"
                              inputProps={{ maxLength: 32 }}
                              value={this.state.PalletRename}
                              onChange={this.handleSelectionPalletRename}
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="RenamePallet"
                              control={
                                <Radio
                                  style={{ left: "417px", bottom: "38px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserActionPallet(e.target.value)
                            }
                            inputProps={{ size: "small" }}
                            row
                          >
                            <div
                              style={{
                                fontSize: 12,
                                height: 27,
                                marginTop: "17px",
                                minWidth: "130px",
                              }}
                              className={classes.textField}
                            >
                              <span
                                style={{ marginTop: "14px", marginLeft: "6px" }}
                              >
                                {t("saveAs")}
                              </span>
                            </div>
                            <TextField
                              style={{
                                bottom: "1px",
                                top: "3px",
                                height: "27px",
                                left: "85px",
                                width: "60%",
                                border: "1px solid white !important",
                                backgroundColor: "white",
                              }}
                              placeholder=""
                              id="outlined-textcase1"
                              inputProps={{ maxLength: 32 }}
                              value={this.state.PalletSaveAs}
                              onChange={this.handleSelectionPalletSaveAS}
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                style: { fontSize: "12px", top: "3px" },
                              }}
                              margin="dense"
                              variant="outlined"
                              size="small"
                            />
                            <FormControlLabel
                              value="SaveAsPallet"
                              control={
                                <Radio
                                  style={{ left: "417px", bottom: "38px" }}
                                />
                              }
                              labelPlacement="start"
                              label={<Box component="div" fontSize={2}></Box>}
                              classes={classes.radioLabel}
                              disabled={this.role === "guest"}
                            />
                          </RadioGroup>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <RadioGroup
                            name="source"
                            value={this.state.operation}
                            onChange={(e) =>
                              this.executeUserActionPallet(e.target.value)
                            }
                            row
                          >
                            <FormControlLabel
                              value="editPallet"
                              style={{ marginLeft: "21px", marginTop: "6px" }}
                              control={
                                <Radio
                                  style={{
                                    marginTop: "-12px",
                                    marginLeft: "-16px",
                                  }}
                                  id="edit-pallet1"
                                />
                              }
                              labelPlacement="start"
                              // label={"Edit & Save Label"}
                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "110px",
                                    marginTop: "-10px",
                                    marginLeft: "-14px",
                                    lineHeight: "1",
                                    lineBreak: "auto",
                                  }}
                                  fontsize={12}
                                >
                                  {t("editPallet")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              disabled={
                                role === "guest" ||
                                this.state.selectpallet === ""
                              }
                            />
                            <FormControlLabel
                              style={{ marginLeft: "21px", marginTop: "6px" }}
                              value="deletePallet"
                              control={
                                <Radio
                                  style={{
                                    marginTop: "-12px",
                                    marginLeft: "-5px",
                                  }}
                                />
                              }
                              labelPlacement="start"
                              // label={"Delete Label"}
                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "100px",
                                    marginTop: "-10px",
                                    marginLeft: "8px",
                                    lineBreak: "auto",
                                    lineHeight: "1",
                                  }}
                                  fontsize={12}
                                >
                                  {t("deletePallet")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              disabled={
                                role === "guest" ||
                                this.state.selectpallet === ""
                              }
                            />
                            <FormControlLabel
                              style={{
                                marginTop: "5px",
                                left: "-12px",
                                bottom: "8px",
                              }}
                              value="exportPalletData"
                              control={
                                <Radio
                                  style={{
                                    marginTop: "5px",
                                    left: "-12px",
                                    bottom: "8px",
                                  }}
                                />
                              }
                              labelPlacement="start"
                              // label={"Delete Label"}

                              label={
                                <Box
                                  component="div"
                                  style={{
                                    width: "124px",
                                    marginTop: "-10px",
                                    marginLeft: "18px",
                                    lineBreak: "auto",
                                    lineHeight: 1,
                                  }}
                                  fontsize={12}
                                >
                                  {t("exportPalletData")}
                                </Box>
                              }
                              classes={classes.radioLabel}
                              // disabled={this.state.selectpallet}
                              disabled={
                                role === "guest" ||
                                this.state.selectpallet === ""
                              }
                            />
                          </RadioGroup>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "48px",
                            padding: 0,
                            marginBottom: "4px",
                            backgroundColor: color1,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 12,
                              height: 27,
                              marginTop: "17px",
                              minWidth: "130px",
                            }}
                            className={classes.textField}
                          >
                            <span
                              style={{ marginTop: "14px", marginLeft: "6px" }}
                            >
                              {t("importData")}
                            </span>
                          </div>
                          <TextField
                            style={{
                              border: "1px solid white !important",
                              width: "100.2%",
                              top: "4px",
                              height: "27px !important",
                              marginLeft : "88px",
                              bottom: "7.8px",
                            }}
                            id="outlined-type"
                            select
                            InputLabelProps={{
                              shrink: true,
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            value={this.state.casepallet}
                            onChange={this.ImporthandleSelectionForPalletFile}
                            InputProps={{
                              style: { fontSize: "12px", bottom: "2px" },
                            }}
                            margin="dense"
                            variant="outlined"
                            size="small"
                          >

                            {console.log("Inside render imprtData2 = ", this.state.imprtData2)}

                            {Array.isArray(this.state.imprtData2) && this.state.imprtData2.length !== 0 ?
                              (this.state.imprtData2.map((value, index) =>
                                (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>)))
                              :
                              (<MenuItem disabled>No data found</MenuItem>)}
                          </TextField>

                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                              value=""
                              onChange={(e) =>
                                this.executeUserActionPallet(e.target.value)
                              }
                            >
                              <FormControlLabel
                                id="ImportData2"
                                value="ImportData2"
                                style={{
                                  marginLeft: "6px",
                                  marginBottom: "2px",
                                  marginTop: "10px",
                                  width: "12%",
                                  height: "27px",
                                }}
                                control={<Radio />}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  {/* </div> */}
                </Grid>

                {/* </Grid> */}
                {/* </Box>  */}
                {/* </div>
                </div> */}
              </Grid>
            </Grid>

            {/* <Grid container xs={7} sm={7} md={7} lg={7} spacing={0} fontFamily='Roboto' style={{ marginTop: '28px', marginLeft: '23px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} width={threedwidth} height={threedheight}> */}

            <Grid
              container
              xs={8}
              sm={8}
              md={8}
              lg={8}
              spacing={0}
              fontFamily="Roboto"
              style={{
                display: "inline-flex",
                marginTop: "9px",
                marginBottom: "5px",
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="table">
                  <TableContainer
                    component={Paper}
                    style={{
                      width: "791px",
                      right: "2px",
                      marginLeft: "0px",
                      height: "422px",
                      fontFamily: "Roboto",
                      boxShadow: "none",
                    }}
                  >
                    <Table className={classes.table} aria-label="simple table">
                      <TableRow className={classes.tableRow}>
                        {/* <TableCell style={{fontFamily:"Roboto", fontSize:15}} >Parameters</TableCell> */}
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("name")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("height")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("length")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("width")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("Mass")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("material")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("labelName")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("LabelColor")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("typename")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("labelWidth")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("labelLength")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("labelPositionA")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("labelPositionB")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("CreatedBy")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("CreatedDateTime")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("UpdatedBy")}
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            width: 180,
                            height: 46,
                          }}
                          align="right"
                        >
                          {t("UpdatedDateTime")}
                        </TableCell>
                      </TableRow>
                      <TableBody className={classes.tableBody}>
                        {this.state.threedRows.map((row) => {
                          if (this.tablecasenames.length == 0) {
                            this.tablecasenames.push(row.name);
                            this.toggle = true;
                          } else {
                            if (this.tablecasenames.indexOf(row.name) > -1) {
                              console.log("Table case name already exists");
                            } else {
                              this.tablecasenames.push(row.name);
                              if (this.toggle == true) {
                                this.toggle = false;
                              } else {
                                this.toggle = true;
                              }
                            }
                          }
                          return (
                            <TableRow
                              style={{ marginTop: "3px" }}
                              selected={this.toggle}
                              className={classes.tableRow}
                              key={row.id}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                style={{ fontFamily: "Roboto", fontSize: 12 }}
                                align="right"
                              >
                                {row.name}
                              </TableCell>
                              {/* <TableCell style={{fontFamily:"Roboto", fontSize:15}} align="right">{row.name}</TableCell> */}
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.height == null ? 10 : row.height}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.length == null ? 10 : row.length}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.width == null ? 10 : row.width}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.mass == null ? 0 : row.mass}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.material == null
                                  ? "Texture1"
                                  : row.material}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labelname == null ? "N/A" : row.labelname}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labelcolour == null
                                  ? "N/A"
                                  : row.labelcolour}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.typename == null ? "N/A" : row.typename}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labelwidth == null
                                  ? "N/A"
                                  : row.labelwidth}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labelheight == null
                                  ? "N/A"
                                  : row.labelheight}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labelx == null ? "N/A" : row.labelx}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.labely == null ? "N/A" : row.labely}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.createdBy == null ? "N/A" : row.createdBy}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.createdDatetime == null
                                  ? "N/A"
                                  : row.createdDatetime}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.updatedBy == null ? "N/A" : row.updatedBy}
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: 12,
                                  width: 190,
                                  height: 46,
                                }}
                                align="right"
                              >
                                {row.updatedDatetime == null
                                  ? "N/A"
                                  : row.updatedDatetime}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Grid>
            </Grid>
            {/* </Grid>
            </Grid> */}
            {/* </Grid> */}
          </div>
        </Grid>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      casename: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  };
}

export default withTranslation()(
  connect(mapStateToProps)(withStyles(useStyles)(DashboardPage))
);
