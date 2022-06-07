import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import React from 'react'

export default function ModelOne({ ...props }) {
    // let params = useParams()
    // let model = getModel(parseInt(params.modelId, 10))
    const group = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // const snap = useProxy(state)
    const { nodes, materials } = useGLTF('/distance-sensor-draco.glb')
    return (
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <group
            ref={group}
            {...props}
            dispose={null}
            scale={clicked ? 1.2 : 1}
            // onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
          // dispatchEvent={(event) => <text>information</text>}
          >
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group rotation={[Math.PI / 2, -1, 0]}>
                <group rotation={[-Math.PI / 1.7, 0, 0]} scale={100}>
                  <mesh geometry={nodes.DISTANCE_SENSOR002__0.geometry} material={materials['Scene_-_Root']} />
                  <mesh geometry={nodes.DISTANCE_SENSOR002__0_1.geometry} material={materials['Scene_-_Root']} />
                </group>
              </group>
            </group>
          </group>
          <OrbitControls />
        </Canvas>
      </Suspense>
    )
  }