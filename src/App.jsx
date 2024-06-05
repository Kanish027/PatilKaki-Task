import React from "react";
import Header from "./components/Header";
import "./App.css";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyProblems from "./components/KeyProblems";
import ProblemSection from "./components/ProblemSection";

const App = () => {
  return (
    <div>
      <div className="bg-transparent absolute w-full">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <KeyProblems />
      </div>
      <div className="">
        <ProblemSection />
      </div>
      <div className="bg-black">
        <CTA />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
