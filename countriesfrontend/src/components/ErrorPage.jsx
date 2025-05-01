function ErrorPage() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white">
        <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">404</h1>
        <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
      </div>
    );
  }
  
  export default ErrorPage;
  