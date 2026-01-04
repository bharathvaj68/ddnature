import { useState } from "react";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";

const products = [
  { img: img1, name: "Peperomia Ginny", price: "$25" },
  { img: img2, name: "Birds Nest Fern", price: "$45" },
  { img: img3, name: "Majesty Palm", price: "$52" },
];

const Products = () => {
  const sizes = ["250mL", "500mL", "1L"];

  // 🔹 Maintain individual selected size for each product
  const [selectedSizes, setSelectedSizes] = useState(
    products.map(() => "250ml") // default for each
  );

  const handleSizeSelect = (index, size) => {
    const updatedSizes = [...selectedSizes];
    updatedSizes[index] = size;
    setSelectedSizes(updatedSizes);
  };

  return (
    <section id="products" className="mx-auto w-9/10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Products</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 font-steppe">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-100 p-4">
            <img
              className="bg-gray-300 w-full h-60 mb-4 object-fill"
              src={p.img}
              alt={p.name}
            />

            <div className="grid grid-cols-2 mb-2 text-base">
              <h4 className="text-green-900 font-medium ">
                {p.name}
              </h4>
              <p className="text-teal-700 text-right ">
                {p.price}
              </p>
            </div>

            <div className="grid grid-cols-2 items-end">
              <div>
                <p className="text-gray-500 text-sm mt-2">Available sizes</p>
                <div className="flex gap-2 mt-1">
                  {sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSizeSelect(i, size)}
                      className={`px-2 py-1 pt-2 text-xs  border transition ${
                        selectedSizes[i] === size
                          ? "bg-green-900 text-white border-green-900"
                          : "border-gray-300 text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <a href="#" className="cursor-pointer ml-auto mr-0 ">
              <button className="bg-green-900 text-white px-7 py-2 pt-3 text-sm">
                Buy
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
