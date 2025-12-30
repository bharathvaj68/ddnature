const Footer = () => {
  return (
    <footer className="bg-primary text-black px-10 py-14 grid md:grid-cols-2 gap-10">
      <div>
        <h4 className="font-semibold mb-2">Beauty Care</h4>
        <p className="text-sm opacity-80">
          We care about your plants.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Instagram Shop</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-teal-900 h-16 rounded-lg"></div>
          <div className="bg-teal-900 h-16 rounded-lg"></div>
          <div className="bg-teal-900 h-16 rounded-lg"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
