import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Cloth from './Cloth';
import Background from './Background';
import CameraSetting from './CameraSetting';

const CanvasModeling = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraSetting>
        <Background />
        <Center>
          <Cloth />
        </Center>
      </CameraSetting>
    </Canvas>
  )
}

export default CanvasModeling