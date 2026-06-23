import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import InfoStrip from "./components/InfoStrip";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Footer from "./components/Footer";
// import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
