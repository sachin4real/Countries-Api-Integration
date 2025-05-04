import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // Only store relevant user data (uid, email, etc.)
  loading: false,
  error: null,
  favorites: [],  // Array to store favorite countries
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the user data (only relevant fields)

      // Load user-specific favorites from local storage
      const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${state.user.uid}`)) || [];
      state.favorites = storedFavorites; // Set the user's favorites from local storage
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.favorites = []; // Clear favorites on logout
      localStorage.removeItem(`favorites_${state.user.uid}`);  // Remove user-specific favorites from local storage
    },
    // Add a country to favorites
    addFavorite: (state, action) => {
      const country = action.payload;
      if (!state.favorites.some(fav => fav.cca3 === country.cca3)) {
        state.favorites.push(country);
        // Save to local storage with the user-specific key
        localStorage.setItem(`favorites_${state.user.uid}`, JSON.stringify(state.favorites));
      }
    },
    // Remove a country from favorites
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(country => country.cca3 !== action.payload.cca3);
      // Save to local storage with the user-specific key
      localStorage.setItem(`favorites_${state.user.uid}`, JSON.stringify(state.favorites));
    },
  },
});

export const { setUser, setLoading, setError, logout, addFavorite, removeFavorite } = userSlice.actions;

export default userSlice.reducer;
