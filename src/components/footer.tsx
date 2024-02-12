import React from "react";
import { Icon } from "@iconify/react";
import Container from "./ui/container";

function Footer() {
  return (
    <footer className="p-10 bg-white">
      <Container className="justify-center bg-white items-center p-8 md:p-16 lg:p-2">
        <div className="relative my-10">
          <img src="./assets/logo.png" alt="Logo" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center">
          <div className="justify-center items-center mb-8 md:mb-0 md:w-2/4">
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="max-w-sm">
              We help our clients succeed in their crypto mining operations by
              finding unique purchase opportunities, providing expert industry
              insight, and offering an elevated customer experience.
            </p>
          </div>
          <div className="mb-8 md:mb-0 md:w-1/4">
          <a href=""><h3 className="text-lg font-semibold mb-2">Hardware</h3></a>
          <a href=""><h3 className="text-lg font-semibold mb-2">Solutions</h3></a>
          <a href=""><h3 className="text-lg font-semibold mb-2">Our Story</h3></a>
          </div>
          <div className="mb-8 md:mb-0 md:w-1/4">
          <a href=""><h3 className="text-lg font-semibold mb-2">Knowledge Block</h3></a>
          <a href=""><h3 className="text-lg font-semibold mb-2">Client Support</h3></a>
          <a href=""><h3 className="text-lg font-semibold mb-2">Contact</h3></a>
          </div>
          <div className="md:mb-0 md:w-1/5">
          <a href=""><h3 className="text-lg font-semibold mb-2">hello@46615</h3></a>
            <div className="flex pl-4">
              <a href="">
              <Icon icon="mingcute:telegram-fill" className="text-black mr-2" />
              </a>
              <a href="">
              <Icon icon="entypo-social:twitter" className="text-black mr-2" />
              </a>
              <a href="">
              <Icon icon="entypo-social:linkedin" className="text-black mr-2" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
