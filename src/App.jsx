import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
 
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Tools />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
