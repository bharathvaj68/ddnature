const products = [
  { name: "Peperomia Ginny", price: "$25" },
  { name: "Bird’s Nest Fern", price: "$45" },
  { name: "Majesty Palm", price: "$52" },
];

const Featured = () => {
  return (
    <section className="px-10 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Featured</h2>
        <a href="#" className="text-sm text-teal-600">View all</a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl p-4 text-center">
            <div className="bg-gray-300 h-44 rounded-xl mb-4"></div>
            <h4 className="text-sm font-medium">{p.name}</h4>
            <p className="text-sm text-teal-700 mb-3">{p.price}</p>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm">
              Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
