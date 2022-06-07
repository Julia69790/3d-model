import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
  Outlet
} from "react-router-dom";
// import { Canvas, useFrame } from "react-three-fiber"
// import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei"
// import { HexColorPicker } from "react-colorful"
// import { proxy, useProxy } from "valtio"

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.

// const state = proxy({
//   current: null,
//   items: {
//     material1: "#ffffff",
//     material2: "#ff0000"
//   },
// })



// class LinkModel extends React.Component {
//   render() {
//     const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-")
//     return (
//       <div>
//         <a href={url}>{this.props.label}</a>
//       </div>
//     )
//   }
// }

// class ModelList extends React.Component{

// }

// class Container extends React.Component{

// }

// class Model extends React.Component{ 
//   constructor(props) {
//     super(props)
//     this.state = {
//       click: false
//     }
//   }

//   renderModel() {
//     const group = useRef()
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     // const snap = useProxy(state)
//     const { nodes, materials } = useGLTF('/distance-sensor-draco.glb')
//     if(this.state.click){
//       return (
//         <group 
//           ref={group} 
//           {...props} 
//           dispose={null}
//           scale={clicked ? 1.2 : 1}
//           onClick={(event) => click(!clicked)}
//           onPointerOver={(event) => hover(true)}
//           onPointerOut={(event) => hover(false)}
//           // dispatchEvent={(event) => <text>information</text>}
//         >
//           <group rotation={[-Math.PI / 2, 0, 0]}>
//             <group rotation={[Math.PI / 2, -1, 0]}>
//               <group rotation={[-Math.PI / 1.7, 0, 0]} scale={100}>
//                 <mesh /*material-color={snap.items.material1}*/ geometry={nodes.DISTANCE_SENSOR002__0.geometry} material={materials['Scene_-_Root']} />
//                 <mesh /*material-color={snap.items.material2}*/ geometry={nodes.DISTANCE_SENSOR002__0_1.geometry} material={materials['Scene_-_Root']} />
//               </group>
//             </group>
//           </group>
//         </group>
//       )
//     }
//   }
//   render() {
//     return <div className="model">{this.renderModel()}</div>
//   }
// }


// function ModelList(props) {
//   const models = props.models
//   const listItems = models.map((model) =>
//     <li key={model.toString()}>
//       {model}
//     </li>
//   )
//   return (
//     <ul>{listItems}</ul>
//   )
// }
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
    //<Router>
    <div>
    <h1>Агробизнес</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        {/* <Link to="/">start</Link> |{" "} */}
        <Link to="/models">models</Link> |{" "}
        <Link to="/statistic">statistic</Link>
      </nav>
      <Outlet />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch >
          <Route path="/models" >
            <MenuModel />
          </Route>
          <Route path="/statistic" >
            <Statistic />
          </Route>
          <Route path="/" >
            <h1>Hello</h1>
          </Route>
        </Switch> */}
    </div>
    //</Router>
    // <div className="content" 
    // style={{
    //   width: '70%',
    //   height: '90vh',
    //   display: 'flex', 
    //   position: 'absolute', 
    //   top: '10vh',
    //   left: '30vh'
    //}}
    //>
    // <MenuModel />
    // <Suspense>
    //     <Canvas>
    //       <ambientLight  intensity={0.5} />
    // {/* <ModelList models={models} style={{width: "100vh", height: '100vh'}}/> */}

    //       <Model />
    //       {/* <ModelTrue /> */}
    //       <OrbitControls />
    //     </Canvas>
    //   </Suspense>
    // </div>
  )
}