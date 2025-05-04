import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,earth')" }}>
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] opacity-75"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Discover the World
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default HomePage;
