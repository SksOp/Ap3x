import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const cardItems = [
  {
    title: "LOREM IPSUM RESEARCH PAPER NAME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
    date: "27th Jan",
  },
  {
    title: "LOREM IPSUM RESEARCH PAPER NAME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
    date: "27th Jan",
  },
  {
    title: "LOREM IPSUM RESEARCH PAPER NAME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
    date: "27th Jan",
  },
  {
    title: "LOREM IPSUM RESEARCH PAPER NAME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
    date: "27th Jan",
  },
  {
    title: "LOREM IPSUM RESEARCH PAPER NAME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
    date: "27th Jan",
  },
];

function CaseStudies() {

    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement[]>([]); 
    
    gsap.to(sectionsRef.current, {
      xPercent: -100 * (cardItems.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        snap: 1 / (cardItems.length - 1),
        end: () => "+=" + containerRef.current?.offsetWidth,
      },
    })
    // https://codesandbox.io/p/sandbox/gsap-react-horizontal-scroll-mr4gb1?file=%2Fsrc%2Fscenes%2FScene.jsx
    
    

  return (
    <div className="my-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Centered Heading</h1>
        <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto" ref={containerRef}>
        <div className="flex overflow-hidden" >
        {cardItems.map((item, index) => (
          <div key={index} className="w-screen h-[]" ref={(el) => (sectionsRef.current[index] = el as HTMLDivElement)}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: {item.date}</p>
              </CardContent>
            </Card>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
