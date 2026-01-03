import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import InfoStrip from "./components/InfoStrip";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <InfoStrip />
      <About />
      <Testimonials />
      <Map />
      <Footer />
    </>
  );
}
export default App;
