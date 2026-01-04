const Testimonials = () => {
  return (
    <section className="mx-auto max-w-9/10 px-5 py-10 font-gilroy sm:px-10 sm:py-16">
      <h2 className="text-2xl font-semibold text-center mb-8 text-green-900">
        Our Client Reviews
      </h2>

      <div className="text-center grid md:grid-cols-3 gap-6">
        {[
          "Amazing quality and fast delivery!",
          "Plants arrived healthy and beautiful.",
          "My house feels alive now.",
        ].map((text, i) => (
          <div key={i} className="bg-gray-50 p-3 sm:p-6 rounded-2xl">
            <p className="text-sm mb-3">“{text}”</p>
            <strong className="text-sm text-teal-600">Happy Client</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
