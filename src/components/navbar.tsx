import { Button } from "./ui/button";
import { LogoHolderBox } from "./svgs/logo-holder";
import { HamburgerIcon } from "./svgs/icons";
import { useState } from "react";
import Menu, { Hamburger } from "./menu";
import Logo from "./logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-screen p-0 m-0 top-0 z-10 flex justify-center items-center">
        <LogoHolderBox className="absolute -top-8" />
        <Logo className="p-3" />
        {/* <Hamburger setIsMenuOpen={setIsMenuOpen} /> */}
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default Navbar;
