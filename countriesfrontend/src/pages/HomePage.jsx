import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?globe,earth,world,nature')",
      }}
    >
      {/* Layered Overlays for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B5D4C]/80 to-[#5B7F72]/80 z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md animate__animated animate__fadeInUp">
          Discover the World
        </h1>

        {/* Search Bar Container */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
