import React from "react";

const Banner = ({ text }: { text: string }) => {
  return (
    <div className="relative mb-12 md:mb-32  my-32 mt-40 ">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 md:h-40 flex justify-center items-center">
        <img
          src="./banner.png"
          alt="barcode"
          className=" w-auto h-full object-cover"
        />{" "}
        <img
          src="./banner.png"
          alt="barcode"
          className=" w-auto h-full object-cover"
        />
      </div>
      <p className="relative z-10 text-background text-center text-4xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold uppercase">
        {text}
      </p>
    </div>
  );
};

export default Banner;

// const Banner = ({text}:{ text:string }) => {
//   return (
//     <div className="relative mb-4">
//     <div className="bg-gray-300 w-full h-40 flex justify-center items-center">
//       <img src="./barcode.svg" alt="barcode" className="absolute inset-0 object-cover w-full h-full" />
//     </div>
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl md:text-10xl font-bold uppercase">
//         {text}
//     </div>
//   </div>
//   );
// };

// export default Banner;
