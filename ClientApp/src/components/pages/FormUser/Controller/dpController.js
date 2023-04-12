//PalletType & intermediateLayerType onChange :-
export const handleSelection_PalletType = (
    name,
    event,
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

    G_dyMarginTop_swiperText,
    G_dyMarginLeft_swiperText,
    G_dyMarginBottom_swiperText,
    S_dyMarginTop_swiperText,
    S_dyMarginLeft_swiperText,
    S_dyMarginBottom_swiperText,

    toast,
) => {

    ////
    if (event.target.value === "EU 6: 800 x 600") {

        // G_dyMarginTop_swiperText = S_dyMarginTop_swiperText
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('60px')
        S_dyMarginLeft_swiperText = ('60px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')
        // G_dyMarginTop_swiperText = ('50px')
        S_dyMarginTop_swiperText = ('50px')




        // this.setState({
        //     // dyMarginTop_swiper: '-10px',
        //     dyMarginTop_swiperText: '50px',
        // })
        S1_dyMarginTop_swiperText('50px');
        S1_dyMarginLeft_swiperText('60px');
        S1_dyMarginBottom_swiperText('50px');
        console.log(" this.state.dyMarginTop_swiper ", S1_dyMarginTop_swiperText);
    }
    if (event.target.value === "US 1: 1219 x 1016 ") {
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('90px')
        S_dyMarginLeft_swiperText = ('90px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')



        S1_dyMarginLeft_swiperText('90px');
        S1_dyMarginBottom_swiperText('50px');
        // S1_dyMarginBottom_swiperText('50px')
    }
    if (event.target.value === "EU 1: 1200 x 800") {
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('75px')
        S_dyMarginLeft_swiperText = ('70px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        S1_dyMarginLeft_swiperText('70px');
        S1_dyMarginBottom_swiperText('50px');
    }
    if (event.target.value === "EU 2: 1200 x 1000") {

        // G_dyMarginLeft_swiperText = ('90px');
        // G_dyMarginBottom_swiperText = ('50px')

        // G_dyMarginLeft_swiperText = ('90px')
        S_dyMarginLeft_swiperText = ('90px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        S1_dyMarginLeft_swiperText('90px');
        S1_dyMarginBottom_swiperText('50px');
    }
    if (event.target.value === "AU 1: 1165 x 1165") {
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('100px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        S1_dyMarginLeft_swiperText('100px');
        S1_dyMarginBottom_swiperText('50px');
    }

    if (event.target.value === "ASIA 1: 1100 x 1100") {

        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('100px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        // console.log("Inside PalletType onChange function event ::");

        S1_dyMarginLeft_swiperText('100px');
        S1_dyMarginBottom_swiperText('50px');
    }

    if (event.target.value === "US 2: 1067 x 1067") {

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('90px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        console.log("Inside PalletType onChange function event :: ", G_dyMarginLeft_swiperText);

        S1_dyMarginLeft_swiperText('90px');
        S1_dyMarginBottom_swiperText('50px');
    }

    // else {
    //     // this.setState({
    //     //     // dyMarginTop_swiper: '-30px',
    //     //     dyMarginTop_swiperText: '30px'
    //     // })
    //     S1_dyMarginTop_swiperText('30px')
    //     S1_dyMarginLeft_swiperText('60px')
    //     S1_dyMarginBottom_swiperText('50px')
    // }




    if (name === "palletType") {
        console.log("Inside PalletType onChange function event = " + event.target.value);
        firstCaseOriginChangeFlush("pltType");
        // this.setState({
        //     pallete_Type: event.target.value
        // });
        setS_pallete_Type(event.target.value);

        G_palletType1 = event.target.value;
        G_palletType2 = event.target.value;
        // toast.info(" Please Change the WorkArea offset from Basic parameter ", { autoClose: 2000, position: toast.POSITION.TOP_CENTER });


        updatefor_Basiparameter_working_Area(event.target.value);
    }

    if (name === "intermediateLayerType") {
        console.log("Inside AAAA event = " + event.target.value);
        if (event.target.value === "" || event.target.value <= 0 || event.target.value > 10) {
            // S_errorHelperForInter = "Enter in 1 - 10"
            // S_errorNumberOfInter = true;
            setS_errorHelperForInter(" 1 - 10")
            setS_errorNumberOfInter(true)
        }

        else {
            // S_errorHelperForInter = ""
            // S_errorNumberOfInter = false;
            setS_errorHelperForInter("")
            setS_errorNumberOfInter(false)
        }
        // this.setState({
        //     intermediate_Layer_Type: event.target.value
        // });
        setintermediate_Layer_Type(event.target.value);
    }

    const selected = event.target.value;
    handleSelection_intermediateLayer(selected);

};

//CaseType onChange :-
export const handleSelection_CaseType = (
    name,
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
    setS_caseTypeSet,

) => {

    G_drawCaseImage = true;
    if (selectedOne) {
        
        setS_outside_Label_Priority(G_outside_Label_Priority);

    } else if (selectedTwo) {

        setS_outside_Label_Priority(G_outside_Label_Priority);
    }
    const selected = event.target.value;
    
    splitCaseType(selected);
    console.log("handleSelection_CaseType G_listForOutsideLabelPrior bef..... " + G_listForOutsideLabelPrior)
    G_listForOutsideLabelPrior = [];

    getCallLabel(selected);
    G_typeoptions5 = [];

    G_caseType = event.target.value;

    if (name === "caseType") {
        firstCaseOriginChangeFlush();
        G_tempLabelindex = 0;
        if (selectedOne) {

            setS_case_Type(event.target.value);
        } else {

            setS_case_Type(event.target.value);
        }
        clearingSchemaFields(name);

        setS_case_Type(event.target.value);
    }


    setS_setDefaultCase(selected);

    if (name == "caseType") {

        setS_caseTypeSet(true);
    }
};

//No Of Layers onChange :-
export const changeLayer = (
    event,
    setS_errorNumberOfLayer,
    setS_errorHelperForLayer,
    setS_layers,
    G_noOfLayers,
    setS_no_Of_Layers
) => {

    // this.setState({
    //     errorNumberOfLayer: false
    // });
    setS_errorNumberOfLayer(false);
    // this.state.errorHelperForLayer = ""
    setS_errorHelperForLayer("");

    if (event.target.value < 0 || event.target.value > 50) {
        // this.setState({
        //     errorNumberOfLayer: true
        // });
        setS_errorNumberOfLayer(true);
        // this.state.errorHelperForLayer = "Enter in 1 - 50"
        setS_errorHelperForLayer(" 1 - 50");
    }
    else if (event.target.value == "" || event.target.value <= 0) {
        // this.setState({
        //     errorNumberOfLayer: true
        // });
        setS_errorNumberOfLayer(true);
        // this.state.errorHelperForLayer = "Enter in 1 - 50"
        setS_errorHelperForLayer(" 1 - 50");
    }
    else {
        // this.setState({
        //     errorNumberOfLayer: false
        // });
        setS_errorNumberOfLayer(false);
        // this.state.errorHelperForLayer = ""
        setS_errorHelperForLayer("");
    }
    if (event.target.value <= 50) {
        if (event.target.value < 0) {
            setS_layers(1);
            event.target.value = 1;
        }
    }
    else {
        // this.setState({
        //     errorNumberOfLayer: false
        // });
        setS_errorNumberOfLayer(false);
        // this.state.errorHelperForLayer = ""
        setS_errorHelperForLayer("");
        // this.state.layers = 50;
        setS_layers(50);
        event.target.value = 50;
    }

    G_noOfLayers = event.target.value;

    setS_layers(G_noOfLayers);

    // this.setState({
    //     no_Of_Layers: event.target.value,
    //     layers: event.target.value
    // });
    setS_no_Of_Layers(event.target.value);
    setS_layers(event.target.value);
}

// SchemaA onChange :-
export const handleChangeForCasesSchemaA = (
    name,
    event,
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

) => {

    if (event.target.value == 0) {
        G_setVariantName_SchemaA = "";

        setSetVariantName_SchemaA("");
    }

    G_cases_Schema_A1 = event.target.value;
    G_CasesSchemaA = G_cases_Schema_A1;
    G_cases_Schema_A2 = event.target.value;
    G_CasesSchemaA = G_cases_Schema_A2;

    setCases_Schema_A(G_CasesSchemaA);
    G_colorA = '#5eb8b3';
    G_colorB = '';
    G_colorC = '';

    casesSchemaPrcUpdate(G_CasesSchemaA, "handleChangeForCasesSchema", "Schema A");
    clearingSchemaFields1("Schema-A");
    firstCaseOriginChangeFlushA("CasesSchemaA");

    // forceUpdate();
}

// SchemaB onChange :-
export const handleChangeForCasesSchemaB = (
    name,
    event,
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

) => {
    if (event.target.value == 0) {
        G_setVariantName_SchemaB = "";

        setSetVariantName_SchemaB("");
    }

    G_cases_Schema_B1 = event.target.value;
    G_CasesSchemaB = G_cases_Schema_B1;
    G_cases_Schema_B2 = event.target.value;
    G_CasesSchemaB = G_cases_Schema_B2;

    setCases_Schema_B(G_CasesSchemaB);
    G_colorA = '';
    G_colorB = '#5eb8b3';
    G_colorC = '';
    casesSchemaPrcUpdate(G_CasesSchemaB, "handleChangeForCasesSchema", "Schema B");
    // forceUpdate();
    clearingSchemaFields1("Schema-B");
    firstCaseOriginChangeFlushB("CasesSchemaB");
}

// Intermediate onBlur :-
export const updateSelection3 = (
    event,
    name,
    updatePallet,
    G_intermediateLayerType1,
    G_intermediateLayerType2,
    setS_errorHelperForInter,
    setS_errorNumberOfInter,
    setS_intermediate_Layer_Type) => {


    if (name === "intermediateLayerType") {

        if (event.target.value === "" || event.target.value <= 0) {
            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInter(" 1 - 10")
            setS_errorNumberOfInter(true)
            // S_errorNumberOfInter = true;
            event.target.value = 1;
            // S_intermediate_Layer_Type = 1;
            setS_intermediate_Layer_Type(1);

        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInter(false)
        }

        if (event.target.value > 10) {

            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInter(" 1 - 10")
            // S_errorNumberOfInter = true;
            setS_errorNumberOfInter(true)
            event.target.value = 10;
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_intermediate_Layer_Type = 10;
            setS_intermediate_Layer_Type(10);
        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInter(false)
        }

        setS_intermediate_Layer_Type(event.target.value);
        G_intermediateLayerType1 = event.target.value;
        G_intermediateLayerType2 = event.target.value;

    }

    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};

// SchemaC onChange :-
export const handleChangeForCasesSchemaC = (
    name,
    event,
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
) => {
    if (event.target.value == 0) {
        G_setVariantName_SchemaC = "";

        setS_setVariantName_SchemaC("");
    }

    G_cases_Schema_C1 = event.target.value;
    G_CasesSchemaC = G_cases_Schema_C1;
    G_cases_Schema_C2 = event.target.value;
    G_CasesSchemaC = G_cases_Schema_C2;

    setS_cases_Schema_C(G_CasesSchemaC);
    G_colorA = '';
    G_colorB = '';
    G_colorC = '#5eb8b3';
    casesSchemaPrcUpdate(G_CasesSchemaC, "handleChangeForCasesSchema", "Schema C");
    clearingSchemaFields1("Schema-C");
    firstCaseOriginChangeFlushC("CasesSchemaC");
    // forceUpdate();
}

//caseType onBlur :-
export const updateSelection2 = (updatePallet, e) => {

    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};
