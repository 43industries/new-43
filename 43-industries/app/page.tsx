import MatrixRain from "@/components/MatrixRain";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Divisions from "@/components/Divisions";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <CustomCursor />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Metrics />
      <Divisions />
      <Why />
      <Contact />
      <Footer />
    </>
  );
}
