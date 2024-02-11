import React from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

interface Investment {
  id: number;
  name: string;
  logoLink?: string;
  href: string;
  category: string;
}

interface InvestmentsProps {
  investments: Investment[];
}


const InvestmentsCard: React.FC<InvestmentsProps> = ({ investments }) => {
  
  const uniqueCat = Array.from(new Set(investments.map(obj => obj['category'])));
  
  return (
    <div className="container mt-6 ">  
      {uniqueCat.map((ele) =>
      <>
        <div className="flex items-center">
             <h2 className="text-xl font-bold text-secondary-foreground">
               {ele}
             </h2>
            <div className="h-0.5 bg-secondary-foreground flex-grow ml-4"></div>
        </div>
        <div className="mt-4 flex flex-wrap"> 
          {investments.map((investment) => (
            investment.category === ele &&
            <div className="flex flex-col items-center mb-4 w-1/4" key={investment.id}>
              <div className="w-16 h-16 rounded-full bg-white">
                {investment.logoLink ? (
                  <img
                    src={investment.logoLink}
                    alt={investment.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-xl text-bold text-secondary-foreground flex justify-center items-center mt-4">
                    {investment.name.charAt(0)}
                  </span>
                )}
              </div>
              <p className="text-secondary-foreground">{investment.name}</p>
              <Button className="inline-flex items-center m-0 p-0 h-5">
                <span className="p-1">View</span>
                <Icon icon="lets-icons:size-right-up" className="text-black mr-2" />
              </Button>
            </div>
          ))}
        </div>  

      </> 
      )}
    </div>
    );
  };
  
  export default InvestmentsCard;
  
  // <div className="container mt-6 ">
  //   <div className="flex items-center">
  //     <h2 className="text-xl font-bold text-secondary-foreground">
  //       {headingText}
  //     </h2>
  //     <div className="h-0.5 bg-secondary-foreground flex-grow ml-4"></div>
  //   </div>
  //   <div className="mt-4 flex flex-wrap">
  //     {[...Array(6)].map((_, index) => (
  //       <div className="flex flex-col items-center mb-4 w-1/4" key={index}>
  //         <div className="w-16 h-16 rounded-full bg-white">
  //           {imgUrl ? (
  //             <img
  //               src={imgUrl}
  //               alt="Category"
  //               className="w-full h-full rounded-full object-cover"
  //             />
  //           ) : (
  //             <span className="text-xl text-bold text-secondary-foreground flex justify-center items-center mt-4">
  //               {text.charAt(0)}
  //             </span>
  //           )}
  //         </div>
  //         <p className="text-secondary-foreground">{text}</p>
  //         <Button className="inline-flex items-center m-0 p-0 h-5">
  //           <span className="p-1">View</span>
  //           <Icon icon="lets-icons:size-right-up" className="text-black mr-2" />
  //           </Button>
  //       </div>
  //     ))}
  //   </div>
  // </div>