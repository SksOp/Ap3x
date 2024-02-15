import React from "react";
import { Slant } from "./svgs/slant";
import { Button } from "./ui/button";

export interface Investor {
  id: number;
  logoLink: string;
  href?: string;
}

interface InvestorsProps {
  investors: Investor[];
}

const Investor: React.FC<InvestorsProps> = ({ investors }) => {
  return (
    <div className="flex flex-col gap-5 items-center py-4 relative bg-white">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <h1 className="text-xl font-bold mb-4">Investors</h1>
      <div className="grid grid-cols-4 gap-20 w-[50vw] ">
        {investors.map((investor, index) => (
          <div key={investor.id + index} className="flex justify-center">
            <a className="" href={investor.href ? investor.href : "#"}>
              <img
                draggable={false}
                className="w-16 h-auto hover:scale-125 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                src={investor.logoLink}
                alt={`${index}`}
              />
            </a>
          </div>
        ))}
      </div>
      <a className="my-5" href="/investments">
        <Button className="inline-flex items-center m-4 p-4 h-5">
          <span className="p-1">View More</span>
        </Button>
      </a>
    </div>
  );
};

export default Investor;
