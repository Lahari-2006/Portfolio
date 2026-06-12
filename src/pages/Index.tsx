import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkinConnect from "@/components/SkinConnect";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skinconnect">
        <SkinConnect />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
