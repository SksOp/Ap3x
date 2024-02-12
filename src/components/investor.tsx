import React from "react";
import { Slant } from "./svgs/slant";

export interface Investor {
  id: number;
  logoLink: string;
  href?: string;
}

interface InvestorsProps {
  investors: Investor[];
}

const Investor: React.FC<InvestorsProps> = ({investors}) => {
  return (
    <div className="flex flex-col items-center py-4 relative bg-white">
      <Slant className="absolute top-0 w-full translate-y-[-49%] " />
      <h1 className="text-xl font-bold mb-4">Investors</h1>
      <div className="grid grid-cols-4 gap-4">
        {investors.map((investor, index) => (
          <div key={investor.id + index} className="relative overflow-hidden group">
            <a href={investor.href ? investor.href:"#"}>
            <img
              draggable={false}
              className="w-full h-auto transform scale-100 group-hover:scale-110 transition-transform duration-300"
              src={investor.logoLink}
              alt={`${index}`}
            />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Investor;
