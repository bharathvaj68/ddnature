const Navbar = () => {
  return (
    <header className="bg-primary text-black px-10 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold">Plantify</div>

      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#">Shop</a>
        <a href="#">Products</a>
        <a href="#">Fertilizer</a>
        <a href="#">Guide</a>
      </nav>

      <input
        type="search"
        placeholder="Search flowers..."
        className="px-4 py-2 rounded-full text-sm text-black w-56"
      />
    </header>
  );
};

export default Navbar;
