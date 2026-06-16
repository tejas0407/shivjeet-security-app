import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ContactForm />
    </>
  );
}