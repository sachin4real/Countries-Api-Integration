import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";

import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import AllCountriesPage from "./pages/AllCountriesPage"; // New page for all countries

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryPage />} /> {/* Country detail page */}
        <Route path="/all-countries" element={<AllCountriesPage />} /> {/* All countries page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  
    </Router>
  );
}

export default App;
