import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Button } from "./ui/button";
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

function Intro() {
  return (
    // <div className="bg-[url('../public/parallax.png')] w-full h-[90vh] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="relative flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-6xl md:text-8xl xl:text-[12rem] text-center font-bold">
          AP3X CAPITAL
        </h1>
        <Button variant="secondary" size="default" className="mt-4">
          Get Started
        </Button>
        <World/>
      </div>
    // </div>
  );
}

export default Intro;




function Model({ url }: {url : string}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();    
//   const handleMouseWheel = (event) => {
//     // Update rotation of the model based on mouse scroll
//     const rotationSpeed = 0.001; // Adjust rotation speed as needed
//     modelRef.current.rotation.y += event.deltaY * rotationSpeed;
//   };
  return (
      <primitive  object={scene} />
  );
 }
function World({className}:{  className?:ClassValue}) {
     // Update this path to your model's location
//   const modelScale = [10, 10, 10];
  const modelPosition = [0, 0, 0];

  return (
    // <div style={{backgroundColor: "white", height: '90vh', width: '100%', overflow: 'hidden' }}>
    <div className={cn("bg-white h-screen w-full overflow-hidden ",className)}>
      {/* Set overflow to 'hidden' to prevent scrolling */}
      <Canvas camera={{ position: [400, 0, 500], fov: 15 }}>
        {/* Set camera position and field of view */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <directionalLight position={[-5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <group rotation={[10,0,0]} position={[.1,-1.1,0]}>
        <Model url={"mountain.glb"}/>
        {/* <Model url={"globe.glb"} position={modelPosition}/> */}
        </group>
        <OrbitControls enableZoom={false} rotateSpeed={0}/>
        {/* Use OrbitControls for user interaction */}
      </Canvas>
    </div>
  );
}
