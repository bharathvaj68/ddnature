// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import img1 from "../assets/images/1.png";
// import img2 from "../assets/images/2.png";
// import img3 from "../assets/images/3.png";
// import back from "../assets/back.svg";
// import cart from "../assets/shopping-cart.svg";
// import user from "../assets/user.svg";

// const productData = [
//   { id: 1, img: img1, name: "Peperomia Ginny", price: 25, desc: "A vibrant plant with pink and green leaves." },
//   { id: 2, img: img2, name: "Birds Nest Fern", price: 45, desc: "Curled leaves that thrive in shade and humidity." },
//   { id: 3, img: img3, name: "Majesty Palm", price: 52, desc: "A tall, tropical palm ideal for bright rooms." },
// ];

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const product = productData.find((p) => p.id === Number(id));

//   const sizes = ["250mL", "500mL", "1L"];
//   const [selectedSize, setSelectedSize] = useState("250mL");

//   const handleAdd = () => {
//     addToCart({ ...product, selectedSize });
//     navigate("/checkout");
//   };

//   return (
//     // <section className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
//     //   <img src={product.img} alt={product.name} className="w-full rounded-md" />

//     //   <div>
//     //     <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
//     //     <p className="text-lg text-green-800 mb-4">${product.price}</p>
//     //     <p className="text-gray-600 mb-6">{product.desc}</p>

//     //     <p className="text-gray-500 text-sm mt-2">Available sizes</p>
//     //     <div className="flex gap-2 mt-1 mb-6">
//     //       {sizes.map((size) => (
//     //         <button
//     //           key={size}
//     //           onClick={() => setSelectedSize(size)}
//     //           className={`px-3 py-1 text-sm rounded-md border transition ${
//     //             selectedSize === size
//     //               ? "bg-green-900 text-white border-green-900"
//     //               : "border-gray-300 text-gray-700 hover:bg-green-50"
//     //           }`}
//     //         >
//     //           {size}
//     //         </button>
//     //       ))}
//     //     </div>

//     //     <button
//     //       onClick={handleAdd}
//     //       className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 w-full"
//     //     >
//     //       Add to Cart
//     //     </button>
//     //   </div>
//     // </section>

//     <section className="max-w-9/10 mx-auto mt-5">
//     <div className="sticky top-0 flex flex-row justify-between">
//       <img src={back}></img>
//       <div className="flex flex-row gap-2">
//       <p className="py-2 px-5 text-white  bg-green-900">Cart</p>
//       <img src={cart} className="bg-green-900 p-3 "></img>
//       <img src={user} className="bg-green-900 p-3 "></img>
//       </div>
//     </div>
//     </section>
//   );
// }
