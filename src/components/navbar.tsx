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
      <nav className="fixed w-screen p-0 m-0 top-0 z-10 flex justify-center items-center">
        <LogoHolderBox
          fillOpacity={isHome ? "0.31" : "1"}
          className="absolute -top-8"
        />
        <Logo className="relative z-10 p-3" />
        {/* <Hamburger setIsMenuOpen={setIsMenuOpen} /> */}
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default Navbar;
