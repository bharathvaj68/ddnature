const Materials = () => {
  return (
    <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="text-xs tracking-widest text-orange-500">
          MATERIALS
        </span>
        <h3 className="text-2xl font-semibold my-4">
          Very Serious Materials For Making Furniture
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Because panto was very serious about designing furniture
          for our environment.
        </p>
        <a href="#" className="text-sm text-teal-600">
          More info →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 rounded-2xl h-72 row-span-2"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
      </div>
    </section>
  );
};

export default Materials;
