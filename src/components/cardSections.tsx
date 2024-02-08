import React from 'react'
import { Button } from './ui/button';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card/4 text-card-foreground border-border p-4">
        {children}
    </div>
  )
}

function CardSections() {

  return (
  <div className='justify-center items-center'>
      <Card>
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl md:text-2xl font-bold">LOREM IPSUM RESEARCH PAPER NAME</h2>
          <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
          <p className="text-sm text-gray-500 font-bold">27th Jan</p>
          <Button variant="default" size="default" className="w-[20%] md:w-[10%]">Read Article</Button>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[...Array(4)].map((_, index) => (
          <Card key={index}>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">LOREM IPSUM RESEARCH PAPER NAME</h2>
              <p className="text-sm">Paragraph </p>
              <p className="text-sm text-gray-500 font-bold">Date {index + 1}</p>
              <Button variant="default" size="default" className="w-[40%] md:w-[20%]">Read Article</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardSections;
