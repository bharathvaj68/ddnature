import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import InfoStrip from "./components/InfoStrip";
import About from "./components/About";
import Materials from "./components/Materials";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Featured />
      <InfoStrip />
      <About />
      <Materials />
      <Testimonials />
      <Map />
      <Footer />
    </>
  );
}
export default App;
