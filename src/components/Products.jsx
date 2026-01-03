import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"

const products = [
  { img: img1 , name: "Peperomia Ginny", price: "$25" },
  { img: img2, name: "Birds Nest Fern", price: "$45" },
  { img: img3, name: "Majesty Palm", price: "$52" },
];

const Products = () => {
  return (
    <section id="products" className="mx-auto w-9/10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Products</h2>
        <a href="#" className="text-sm text-teal-600">View all</a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl p-4 text-center">
            <img className="bg-gray-300 w-10/10 h-60 rounded-xl mb-4 object-fill" src={p.img} alt={p.name}/>
            <h4 className="text-sm font-medium">{p.name}</h4>
            <p className="text-sm text-teal-700 mb-3">{p.price}</p>
            <button className="bg-green-900 text-white px-5 py-2 rounded-full text-sm">
              Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
