import About from "@/components/About/About";
import Guide from "@/components/Guide/Guide";
import Hero from "@/components/Hero/Hero";
import FAQ from "@/components/FAQ/FAQ";
import Navbar from "@/components/Navbar/Navbar";
import React, { Fragment } from "react";
import ReadMore from "@/components/ReadMore/ReadMore";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Guide />
      <About />
      <FAQ />
      <ReadMore />
      <Footer />
    </Fragment>
  );
};

export default Home;
