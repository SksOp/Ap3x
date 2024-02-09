import React from "react";
import { Button } from "./ui/button";

function Intro() {
  return (
    <div className="bg-[url('../public/parallax.png')] w-full h-[90vh] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="relative flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-6xl md:text-8xl xl:text-[12rem] text-center font-bold">
          AP3X CAPITAL
        </h1>
        <Button variant="secondary" size="default" className="mt-4">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Intro;
