import React from "react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
