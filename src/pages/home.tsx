import About from "@/components/about";
import Banner from "@/components/banner";
import CardSections from "@/components/cardSections";
import CaseStudies from "@/components/caseStudies";
import Category from "@/components/category";
import Intro from "@/components/intro";
import Investor from "@/components/investor";
import Layout from "@/components/layout";
import SearchBar from "@/components/searchBar";
import React from "react";

function page() {

  return (
    <>
    <Layout>
      <Intro />
      <Investor />
      <SearchBar />
      <CardSections />
      <CaseStudies />
      <Banner text="Investments"/>
      <Category headingText="Example" text="Absolute"/>
      <About imageUrl="./about.png " name="Kevin Poh" role="Founding Parner" text="Managed over $500M at Binance Labs with the team since 2022 Took over the Binance Labs portfolio in 2023 and grew it from $7B to $11B. Advisor to Binance Labs portfolio companies and Binance Launchpool projects. Portfolio Manager for all 270+ projects e.g. Certik, Injective, Celestia, Radiant"/>
    </Layout>
    </>
  );
}

export default page;
