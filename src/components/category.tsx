import React from "react";
import { Button } from "./ui/button";

interface Props {
  headingText: string;
  text: string;
  imgUrl?: string;
  btnUrl?: string;
}

const Category: React.FC<Props> = ({ headingText, text, imgUrl, btnUrl }) => {
  return (
    <div className="container mx-auto my-auto bg-black">
      <div className="flex items-center">
        <h2 className="text-xl font-bold text-secondary-foreground">
          {headingText}
        </h2>
        <div className="h-0.5 bg-secondary-foreground flex-grow ml-4"></div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {[...Array(6)].map((_, index) => (
          <div className="flex flex-col items-center mb-4 w-1/4" key={index}>
            <div className="w-16 h-16 rounded-full bg-white">
              {imgUrl ? (
                <img
                  src={imgUrl}
                  alt="Category"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-xl text-bold text-secondary-foreground flex justify-center items-center mt-4">
                  {text.charAt(0)}
                </span>
              )}
            </div>
            <p className="text-secondary-foreground">{text}</p>
            <Button className="w-8 h-4">View</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
