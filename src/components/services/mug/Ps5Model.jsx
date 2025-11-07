
import { useGLTF } from '@react-three/drei'

export function Ps5Model(props) {
  const { nodes, materials } = useGLTF('/ps5Model.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 0, -27.775]} rotation={[0, -0.23, 0]}>
          <mesh geometry={nodes.PlayStation5_w_0.geometry} material={materials.material} />
          <mesh geometry={nodes.PlayStation5_b_0.geometry} material={materials.material_1} />
          <mesh geometry={nodes.PlayStation5_Light_0.geometry} material={materials.Light} />
        </group>
        <group position={[0, 0, 34.97]} rotation={[0, 0.702, 0]}>
          <mesh geometry={nodes['Body1_Paper_(White)_0'].geometry} material={materials.Paper_White} />
          <mesh geometry={nodes.Body3_w_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body4_w_0.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ps5Model.glb')
