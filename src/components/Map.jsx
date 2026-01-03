import map from "../assets/Map.svg"
import direction from "../assets/direction.svg"

const Map = () => {
  return (
    <section className="relative mx-auto max-w-9/10 h-58 sm:h-84 bg-gray-300">
      <img src={map} className="object-cover sm:w-full h-full"/>
      <div className="absolute flex-col top-7 sm:top-10 left-3 sm:left-5 bg-white pl-2 sm:pl-5 pb-5 rounded-base w-7/10 sm:w-6/10 md:w-4/10 lg:w-8/20 h-3/4 ">
      <div className="flex justify-self-end bg-green-900 text-white px-2 py-2 gap-2">
        <img src={direction} className="pl-2"/>
        <p className="pr-5 text-sm sm:text-lg">Get Directions</p>
      </div>
        <h4 className="font-semibold text-base sm:text-xl mb-2">Visit us</h4>
        <p className="text-sm sm:text-lg sm:mb-3">
          Gekikara Street 16, Atalanta <br />
          1327 Block M < br/>
          Mardial, Sigure <br />
          T2G 0T2
        </p>
        <small className="text-gray-500 text-xs sm:text-base">
          Open daily 7am – 5pm
        </small>
      </div>
    </section>
  );
};

export default Map;
