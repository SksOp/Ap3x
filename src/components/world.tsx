import React, { useRef } from "react";
import {
  Canvas,
  GroupProps,
  ThreeElements,
  useThree,
} from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function World() {
  const modelPosition = [0, 0, 0];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className=" world-container bg-background h-[90vh] w-full overflow-hidden"
    >
      {" "}
      <Canvas className={cn()} camera={{ position: [0, 0, 10], fov: 15 }}>
        <Model className="absolute" url={"globe.glb"} />
      </Canvas>
    </div>
  );
}

const Model = React.forwardRef(
  ({ url, className }: { url: string; className?: ClassValue }, ref) => {
    const { scene } = useGLTF(url);

    const { camera } = useThree();

    useGSAP(
      () => {
        gsap.to(camera.position, {
          x: 5,
          y: 4.0,
          z: 2.8,
          scrollTrigger: {
            trigger: ".world-container",
            start: "top center",
            end: "bottom top",
            scrub: true,
            markers: true,
            // immediateRender: false,
          },
        });
      },
      { scope: ".world-container" }
    );
    return (
      <>
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[5, 0, 5]}
          color={"#E3E8EF"}
          intensity={2}
        />
        <directionalLight
          position={[-5, 0, 5]}
          color={"#E3E8EF"}
          intensity={2}
        />
        <group position={[0.1, -1.1, 0]}>
          <primitive object={scene} />
        </group>

        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
      </>
    );
  }
);
