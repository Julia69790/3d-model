import { Suspense, useRef, useState} from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF,OrbitControls } from '@react-three/drei'
// import { Canvas, useFrame } from "react-three-fiber"
// import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei"
// import { HexColorPicker } from "react-colorful"
import { proxy, useProxy } from "valtio"

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.

// const state = proxy({
//   current: null,
//   items: {
//     material1: "#ffffff",
//     material2: "#ff0000"
//   },
// })

function Model({ ...props }) {
  const group = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // const snap = useProxy(state)
  const { nodes, materials } = useGLTF('/distance-sensor-draco.glb')
  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      scale={clicked ? 1.2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh /*material-color={snap.items.material1}*/ geometry={nodes.DISTANCE_SENSOR002__0.geometry} material={materials['Scene_-_Root']} />
            <mesh /*material-color={snap.items.material2}*/ geometry={nodes.DISTANCE_SENSOR002__0_1.geometry} material={materials['Scene_-_Root']} />
          </group>
        </group>
      </group>
    </group>
  )
}


// function Picker() {
//   const snap = useProxy(state)
//   return (
//     <div style={{ display: snap.current ? "block" : "none" }}>
//       <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
//       <h1>{snap.current}</h1>
//     </div>
//   )
// }

// function ModelTrue() {
//   const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
//   console.log("TRUEMODEL:", gltf)
//   return (<primitive object={gltf.scene} />)
// }

export default function App() {
  return (
    // <div>
      <Suspense>
        <Canvas>
          <ambientLight  intensity={0.5} />
          <Model />
          {/* <ModelTrue /> */}
          <OrbitControls />
        </Canvas>
      </Suspense>
    // </div>
  )
}