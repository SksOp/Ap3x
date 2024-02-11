import { LogoHolderBox } from "./svgs/logo-holder";
import { useState } from "react";
import Menu from "./menu";
import Logo from "./logo";
import { useActiveLink } from "@/hooks/useRouter";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = useActiveLink("/", false);
  return (
    <>
      <nav className="fixed w-screen p-0 m-0 top-0 z-20 flex justify-center items-center">
        <LogoHolderBox
          fillOpacity={isHome ? "0.31" : "1"}
          className="absolute z-20  -top-8"
        />
        <Logo className="relative z-20 p-3" />
        {/* <Hamburger setIsMenuOpen={setIsMenuOpen} /> */}
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default Navbar;
