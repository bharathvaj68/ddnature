const InfoStrip = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-base font-semibold text-green-900">
          <div className="flex items-center justify-center gap-2 animate-slide-in-right">
            <span>Pure & Natural</span>
          </div>

          <div className="flex items-center justify-center gap-2 animate-slide-in-right [animation-delay:0.2s]">
            <span>Exceptional Quality</span>
          </div>

          <div className="flex items-center justify-center gap-2 animate-slide-in-right [animation-delay:0.4s]">
            <span>Healthy Choice</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;
