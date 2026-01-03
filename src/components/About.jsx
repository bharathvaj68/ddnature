const About = () => {
  return (
    <div id="about">
    <h2 className="mx-auto sm:w-5/10 md:w-6/10 lg:w-5/10 xl:w-3/10 px-10 py-10 sm:py-20 text-center text-3xl font-semibold ">
        Get To Know Who We Are And What We Do
      </h2>
    <section className="mx-auto max-w-9/10 px-5 sm:px-10 pt-5 pb-10 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl font-semibold my-4 text-green-900">
          Learn About Us
          </h2>
        <p className="text-sm text-gray-500 mb-3">
          In 2016, we two sisters from a farming family began our journey,
         inspired by a passion for natural living and healthy food. Growing 
         up surrounded by tradition, we understood the value of wholesome meals
        and had long relied on “Mara Chekku” wood-pressed oils for our family’s 
        health and taste. What started as a personal practice soon evolved into 
        a venture to bring pure, nutrient-rich oils to every home. Over the years,
         we have built a legacy of quality and authenticity, crafting oils that are
          nourishing, flavorful, and true to tradition, while supporting healthier food choices for everyone.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 rounded-2xl h-72 row-span-2"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
      </div>
    </section>
    <section className="mx-auto max-w-9/10 px-5 sm:px-10 py-10 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold my-4 text-green-900">
           What Sets Us Apart
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          We use the traditional Mara Chekku wood-pressed method, where oil is
           extracted slowly with very low heat, helping retain its natural nutrients, 
           taste, and aroma. Instead of artificial filtration, the oil is allowed to
            settle and clarify naturally under sunlight, preserving its purity and quality. 
            This careful, traditional process makes the oil healthier, unrefined, and naturally wholesome.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 rounded-2xl h-72 row-span-2"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
        <div className="bg-gray-300 rounded-2xl h-32"></div>
      </div>
    </section>
    </div>
  );
};

export default About;
