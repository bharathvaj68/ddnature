const InfoStrip = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm font-medium text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <span>🚚</span>
            <span>Free Delivery</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>💬</span>
            <span>Support 24/7</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>✅</span>
            <span>100% Authentic</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoStrip;
