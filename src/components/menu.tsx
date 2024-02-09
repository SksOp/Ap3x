import React from "react";
import { Button } from "./ui/button";
import { HamburgerIcon } from "./svgs/icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./logo";
import { useActiveLink } from "@/hooks/useRouter";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Brands",
    href: "/brands",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Hamburger({
  setIsMenuOpen,
  variant,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: "light" | "dark";
}) {
  return (
    <Button
      variant={"link"}
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="fixed z-[12] top-2 right-2"
    >
      <HamburgerIcon className="w-10 " variant={variant ?? "light"} />
    </Button>
  );
}

export function Menu({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}) {
  const menuRef = React.useRef<HTMLDivElement>(null);
  gsap.defaults({ duration: 0.5, ease: "power2.out" });
  useGSAP(() => {
    gsap.set([menuRef.current], { opacity: 1, x: "200%" });
  });
  useGSAP(
    () => {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          x: 0,
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 1,
          x: "200%",
        });
      }
    },
    { dependencies: [isMenuOpen] }
  );
  return (
    <>
      <Hamburger variant="dark" setIsMenuOpen={setIsMenuOpen} />

      <div
        ref={menuRef}
        className="fixed backdrop-blur-md w-[95vw] h-[95vh] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] bg-background/70 z-10 flex flex-col justify-center items-start "
      >
        {menuItems.map((item) => (
          <MenuItems key={item.name} item={item} />
        ))}
        <div className="w-full flex justify-center p-4 cursor-pointer mt-5  bg-[#E3E8EF] rounded-full ">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default Menu;

function MenuItems({ item }: { item: { name: string; href: string } }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const bgRef = React.useRef<HTMLDivElement>(null);
  const anchorRef = React.useRef<HTMLAnchorElement>(null);

  const isActive = useActiveLink(item.href);
  gsap.defaults({ duration: 0.5, ease: "power2.out" });

  const initialiseGsap = () => {
    gsap.set(bgRef.current, {
      opacity: 0,
      x: "200%",
      backgroundColor: "#E3E8EF",
    });
  };

  useGSAP(initialiseGsap, { scope: containerRef });

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      opacity: 1,
      backgroundColor: "#fff",
      zIndex: 3,
      x: 0,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      opacity: 0,
      backgroundColor: "#E3E8EF",
      zIndex: 1,
      x: "200%",
    });
  };

  useGSAP(
    () => {
      // create a event listener for mouse over
      containerRef.current?.addEventListener("mouseover", handleMouseEnter);
      containerRef.current?.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        containerRef.current?.removeEventListener(
          "mouseover",
          handleMouseEnter
        );
        containerRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full  relative overflow-hidden ">
      <div
        ref={bgRef}
        className={cn(
          "h-full absolute w-full z-1 top-0 bg-[#E3E8EF] ",
          "mix-blend-difference  "
        )}
      />
      {isActive && (
        <div
          className={cn(
            "h-full absolute w-full z-1 top-0 bg-[#E3E8EF] ",
            !isActive && "mix-blend-difference  "
          )}
        />
      )}
      <a
        href={item.href}
        ref={anchorRef}
        className={cn(
          "relative text-2xl z-2 px-4 p-2 md:text-8xl font-bold  text-black"
        )}
      >
        {item.name}
      </a>
    </div>
  );
}
