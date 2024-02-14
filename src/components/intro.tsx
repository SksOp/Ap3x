import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Button } from "./ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  return (
    <div className="relative w-full  flex flex-col items-center justify-center h-[110vh] text-white">
      <h1 className="relative z-[1] text-6xl md:text-8xl xl:text-[12rem] text-center font-bold">
        AP3X CAPITAL
      </h1>
      <Button
        variant="secondary"
        size="default"
        className="relative z-[1] mt-4"
      >
        Get Started
      </Button>
      <Mountain className="absolute z-0 top-0 bg-[#E3E8EF]" />
    </div>
    // </div>
  );
}

export default Intro;

function Mountain({ className }: { className?: ClassValue }) {
  const modelPosition = [0, 0, 0];
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={cn(
        "bg-white h-full w-full overflow-hidden mountain-container",
        className
      )}
      // pass ref of this div to the canvas
      ref={containerRef}
    >
      <Canvas>
        <Model containerRef={containerRef} url={"./mesh/mountain_2.glb"} />
      </Canvas>
    </div>
  );
}

function Model({
  url,
  containerRef,
}: {
  url: string;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  const { camera } = useThree();

  useGSAP(
    () => {
      console.log(containerRef.current);
      if (!containerRef.current) return;
      gsap.to(camera.position, {
        y: 100,
        z: 2.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
          // markers: true,
          // immediateRender: false,
        },
      });
    },
    { scope: containerRef, dependencies: [containerRef.current] }
  );

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 100]}
        fov={40}
        near={0.1}
        far={2000}
      />
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 0, 5]} color={"#E3E8EF"} intensity={2} />
      <directionalLight position={[-5, 0, 5]} color={"#E3E8EF"} intensity={2} />
      <group>
        <primitive object={scene} />
      </group>
    </>
  );
}
