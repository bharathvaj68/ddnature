const Testimonials = () => {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Our Client Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Amazing quality and fast delivery!",
          "Plants arrived healthy and beautiful.",
          "My house feels alive now.",
        ].map((text, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm mb-3">“{text}”</p>
            <strong className="text-sm text-teal-600">Happy Client</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
