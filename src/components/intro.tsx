import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF ,  PerspectiveCamera } from '@react-three/drei';
import { Button } from "./ui/button";
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

function Intro() {
  return (
    // <div className="bg-[url('../public/parallax.png')] w-full h-[90vh] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="relative w-full  flex flex-col items-center justify-center h-[110vh] text-white">
        <h1 className="relative z-[1] text-6xl md:text-8xl xl:text-[12rem] text-center font-bold">
          AP3X CAPITAL
        </h1>
        <Button variant="secondary" size="default" className="relative z-[1] mt-4">
          Get Started
        </Button>
        <Mountain className="absolute z-0 top-0 bg-[#E3E8EF]" />
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
function Mountain({className}:{  className?:ClassValue}) {
     // Update this path to your model's location
//   const modelScale = [10, 10, 10];
  const modelPosition = [0, 0, 0];

  return (
    // <div style={{backgroundColor: "white", height: '90vh', width: '100%', overflow: 'hidden' }}>
    <div className={cn("bg-white h-full w-full overflow-hidden ",className)}>
      {/* Set overflow to 'hidden' to prevent scrolling */}
      <Canvas>
        {/* Set camera position and field of view */}
        <PerspectiveCamera makeDefault position={[25, 0,350]} fov={40} near={0.1} far={2000} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <directionalLight position={[-5, 0, 5]} color={"#E3E8EF"} intensity={2} />
        <group rotation={[4.86,4.7,4.75]} >
        <Model url={"mountain.glb"}/>
        {/* <Model url={"globe.glb"} position={modelPosition}/> */}
        </group>
        <OrbitControls enableZoom={false}/>
        {/* Use OrbitControls for user interaction */}
      </Canvas>
    </div>
  );
}
