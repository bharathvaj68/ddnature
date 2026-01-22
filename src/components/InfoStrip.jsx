import pure from "../assets/pure.svg"
import healthy from "../assets/healthy.svg"
import price from "../assets/price.svg"

const InfoStrip = () => {
  return (
    <section className="bg-gray-100 my-10">
      <div className="mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3  font-semibold ">
        
          <div className="flex items-center justify-center gap-3 py-2">
            <img src={pure} className="h-9/10"></img>
            <div className="flex-col text-start">
              <p className="text-xl text-black">Pure & Natural</p>
              <span className="text-sm text-gray-500">Exceptional Quality</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-2">
            <img src={healthy} className="h-9/10"></img>
            <div className="flex-col text-start">
              <p className="text-xl text-black">Healthy Choice</p>
              <span className="text-sm text-gray-500">Rich Taste & Aroma</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-2">
            <img src={price} className="h-9/10"></img>
            <div className="flex-col text-start">
              <p className="text-xl text-black">Honest & Fair Pricing</p>
              <span className="text-sm text-gray-500">Carefully Selected Seeds</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default InfoStrip;
