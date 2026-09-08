import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Cuisine from "./components/sections/Cuisine";
import Events from "./components/sections/Events";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Cuisine />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
