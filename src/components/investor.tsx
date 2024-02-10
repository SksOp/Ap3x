import React from "react";
import { Slant } from "./svgs/slant";

const images = [
  "/investors.png",
  "/investors.png",
  "/investors.png",
  "/investors.png",
  "/investors.png",
  "/investors.png",
  "/investors.png",
  "/investors.png",
];

function Investor() {
  return (
    <div className="flex flex-col items-center  py-20 relative">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <h1 className="text-xl font-bold mb-4">Investors</h1>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              draggable={false}
              className="w-full h-auto transform scale-100 group-hover:scale-110 transition-transform duration-300"
              src={image}
              alt={` ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Investor;
