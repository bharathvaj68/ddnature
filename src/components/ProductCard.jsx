import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  const sizes = ["250mL", "500mL", "1L"];
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm font-steppe">
      <img
        className="bg-gray-300 w-full h-60 mb-4 object-cover rounded-md"
        src={product.img}
        alt={product.name}
      />

      <div className="grid grid-cols-2 mb-2 text-base">
        <h4 className="text-green-900 font-medium">{product.name}</h4>
        <p className="text-teal-700 text-right">{product.price}</p>
      </div>

      <div className="grid grid-cols-2 items-end">
        <div>
          <p className="text-gray-500 text-sm mt-2">Available sizes</p>
          <div className="flex gap-2 mt-1">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border transition ${
                  selectedSize === size
                    ? "bg-green-900 text-white border-green-900"
                    : "border-gray-300 text-gray-700 hover:bg-green-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Link
              to={`/product/${product.id}`}
              className="bg-green-900 text-white px-7 py-2 text-sm ml-auto rounded-sm hover:bg-green-800 transition"
            >

          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
