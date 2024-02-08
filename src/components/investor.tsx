import React from 'react'

const images = [
    "/investors.png",
    "/investors.png",
    "/investors.png",
    "/investors.png",
    "/investors.png",
    "/investors.png",
    "/investors.png",
    "/investors.png",
]

function Investor() {
  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="text-xl font-bold mb-4">Investors</h1>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              className="w-full h-auto transform scale-100 group-hover:scale-110 transition-transform duration-300"
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Investor
