import Navbar from "./components/Navbar";
import GsapInit from "./components/GsapInit";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <GsapInit />
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="certificates" className="d-none"><Certificates /></section>
        <section id="contact" className="d-none"><Contact /></section>
        <div className="d-none">
        <Footer />
        </div>
        
      </main>
    </>
  );
}
