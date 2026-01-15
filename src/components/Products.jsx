import { useState } from "react";
import ProductCard from "./ProductCard";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";

const products = [
  { id: 1, img: img1, name: "Peperomia Ginny", price: "$25" },
  { id: 2, img: img2, name: "Birds Nest Fern", price: "$45" },
  { id: 3, img: img3, name: "Majesty Palm", price: "$52" },
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to Cart:", product);
  };

  return (
    <section id="products" className="mx-auto w-9/10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Products</h2>
        <a
          href="/checkout"
          className="text-sm text-teal-600 underline hover:text-teal-800"
        >
          Go to Checkout ({cart.length})
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
