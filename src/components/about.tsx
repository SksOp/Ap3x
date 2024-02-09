import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react'

interface Props {
    imageUrl: string;
    name: string;
    role: string;
    text: string;
    className?: ClassValue
  }

  const About: React.FC<Props> = ({ imageUrl, name, role, text, className }) => {
  return (
    <div className={cn("flex justify-center items-center m-4",className)}>

      <div className="w-1/4">
        <img src={imageUrl} alt="About" />
      </div>

      <div className="w-3/4 md:w-1/2 p-2">
        <h2 className="text-3xl font-bold text-secondary-foreground mb-4">{name}</h2>
        <p className="text-lg font-semibold mb-2 text-secondary-foreground">{role}</p>
        <p className="text-secondary-foreground">{text}</p>
      </div>
    </div>
  )
}

export default About
