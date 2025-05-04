import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import the useSelector hook to access Redux state

function Navbar() {
  const user = useSelector((state) => state.user.user); // Get the current user from Redux state

  return (
    <nav className="bg-cover bg-center p-4 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-3xl hover:text-teal-200 transition-all">
          Country Explorer
        </Link>

        {/* Links */}
        <div className="space-x-6">
          {/* Home Link */}
          <Link to="/" className="text-white text-lg hover:text-teal-200 transition-all">
            Home
          </Link>
          
          {/* All Countries Link */}
          <Link to="/all-countries" className="text-white text-lg hover:text-teal-200 transition-all">
            All Countries
          </Link>

          {/* Profile Link (Visible when user is logged in) */}
          {user ? (
            <Link to="/profile" className="text-white text-lg hover:text-teal-200 transition-all">
              Profile
            </Link>
          ) : (
            <>
              {/* Login Link (Visible when user is not logged in) */}
              <Link to="/login" className="text-white text-lg hover:text-teal-200 transition-all">
                Login
              </Link>
              
              {/* Register Link (Visible when user is not logged in) */}
              <Link to="/register" className="text-white text-lg hover:text-teal-200 transition-all">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
