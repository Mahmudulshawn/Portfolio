import Bio from "@/components/Bio";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className='h-full overflow-y-auto'>
        <Navbar/>
      <div className='flex flex-col items-center p-4 space-y-8 container mx-auto max-md:mt-32'>
        <Hero/>
        <Projects/>
        <Bio/>
        <Skills/>
        <Experience/>
        <Education/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
}
