import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/footer/Footer";
import Tours from "./components/tour/Tours";
import { useRef } from "react";

const App = () => {
    const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const toursRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = [heroRef, aboutRef, toursRef, footerRef];
  const sectionNames = ["Hero", "About", "Tours", "Footer"];

  const scrollToSection = (index) => {
    sectionRefs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} sectionNames={sectionNames} />

      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={toursRef}><Tours /></div>
      <div ref={footerRef}><Footer scrollToSection={scrollToSection} sectionNames={sectionNames} /></div>
    </>
  );
};

export default App;
