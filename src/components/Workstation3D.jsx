import { useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
const ACC = '#7CFF6B', BODY = '#1b2025', SCR = '#0c0f12'
const codeLines = [[.9, 0], [.6, .1], [1.2, .1], [.7, .2], [.4, .2], [1.0, .1], [.5, 0], [.8, 0]]
const Mat = ({ c = BODY }) => <meshStandardMaterial color={c} metalness={.5} roughness={.4} />
function Keys() {
  const r = useRef()
  useLayoutEffect(() => { const m = new THREE.Object3D(); let i = 0
    for (let y = 0; y < 4; y++) for (let x = 0; x < 13; x++) { m.position.set(-1 + x * .165, .04, -.2 + y * .13); m.updateMatrix(); r.current.setMatrixAt(i++, m.matrix) }
    r.current.instanceMatrix.needsUpdate = true }, [])
  return <instancedMesh ref={r} args={[null, null, 52]}><boxGeometry args={[.13, .04, .1]} /><meshStandardMaterial color="#2a3036" roughness={.6} /></instancedMesh>
}
function Rig() {
  const g = useRef(), s = useRef()
  useFrame(({ pointer, clock }) => {
    const t = clock.elapsedTime
    g.current.rotation.y += (-.4 + pointer.x * .12 - g.current.rotation.y) * .05
    g.current.rotation.x += (.08 - pointer.y * .06 - g.current.rotation.x) * .05
    g.current.position.y = Math.sin(t * .6) * .04 - .2
    s.current.rotation.y = t * .25; s.current.position.y = 1.9 + Math.sin(t * .8) * .06
  })
  return (<group ref={g}>
    <mesh position={[0, 1, 0]}><boxGeometry args={[2.5, 1.55, .07]} /><Mat /></mesh>
    <mesh position={[0, 1, .04]}><planeGeometry args={[2.34, 1.39]} /><meshBasicMaterial color={SCR} /></mesh>
    {codeLines.map(([w, x], i) => <mesh key={i} position={[-1 + w / 2 + x, 1.5 - i * .17, .045]}><planeGeometry args={[w, .045]} /><meshBasicMaterial color={i % 3 === 0 ? ACC : '#4a535b'} /></mesh>)}
    <mesh position={[0, .1, -.1]}><cylinderGeometry args={[.08, .1, .3, 12]} /><Mat /></mesh>
    <mesh position={[0, -.05, .4]}><boxGeometry args={[2.3, .06, .85]} /><Mat /></mesh>
    <group position={[0, -.02, .4]}><Keys /></group>
    <group position={[1.95, .55, .7]} rotation={[0, -.35, 0]}>
      <mesh><boxGeometry args={[1.1, .7, .04]} /><Mat /></mesh>
      <mesh position={[0, 0, .025]}><planeGeometry args={[1, .6]} /><meshBasicMaterial color={SCR} /></mesh>
      {[0, 1, 2].map(i => <mesh key={i} position={[-.2 + (i === 1 ? .1 : 0), .17 - i * .15, .03]}><planeGeometry args={[.5 + i * .1, .035]} /><meshBasicMaterial color={i === 2 ? ACC : '#59626a'} /></mesh>)}
    </group>
    <group ref={s} position={[-1.8, 1.9, .3]}>
      {[0, 1.1].map(r => <mesh key={r} rotation={[r, 0, 0]}><torusGeometry args={[.16, .018, 8, 32]} /><meshStandardMaterial color={ACC} emissive={ACC} emissiveIntensity={.3} /></mesh>)}
    </group>
    <mesh position={[-1.75, .6, .6]} rotation={[.4, 0, 0]}><cylinderGeometry args={[.17, .17, .07, 6]} /><Mat c="#39414a" /></mesh>
    <mesh position={[-1.5, .15, .9]}><cylinderGeometry args={[.12, .12, .2, 20]} /><Mat c="#39414a" /></mesh>
  </group>)
}
export default function Workstation3D() {
  return (<Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 6.5], fov: 38 }} gl={{ antialias: true, powerPreference: 'low-power' }}>
    <ambientLight intensity={.55} /><directionalLight position={[3, 5, 4]} intensity={1.1} />
    <pointLight position={[0, 1, 2]} intensity={6} color={ACC} distance={5} decay={2} />
    <Rig /></Canvas>)
}
