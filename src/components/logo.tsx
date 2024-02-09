import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

function Logo({
  className,
  logoClassName,
}: {
  className?: ClassValue;
  logoClassName?: ClassValue;
}) {
  return (
    <div className={cn("w-40 ", className)}>
      <img
        src="logo.png"
        alt="Logo"
        className="w-full h-auto"
        draggable={false}
      />
    </div>
  );
}

export default Logo;
