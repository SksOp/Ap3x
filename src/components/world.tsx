import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model({ url }: {url : string}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();    
//   const handleMouseWheel = (event) => {
//     // Update rotation of the model based on mouse scroll
//     const rotationSpeed = 0.001; // Adjust rotation speed as needed
//     modelRef.current.rotation.y += event.deltaY * rotationSpeed;
//   };
  return (
      <primitive object={scene} />
  );
 }
export default function World() {
     // Update this path to your model's location
//   const modelScale = [10, 10, 10];
  const modelPosition = [0, 0, 0];

  return (
    <div style={{backgroundColor: "white", height: '90vh', width: '100%', overflow: 'hidden' }}>
      {/* Set overflow to 'hidden' to prevent scrolling */}
      <Canvas camera={{ position: [0, 0, 10], fov: 15 }}>
        {/* Set camera position and field of view */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <directionalLight position={[-5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <group position={[.1,-1.1,0]}>
        <Model url={"globe.glb"}/>
        {/* <Model url={"globe.glb"} position={modelPosition}/> */}
        </group>
        <OrbitControls enableZoom={false} rotateSpeed={0}/>
        {/* Use OrbitControls for user interaction */}
      </Canvas>
    </div>
  );
}
