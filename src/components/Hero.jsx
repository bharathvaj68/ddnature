const Hero = () => {
  return (
    <section className="bg-green-700 text-neutral-50">
      <div className="mx-auto max-w-9/10 px-6 py-15 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-[48px] leading-[56px] font-semibold mb-6">
            Happiness blooms <br /> from within
          </h1>

          <p className="text-sm text-white/80 max-w-md mb-8">
            Our environment, the world in which we live and work,
            is a mirror of our attitudes and expectations.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-white text-black px-7 py-3 rounded-full text-sm font-medium">
              Shop now
            </button>
            <a href="#" className="text-sm font-medium">
              Explore plants →
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl h-[180px]" />
          <div className="bg-white rounded-2xl h-[380px] row-span-2" />
          <div className="bg-white rounded-2xl h-[180px]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
