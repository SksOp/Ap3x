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
      <a href="/#home">
        <img
          src="./assets/logo.png"
          alt="Logo"
          className="w-full h-auto"
          draggable={false}
        />
      </a>
    </div>
  );
}

export default Logo;
