import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const ref = useRef()
  const { mouse } = useThree()
  const COUNT = 2800
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3), col = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = Math.random()*24+2, theta = Math.random()*Math.PI*2, phi = Math.acos(2*Math.random()-1)
      pos[i*3]=r*Math.sin(phi)*Math.cos(theta); pos[i*3+1]=r*Math.sin(phi)*Math.sin(theta); pos[i*3+2]=r*Math.cos(phi)
      const t = Math.random()
      col[i*3]=t*.13; col[i*3+1]=t*.38+(1-t)*.9; col[i*3+2]=1.0
    }
    return [pos, col]
  }, [])
  useFrame(({clock}) => {
    if(!ref.current) return
    ref.current.rotation.y = clock.elapsedTime*.018 + mouse.x*.08
    ref.current.rotation.x = clock.elapsedTime*.007 + mouse.y*.05
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions,3]}/>
        <bufferAttribute attach="attributes-color" args={[colors,3]}/>
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.6} sizeAttenuation/>
    </points>
  )
}

function Ring({radius,tube,speed,color,tiltX=0,tiltZ=0}) {
  const ref = useRef()
  useFrame(({clock}) => { if(ref.current){ ref.current.rotation.z=clock.elapsedTime*speed; ref.current.rotation.x=tiltX+Math.sin(clock.elapsedTime*.3)*.04 } })
  return <mesh ref={ref} rotation={[tiltX,0,tiltZ]}><torusGeometry args={[radius,tube,6,140]}/><meshBasicMaterial color={color} transparent opacity={0.1}/></mesh>
}

function FloatShape({pos,speed,color,geo}) {
  const ref = useRef()
  useFrame(({clock}) => {
    if(!ref.current) return
    ref.current.rotation.x = clock.elapsedTime*speed
    ref.current.rotation.y = clock.elapsedTime*speed*.7
    ref.current.position.y = pos[1]+Math.sin(clock.elapsedTime*.6)*.6
  })
  return (
    <mesh ref={ref} position={pos}>
      {geo==='ico' ? <icosahedronGeometry args={[1.1,0]}/> : <octahedronGeometry args={[.9,0]}/>}
      <meshBasicMaterial color={color} transparent opacity={0.15} wireframe/>
    </mesh>
  )
}

function Blob({pos,color}) {
  const ref = useRef()
  useFrame(({clock}) => { if(ref.current) ref.current.material.opacity=.07+Math.sin(clock.elapsedTime*.8)*.03 })
  return <mesh ref={ref} position={pos}><sphereGeometry args={[2,24,24]}/><meshBasicMaterial color={color} transparent opacity={.07}/></mesh>
}

export default function ThreeScene() {
  return (
    <div id="three-bg">
      <Canvas camera={{position:[0,0,12],fov:55}} gl={{alpha:true,antialias:false}}>
        <Suspense fallback={null}>
          <Particles/>
          <Ring radius={5.5} tube={0.007} speed={0.06} color="#2260ff" tiltX={0.4}/>
          <Ring radius={7.5} tube={0.005} speed={0.04} color="#00e5ff" tiltX={-0.6} tiltZ={0.3}/>
          <Ring radius={9.5} tube={0.004} speed={0.025} color="#7c3aed" tiltX={0.8} tiltZ={-0.2}/>
          <Ring radius={11.5} tube={0.003} speed={0.015} color="#2260ff" tiltX={1.1}/>
          <FloatShape pos={[3.5,0,-4]} speed={0.15} color="#2260ff" geo="ico"/>
          <FloatShape pos={[-3.5,0,-3]} speed={0.18} color="#00e5ff" geo="oct"/>
          <Blob pos={[4,2,-6]} color="#2260ff"/>
          <Blob pos={[-4,-1,-5]} color="#00e5ff"/>
        </Suspense>
      </Canvas>
    </div>
  )
}
