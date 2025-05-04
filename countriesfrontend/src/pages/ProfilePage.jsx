import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { logout } from '../redux/userSlice';

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.user.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white px-4">
        <div className="text-center text-lg">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleGoToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white flex items-center justify-center px-4 py-10">
      <div className="bg-white text-black p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-600">Your Profile</h2>

        <div className="space-y-4 text-sm sm:text-base">
          <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p className="break-all"><strong>UID:</strong> {user.uid}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
          >
            Sign Out
          </button>
          <button
            onClick={handleGoToFavorites}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition"
          >
            Go to Favorites ({favorites.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
