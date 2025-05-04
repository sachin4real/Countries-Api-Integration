import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector to get the user from Redux store
import { useNavigate } from 'react-router-dom'; // For navigation after logout
import { signOut } from 'firebase/auth'; // Import Firebase signOut method
import { auth } from '../../firebase'; // Import your firebase setup file
import { logout } from '../redux/userSlice'; // Import Redux logout action

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user); // Get user from Redux
  const favorites = useSelector((state) => state.user.favorites); // Get user's favorites from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation to home or login page

  // If no user is logged in, show a message
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white">
        <div className="text-center text-lg">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  // Sign out function
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      dispatch(logout()); // Dispatch Redux logout action to clear user state
      navigate('/login'); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Navigate to the favorites page
  const handleGoToFavorites = () => {
    navigate('/favorites'); // Navigate to the favorites page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Your Profile</h2>
        <p className="mb-4"><strong>Name:</strong> {user.displayName || 'N/A'}</p>
        <p className="mb-4"><strong>Email:</strong> {user.email}</p>
        <p className="mb-4"><strong>UID:</strong> {user.uid}</p>
        
        {/* Sign out button */}
        <button
          onClick={handleSignOut}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all"
        >
          Sign Out
        </button>

        {/* Go to favorites button */}
        <button
          onClick={handleGoToFavorites}
          className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all"
        >
          Go to Favorites ({favorites.length})
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
