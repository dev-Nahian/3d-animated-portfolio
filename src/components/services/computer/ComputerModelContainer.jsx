import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage
          environment={null}
          intensity={0.5}
          adjustCamera={1.5} 
        >
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 0.5]} zoom={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
