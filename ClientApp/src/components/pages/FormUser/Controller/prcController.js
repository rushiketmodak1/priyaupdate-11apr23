import { toast, ToastContainer } from 'material-react-toastify';



export const callBlurPreposYPRC = (
    event,
    S_selectedOne,
    S_setnumbery,
    G_globalScaley,
    S_selectedTwo,
    S_setnumbery2,
    G_globalScaley2,
    savePrc,
    S1_setnumbery,
    S1_setnumbery2,

) => {

    if (S_selectedOne) {

        S_setnumbery = G_globalScaley;

        console.log("S_setnumbery = ", G_globalScaley)

        if (event.target.value == "") {

            console.log("S_setnumbery == ", G_globalScaley)


            S1_setnumbery(0);
            // event.target.value = 0;
        }
    }

    if (S_selectedTwo) {

        S_setnumbery2 = G_globalScaley2;

        if (event.target.value == "") {

            // S_setnumbery2 = 0;
            S1_setnumbery2(0)
        }
        else {
            S_setnumbery2 = event.target.value;
        }
    }
    savePrc();
}

export const callBlurPreposXPRC = (
    event,
    S_selectedOne,
    S_setnumberx,
    G_globalScalex,
    S1_setnumberx,
    S_selectedTwo,
    S_setnumberx2,
    S1_setnumberx2,
    G_globalScalex2,
    savePrc,
) => {

    if (S_selectedOne) {

        S_setnumberx = G_globalScalex;

        if (event.target.value == "") {

            // this.state.setnumberx = 0;
            S1_setnumberx(0);
        }
    }

    if (S_selectedTwo) {

        S_setnumberx2 = G_globalScalex2;

        if (event.target.value == "") {

            S1_setnumberx2(0);
        }
        else {
            S_setnumberx2 = event.target.value;
        }
    }
    savePrc();
}

export const callBlurPreposZPRC = (
    event,
    S_selectedOne,
    S_setnumberz,
    G_globalScalez,
    S1_setnumberz,
    S_selectedTwo,
    S_setnumberz2,
    G_globalScalez2,
    S1_setnumberz2,
    savePrc,

) => {

    if (S_selectedOne) {

        S_setnumberz = G_globalScalez;

        if (event.target.value == "") {

            S1_setnumberz(0);
        }
    }

    if (S_selectedTwo) {

        S_setnumberz2 = G_globalScalez2;

        if (event.target.value == "") {

            S1_setnumberz2(0);
        }
        else {
            S_setnumberz2 = event.target.value;
        }
    }
    savePrc();
}


export const callBlurPreposY1PRC = (
    event,
    index,
    G_casedata,
    G_preposy,
    G_case_data,
    S1_case_data,
    S_selectedOne,
    S_colorA,
    G_casedataA1,
    S_colorB,
    G_casedataB1,
    S_colorC,
    G_casedataC1,
    S_selectedTwo,
    G_casedataA2,
    G_casedataB2,
    G_casedataC2,
    savePrc,

) => {

    console.log("Inside callBlurPreposY1PRC 1 = ");

    const tempArr = G_casedata;

    if (G_preposy == "") {

        G_preposy = 0;

        tempArr[index].pre_Pos_Y = G_preposy;


        G_casedata = tempArr;
        G_case_data = tempArr;

        //   this.setState({
        //     case_data: tempArr,
        //   })
        S1_case_data(tempArr);
        if (S_selectedOne) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA1 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB1 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC1 = tempArr;
            }
        }

        else if (S_selectedTwo) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA2 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB2 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC2 = tempArr;
            }
        }

    }
    savePrc();
}

export const callBlurPreposX1PRC = (
    event,
    index,
    G_preposx,
    G_casedata,
    S1_case_data,
    G_case_data,
    S_selectedOne,
    S_colorA,
    S_colorB,
    S_colorC,
    G_casedataA1,
    G_casedataB1,
    G_casedataC1,
    G_casedataA2,
    G_casedataB2,
    G_casedataC2,
    S_selectedTwo,
    savePrc,
) => {

    console.log("Inside callBlurPreposX1PRC 1 = ");

    const tempArr = G_casedata;

    if (G_preposx == "") {

        G_preposx = 0;

        tempArr[index].pre_Pos_X = G_preposx;


        G_casedata = tempArr;
        G_case_data = tempArr;
        //   this.setState({
        //     case_data: tempArr,
        //   })
        S1_case_data(tempArr);

        if (S_selectedOne) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA1 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB1 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC1 = tempArr;
            }
        }

        else if (S_selectedTwo) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA2 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB2 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC2 = tempArr;
            }
        }

    }
    savePrc();
}

export const callBlurPreposZ1PRC = (
    event,
    index,
    G_preposz,
    G_casedata,
    S1_case_data,
    G_case_data,
    S_selectedOne,
    S_selectedTwo,
    S_colorA,
    S_colorB,
    S_colorC,
    G_casedataA1,
    G_casedataB1,
    G_casedataC1,
    G_casedataA2,
    G_casedataB2,
    G_casedataC2,
    savePrc,

) => {

    console.log("Inside callBlurPreposZ1PRC 1 = ");

    const tempArr = G_casedata;

    if (G_preposz == "") {

        G_preposz = 0;

        tempArr[index].pre_Pos_Z = G_preposz;


        G_casedata = tempArr;
        G_case_data = tempArr;
        //   this.setState({
        //     case_data: tempArr,
        //   })
        S1_case_data(tempArr);

        if (S_selectedOne) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA1 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB1 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC1 = tempArr;
            }
        }

        else if (S_selectedTwo) {

            if (S_colorA == '#5eb8b3') {
                G_casedataA2 = tempArr;
            }

            if (S_colorB == '#5eb8b3') {
                G_casedataB2 = tempArr;
            }

            if (S_colorC == '#5eb8b3') {
                G_casedataC2 = tempArr;
            }
        }

    }
    savePrc();
}