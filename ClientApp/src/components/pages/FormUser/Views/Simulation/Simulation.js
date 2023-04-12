import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ThreedBuildModal from "./simComponents/BuildingModal3d";
// import "./App.css";

function Simulation(props) {
  
 
  return (
    <div style={{zIndex: 12, height: "371px"}}>
    {/* <div style={{zIndex: 12, borderStyle: "solid"}}> */}
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <ThreedBuildModal
            simulationSpeed={props.simulationSpeed}
            simulationRunning={props.simulationRunning}
            Pallet_Length={props.Pallet_Length}
            Pallet_Width={props.Pallet_Width}
            Case_Length={props.Case_Length}
            Case_Width={props.Case_Width}
            Case_Height={props.Case_Height}
            pallet_xpos={props.pallet_xpos}
            pallet_ypos={props.pallet_ypos}
            simCasesPositionsForSchemaA={props.simCasesPositionsForSchemaA}
            simCasesPositionsForSchemaB={props.simCasesPositionsForSchemaB}
            simCasesPositionsForSchemaC={props.simCasesPositionsForSchemaC}
            layer_data={props.layer_data}
            S_state={props.S_state}
            intermediate_Layer_Type={props.intermediate_Layer_Type}
            handleAbortSimulation={props.handleAbortSimulation}
            handleSimulationPassed={props.handleSimulationPassed}
            WA_1_width_X_Dir={props.WA_1_width_X_Dir}
            WA_1_Length_Y_Dir={props.WA_1_Length_Y_Dir}
            WA_2_width_X_Dir={props.WA_2_width_X_Dir}
            WA_2_Length_Y_Dir={props.WA_2_Length_Y_Dir}
            WA_1_Offset_X_Dir={props.WA_1_Offset_X_Dir}
            WA_1_Offset_Y_Dir={props.WA_1_Offset_Y_Dir}
            WA_2_Offset_X_Dir={props.WA_2_Offset_X_Dir}
            WA_2_Offset_Y_Dir={props.WA_2_Offset_Y_Dir}
            selectedOne={props.selectedOne}
            selectedTwo={props.selectedTwo}
            originPal1={props.originPal1}
            originPal2={props.originPal2}
            // callSchema1={props.callSchema1}
          />
        </Suspense>
      </Canvas>  
    </div>
  );
}

export default Simulation;
