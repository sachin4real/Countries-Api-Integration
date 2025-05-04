<div className="min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] text-white flex justify-center items-center px-4 py-10">
  <div className="bg-white text-black p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-md">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-600">Your Profile</h2>

    <div className="space-y-4">
      <p><strong>Name:</strong> {user.displayName || "User"}</p>
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
