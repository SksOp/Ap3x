import CardSections from "@/components/cardSections";
import Intro from "@/components/intro";
import Investor from "@/components/investor";
import Layout from "@/components/layout";
import React from "react";

function page() {
  return (
    <>
    <Layout>
      <Intro />
      <Investor />
      <CardSections />
    </Layout>
    </>
  );
}

export default page;
