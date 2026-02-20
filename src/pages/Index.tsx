import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import TestFlight from "@/components/TestFlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Solution />
      <Services />
      <HowWeWork />
      <TestFlight />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
