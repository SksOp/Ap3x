import CardSections from "@/components/cardSections";
import CaseStudies from "@/components/caseStudies";
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
      <CaseStudies />
    </Layout>
    </>
  );
}

export default page;
