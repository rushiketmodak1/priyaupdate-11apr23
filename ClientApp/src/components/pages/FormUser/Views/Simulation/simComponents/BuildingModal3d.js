import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleRadians } from "../utils/angle";
import BlocksLevels from "./BlocksLevels";

const BuildingModal3d = (props) => {
  const meshRef = useRef(null);

  const [newSimCasesPositionsForSchemaA, setNewSimCasesPositionsForSchemaA] = useState([])
  const [newSimCasesPositionsForSchemaB, setNewSimCasesPositionsForSchemaB] = useState([])
  const [newSimCasesPositionsForSchemaC, setNewSimCasesPositionsForSchemaC] = useState([])
  const [readyToRender, setReadyToRender] = useState(false)
  const [WA_Positions, setWA_Positions] = useState([0,0,0])

  const WA_width_X_Dir = props.selectedOne ? props.WA_1_width_X_Dir : props.WA_2_width_X_Dir;
  const WA_Length_Y_Dir = props.selectedOne ? props.WA_1_Length_Y_Dir : props.WA_2_Length_Y_Dir; 
  const Offset_X_Dir = props.selectedOne ? props.WA_1_Offset_X_Dir : props.WA_2_Offset_X_Dir;
  const Offset_Y_Dir = props.selectedOne ? props.WA_1_Offset_Y_Dir : props.WA_2_Offset_Y_Dir;
  const origin = props.selectedOne ? props.originPal1 : props.originPal2;

  // console.log("BuildingModal3d props.WA_1_width_X_Dir...: ", props.WA_1_width_X_Dir, "   ...WA_2_width_X_Dir....: ", props.WA_2_width_X_Dir)
  // console.log("BuildingModal3d props.WA_1_Length_Y_Dir...: ", props.WA_1_Length_Y_Dir, "   ...WA_2_Length_Y_Dir....: ", props.WA_2_Length_Y_Dir)
  


  const sortByPos = () => {
    props.simCasesPositionsForSchemaA.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaA = newSimCasesPositionsForSchemaA;
      if (props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1] !== undefined) {
        
        temp_newSimCasesPositionsForSchemaA[i] = {...caseValues, x: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].orientation}
        setNewSimCasesPositionsForSchemaA(temp_newSimCasesPositionsForSchemaA)
      }
    })

    props.simCasesPositionsForSchemaB.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaB = newSimCasesPositionsForSchemaB;
      if (props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1] !== undefined) {
        
        temp_newSimCasesPositionsForSchemaB[i] = {...caseValues, x: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].orientation}
        setNewSimCasesPositionsForSchemaB(temp_newSimCasesPositionsForSchemaB)
      }
    })

    props.simCasesPositionsForSchemaC.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaC = newSimCasesPositionsForSchemaC;
      if (props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1] !== undefined) {
        
        temp_newSimCasesPositionsForSchemaC[i] = {...caseValues, x: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].orientation}
        setNewSimCasesPositionsForSchemaC(temp_newSimCasesPositionsForSchemaC)
      }
    })
  }

  useEffect(() => {
    if(origin == "Upper Left Corner"){
      setWA_Positions([(((WA_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, (((WA_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)])
    }else if(origin == "Upper Right Corner"){
      setWA_Positions([-(((WA_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, (((WA_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)])
    }else if(origin == "Lower Left Corner"){
      setWA_Positions([(((WA_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, -(((WA_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)])
    }else if(origin == "Lower Right Corner"){
      setWA_Positions([-(((WA_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, -(((WA_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)])
    }
  }, [props.selectedOne, props.selectedTwo, WA_width_X_Dir, WA_Length_Y_Dir])

  useEffect(()=>{
    sortByPos();
    setReadyToRender(true)
  },[props.simCasesPositionsForSchemaA, props.simCasesPositionsForSchemaB, props.simCasesPositionsForSchemaC])

  // console.log("running simulation renedr test..newSimCasesPositionsForSchemaA...", newSimCasesPositionsForSchemaA)
  // console.log("running simulation renedr test...newSimCasesPositionsForSchemaB..", newSimCasesPositionsForSchemaB)
  // console.log("running simulation renedr test...newSimCasesPositionsForSchemaC..", newSimCasesPositionsForSchemaC)


  return (
    <>
      <PerspectiveCamera position={[-3, 4, 5]} makeDefault />
      <OrbitControls enableZoom={true} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(20)} />
      <mesh ref={meshRef}>
        {/* pallet */}
        <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
          <boxGeometry attach="geometry" args={[props.Pallet_Width, 0.2, props.Pallet_Length]} />
          <meshStandardMaterial attach="material" color="#a32f26" />
        </mesh>
        {/* pallet */}


        {readyToRender && props.simulationRunning &&
          <BlocksLevels
            positionX={-0.2}
            positionY={0.6}
            positionZ={0}
            Case_Width={props.Case_Width}
            Case_Height={props.Case_Height}
            Case_Length={props.Case_Length}
            windowHeight={0.4}
            speed={props.simulationSpeed}
            Pallet_Width={props.Pallet_Width}
            Pallet_Length={props.Pallet_Length}
            pallet_xpos={props.pallet_xpos}
            pallet_ypos={props.pallet_ypos}
            simCasesPositionsForSchemaA={newSimCasesPositionsForSchemaA}
            simCasesPositionsForSchemaB={newSimCasesPositionsForSchemaB}
            simCasesPositionsForSchemaC={newSimCasesPositionsForSchemaC}
            layer_data={props.layer_data}
            S_state={props.S_state}
            intermediate_Layer_Type={props.intermediate_Layer_Type}
            handleAbortSimulation={props.handleAbortSimulation}
            handleSimulationPassed={props.handleSimulationPassed}
            selectedOne={props.selectedOne}
            selectedTwo={props.selectedTwo}
          />
        }



      </mesh>
      {/* Working Area */}
      {/* 
      //position={[x,z,y]} 

        //upper right cor
          [-(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, (((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)]

        // upper left cor
          [(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, (((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)]

        //lower left cor
          [(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, -(((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)]

        //lower right cor
          [-(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, -(((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)]

      */}
      <mesh rotation={[-angleRadians(90), 0, 0]}
        position={WA_Positions}
        receiveShadow>
        <planeGeometry attach="geometry" args={[WA_width_X_Dir, WA_Length_Y_Dir]} />
        <meshStandardMaterial attach="material" color="#fcdb7c" />
      </mesh>
      {/* Working Area */}

      <ambientLight args={["#ffffff", 0.3]} />
      <directionalLight args={["#ffffff", 1]} position={[-3, 3, 2]} castShadow />
    </>
  );
};

export default BuildingModal3d;
