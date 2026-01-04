import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"
import pattern from "../assets/pattern.svg"

const Hero = () => {
  return (
    <section className="bg-green-900 text-neutral-50">
      <div className="mx-auto max-w-9/10 py-10 sm:py-none  grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-[64px] leading-16 font-chillax font-light mb-6">
            Happiness <br />blooms from <br /> within
          </h1>

          <p className="text-lg font-oxygen text-white max-w-lg mb-8">
            Guided by the spirit of “Mariduvom Matriduvom,” every <br /> bottle reflects our journey 
            - a seamless blend of heritage, <br /> authenticity, and pure natural goodness…
          </p>

          <div className="flex items-center gap-6">
            <a href="#products" className="bg-white text-black px-7 py-3 text-sm font-medium">
              Shop now
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid font-steppe grid-cols-2 gap-3">
          <div className="bg-gray-400  flex-col sm:h-[220px] " >
            <img className="z-0 w-full h-full items-center object-cover" src={img1}/>
            <p className="bg-green-900 px-1 w-fit relative -top-9/10 left-2 text-white text-base font-thin">New Parachute</p>
            </div>
          <div className="bg-gray-400  flex-col sm:h-[450px] row-span-2 " >
            <img className="w-full h-full object-cover " src={img2}/>
            <p className="bg-green-900 px-1 w-fit relative -top-19/20 left-4 text-white text-base font-thin">Gold Winner</p>
          </div>
          <div className="bg-gray-400  flex-col sm:h-[220px] " >
            <img className="w-full h-full object-cover relative z-10" src={img3}/>
            <p className="bg-green-900 px-1 w-fit relative -top-9/10 left-2 text-white text-base font-thin z-20">Navaranthna</p>
            <img className="z-0 relative w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] -top-21 -left-4 sm:-top-25 sm:-left-6" src={pattern}/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
