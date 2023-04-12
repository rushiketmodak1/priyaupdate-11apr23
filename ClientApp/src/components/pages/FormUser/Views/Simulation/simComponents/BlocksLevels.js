import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box3, Vector3, TextureLoader} from "three";
import { useTexture } from "@react-three/drei";
import { toast } from 'material-react-toastify';
import Texture1 from "../../../texture1.png";
import Texture2 from "../../../texture2.png";
import Texture3 from "../../../texture3.png";
import Texture4 from "../../../texture4.png";


const BlocksLevels = (props) => {

  // console.log("layer_data from simulation page", props.layer_data)
  // console.log("BlocksLevels all props data positionX.....--   ", props.positionX)
  // console.log("BlocksLevels all props data positionY.....--   ", props.positionY)
  // console.log("BlocksLevels all props data positionZ.....--   ", props.positionZ)
  // console.log("BlocksLevels all props data Case_Width.....--   ", props.Case_Width)
  // console.log("BlocksLevels all props data Case_Height.....--   ", props.Case_Height)
  // console.log("BlocksLevels all props data Case_Length.....--   ", props.Case_Length)
  // console.log("BlocksLevels all props data windowHeight.....--   ", props.windowHeight)
  // console.log("BlocksLevels all props data speed.....--   ", props.speed)
  // console.log("BlocksLevels all props data Pallet_Width.....--   ", props.Pallet_Width)
  // console.log("BlocksLevels all props data Pallet_Length.....--   ", props.Pallet_Length)
  // console.log("BlocksLevels all props data pallet_xpos.....--   ", props.pallet_xpos)
  // console.log("BlocksLevels all props data pallet_ypos.....--   ", props.pallet_ypos)
  // console.log("BlocksLevels all props data simCasesPositionsForSchemaA.....--   ", props.simCasesPositionsForSchemaA)
  // console.log("BlocksLevels all props data simCasesPositionsForSchemaB.....--   ", props.simCasesPositionsForSchemaB)
  // console.log("BlocksLevels all props data simCasesPositionsForSchemaC.....--   ", props.simCasesPositionsForSchemaC)
  // console.log("BlocksLevels all props data layer_data.....--   ", props.layer_data)
  // console.log("BlocksLevels all props data S_state.....--   ", props.S_state)
  // console.log("BlocksLevels all props data props.intermediate_Layer_Type.....--   ", props.intermediate_Layer_Type)

  const texture1 = useTexture(Texture1);
  const texture2 = useTexture(Texture2);
  const texture3 = useTexture(Texture3);
  const texture4 = useTexture(Texture4);

  
  
  const map = (Val, in_max, in_min, out_max, out_min) => {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
  }


  const startA = props.simCasesPositionsForSchemaA.map((caseValue, i) => {
    
    console.log("cases shiftig check tempStart: props.pallet_xpos.... ", props.pallet_xpos) // creating cases shifting issues in pallet 1/2
    
    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      // x: -((((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)),
      y: (((props.Case_Height / 2) + 0.2) + 0.3),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    console.log("cases shiftig check tempStart:.... ", tempStart)
    return tempStart;
  })
  const startB = props.simCasesPositionsForSchemaB.map((caseValue, i) => {
    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      // x: -((((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)),
      y: (((props.Case_Height / 2) + 0.2) + 0.3),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempStart;
  })
  const startC = props.simCasesPositionsForSchemaC.map((caseValue, i) => {
    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: (((props.Case_Height / 2) + 0.2) + 0.3),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempStart;
  })
  const endA = props.simCasesPositionsForSchemaA.map((caseValue, i) => {

    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    console.log("cases shiftig check tempStart: props.pallet_xpos....endA:... ", tempEnd) // creating cases shifting issues in pallet 1/2
    return tempEnd;
  })
  const endB = props.simCasesPositionsForSchemaB.map((caseValue, i) => {
    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempEnd;
  })
  const endC = props.simCasesPositionsForSchemaC.map((caseValue, i) => {
    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempEnd;
  })
  
  let intermediate_LayerHeightChangeStart_Layer = 0;
  let intermediate_LayerHeightChangeStart_Case = 0;
  let intermediate_LayerHeightChangeEnd_Layer = 0;
  let intermediate_LayerHeightChangeEnd_case = 0;
  let layerEndIncrement = 0;

  const tempStart = props.layer_data.map((layer, i) => {
    if (layer.layername == "Schema A") {
      let newHeigthY = 0;
      let startPositionsA = startA.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaA[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((startPos.y + (props.Case_Height * (layer.layerSequence - 1))) + map((props.simCasesPositionsForSchemaA[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaA[index].pre_Pos_X), 0, 1400, 0, 2.98))
        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsA.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsA;
    } else if (layer.layername == "Schema B") {
      let newHeigthY = 0;
      let startPositionsB = startB.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaB[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((startPos.y + (props.Case_Height * (layer.layerSequence - 1))) + map((props.simCasesPositionsForSchemaB[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaB[index].pre_Pos_X), 0, 1400, 0, 2.98))

        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsB.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsB;
    } else if (layer.layername == "Schema C") {
      let newHeigthY = 0;
      let startPositionsC = startC.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaC[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((startPos.y + (props.Case_Height * (layer.layerSequence - 1))) + map((props.simCasesPositionsForSchemaC[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaC[index].pre_Pos_X), 0, 1400, 0, 2.98))

        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsC.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsC;
    } else {
      if (layer.intermediatelayer == true) {
        
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
      }
      return;
    }
  });
  const tempEnd = props.layer_data.map((layer, i) => {
    if (layer.layername == "Schema A") {
      let newHeigthY = 0;
      let endPositionsA = endA.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsA.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsA;
    } else if (layer.layername == "Schema B") {
      let newHeigthY = 0;
      let endPositionsB = endB.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsB.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsB;
    } else if (layer.layername == "Schema C") {
      let newHeigthY = 0;
      let endPositionsC = endC.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsC.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsC;
    } else {
      if (layer.intermediatelayer == true) {
        
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        layerEndIncrement += 1;
      }
      return
    }
  });
  
  const schemaArrangement = props.layer_data.map((layer, i) => {
    let currentSchemaLayer = null;
    if (layer.layername == "Schema A") {
      currentSchemaLayer = [...props.simCasesPositionsForSchemaA];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width" })
      }
    } else if (layer.layername == "Schema B") {
      currentSchemaLayer = [...props.simCasesPositionsForSchemaB];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width" })
      }
    } else if (layer.layername == "Schema C") {
      currentSchemaLayer = [...props.simCasesPositionsForSchemaC];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width" })
      }
    }
    
    return currentSchemaLayer;
  })
  
  const cubeMesh = schemaArrangement.flat().slice(1).map((cases, i) => {
    return useRef();
  })
  
  const cubeMeshFirstIL = useRef();
  const caseVisibleChange = schemaArrangement.flat().slice(1).map((cases, i) => {
    if (props.S_state == "panel6") {
      return false;
    } else {
      return true;
    }
  })

  const [cubeMeshIndex, setcubeMeshIndex] = useState(0);
  const [caseVisibleA, setCaseVisibleA] = useState(caseVisibleChange);
  const [start, setStart] = useState(tempStart.flat().slice(1));
  const [end, setEnd] = useState(tempEnd.flat().slice(1));
  const [schemaArrangementABC, setSchemaArrangementABC] = useState(schemaArrangement.flat().slice(1));
  const [firstILPresent, setFirstILPresent] = useState(props.layer_data[0].intermediatelayer);
  //
  //

  const cubeBBMesh = cubeMesh.map((mesh, i) => {
    if(mesh.current !== undefined){
      return new Box3(new Vector3(), new Vector3()).setFromObject(mesh.current);
    }
  })

  
  
  useFrame((state, delta) => {

    if (cubeMeshIndex !== -1) {
      if ((cubeMeshIndex < cubeMesh.length) && props.S_state == "panel6") {
        // updating bounding box of current simulating case (needed for case collision detection)
        if (cubeBBMesh.length > 0 && cubeBBMesh[cubeMeshIndex] !== undefined) {
          cubeBBMesh[cubeMeshIndex].copy(cubeMesh[cubeMeshIndex].current.geometry.boundingBox).applyMatrix4(cubeMesh[cubeMeshIndex].current.matrixWorld)
        }
        
        // making case visible one by one
        const CaseVisibleToChange = caseVisibleA.map((value, i) => {
          if (i <= cubeMeshIndex) {
            return true;
          } else {
            return false;
          }
        }) 
        setCaseVisibleA(CaseVisibleToChange)

        // updating the case position on every iteration to animate
        cubeMesh[cubeMeshIndex].current.position.x += ((end[cubeMeshIndex].x - start[cubeMeshIndex].x) * delta) / props.speed;
        // updating the case position on every iteration to animate
        cubeMesh[cubeMeshIndex].current.position.y += ((end[cubeMeshIndex].y - start[cubeMeshIndex].y) * delta) / props.speed;
        // updating the case position on every iteration to animate
        cubeMesh[cubeMeshIndex].current.position.z += ((end[cubeMeshIndex].z - start[cubeMeshIndex].z) * delta) / props.speed;

        // detects collision with current simulating case and all already set cases.
        if (cubeBBMesh.length > 0 && cubeBBMesh[cubeMeshIndex] !== undefined) {
          for (let i = 0; i < cubeMeshIndex; i++) {
            if (cubeBBMesh[cubeMeshIndex].intersectsBox(cubeBBMesh[i])) {
              // simulation gets aborded if colision detected, status changes to Failed
              setcubeMeshIndex(-1)
              props.handleAbortSimulation("collision", (cubeMeshIndex+1))
              console.log("checking collision.. true");
            }
          }
        }
        
        // sets the cube at final position
        if((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }  
        }
        else if((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }  
        }
        else if((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)){
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        } 
      } else {
        setcubeMeshIndex(-1)
        props.handleSimulationPassed("simPassed");
      }
    }

  });

  return (
    <>
      {firstILPresent &&

        <mesh visible={firstILPresent} ref={cubeMeshFirstIL}
          position={[0, ((props.intermediate_Layer_Type / 2) + 0.2), 0]} castShadow receiveShadow>
          <boxGeometry attach="geometry" args={[props.Pallet_Width, props.intermediate_Layer_Type, props.Pallet_Length]} />
          <meshStandardMaterial attach="material" color={"#808080"} />
        </mesh>
      }
      {schemaArrangementABC &&
        schemaArrangementABC.map((caseValue, i) => {
          return <>
            {(props.S_state == "panel6")
              ?
              // main case
              <mesh visible={caseVisibleA[i]} ref={cubeMesh[i]}
                position={[start[i].x, start[i].y, start[i].z]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={start[i].intermediatelayer == true ? [props.Pallet_Width, props.intermediate_Layer_Type, props.Pallet_Length] : [caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length, props.Case_Height, caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length]} />
                <meshStandardMaterial map={start[i].intermediatelayer == true ? "" : texture1} attach="material" color={start[i].intermediatelayer == true ? "#808080" : "#c7a887"} />

                {/* label for back */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.6), (props.Case_Height / 2.6), 0.00035] : [0.00035, (props.Case_Height / 2.6), (props.Case_Width / 2.6)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for front */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.00035] : [0.00035, (props.Case_Height / 2.4), (props.Case_Width / 2.4)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for right */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.00035, (props.Case_Height / 2.4), (props.Case_Width / 2.4)] : [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.00035]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for left */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0] : [0, 0, -(props.Case_Width / 2)] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.00035, (props.Case_Height / 2.4), (props.Case_Width / 2.4)] : [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.00035]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for top */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={[0, (props.Case_Height / 2), 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.4), 0.00035, (props.Case_Length / 2.4)] : [(props.Case_Length / 2.4), 0.00035, (props.Case_Width / 2.4)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}
              </mesh>
              :
              // main case
              <mesh visible={caseVisibleA[i]} ref={cubeMesh[i]}
                position={[end[i].x, end[i].y, end[i].z]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={end[i].intermediatelayer == true ? [props.Pallet_Width, props.intermediate_Layer_Type, props.Pallet_Length] : [caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length, props.Case_Height, caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length]} />
                <meshStandardMaterial map={start[i].intermediatelayer == true ? "" : texture1} attach="material" color={start[i].intermediatelayer == true ? "#808080" : "#c7a887"} />

                {/* label for back */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.6), (props.Case_Height / 2.6), 0.0005] : [0.0005, (props.Case_Height / 2.6), (props.Case_Width / 2.6)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for front */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.0005] : [0.0005, (props.Case_Height / 2.4), (props.Case_Width / 2.4)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for right */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0005, (props.Case_Height / 2.4), (props.Case_Width / 2.4)] : [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.0005]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for left */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0] : [0, 0, -(props.Case_Width / 2)] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0005, (props.Case_Height / 2.4), (props.Case_Width / 2.4)] : [(props.Case_Width / 2.4), (props.Case_Height / 2.4), 0.0005]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}

                {/* label for top */}
                {/* {start[i].intermediatelayer == false &&
                  <mesh position={[0, (props.Case_Height / 2), 0] } receiveShadow>
                    <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [(props.Case_Width / 2.4), 0.0005, (props.Case_Length / 2.4)] : [(props.Case_Length / 2.4), 0.0005, (props.Case_Width / 2.4)]} />
                    <meshStandardMaterial attach="material" color={"#ffffff"} />
                  </mesh>
                } */}
              </mesh>
            }
          </>
        })
      }

    </>
  );
};

export default BlocksLevels;
