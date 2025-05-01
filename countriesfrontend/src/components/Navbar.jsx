function Navbar() {
  return (
    <nav
      className="bg-cover bg-center p-4 w-full fixed top-0 left-0 z-10 shadow-lg"
   
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-3xl hover:text-teal-200 transition-all">
          Country Explorer
        </a>
        <div className="space-x-6">
          <a href="/" className="text-white text-lg hover:text-teal-200 transition-all">
            Home
          </a>
          <a href="/all-countries" className="text-white text-lg hover:text-teal-200 transition-all">
            All Countries
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
