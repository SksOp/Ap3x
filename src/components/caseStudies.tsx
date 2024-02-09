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
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

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
  const sectionsRef = useRef<HTMLDivElement>(null);

  
  

  return (
    <div className="my-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Centered Heading</h1>
        <div
          className="bg-white shadow-md rounded-lg p-6 overflow-x-auto"
          ref={containerRef}
        >
          <div
            ref={sectionsRef}
            className={cn(
              `w-[${cardItems.length * 100}%]`,
              "h-screen max-h-screen flex flex-nowrap hide-scrollbar"
            )}
            >
            <Card className="w-screen bg-blue-100 " ref={sectionsRef}>
              <CardHeader>
                <CardTitle>{cardItems[0].title}</CardTitle>
                <CardDescription>{cardItems[0].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: {cardItems[0].date}</p>
              </CardContent>
            </Card>
            <Card className="w-screen bg-blue-100 " ref={sectionsRef}>
              <CardHeader>
                <CardTitle>{cardItems[0].title}</CardTitle>
                <CardDescription>{cardItems[0].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: {cardItems[0].date}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
