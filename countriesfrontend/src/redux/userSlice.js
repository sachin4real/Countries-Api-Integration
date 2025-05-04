// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const initialState = {
  user: null,
  loading: false,
  error: null,
  favorites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.favorites = [];
    },
    addFavorite: (state, action) => {
      const country = action.payload;
      if (!state.favorites.some(fav => fav.cca3 === country.cca3)) {
        state.favorites.push(country);

        // Sync to Firestore
        if (state.user) {
          setDoc(doc(db, "favorites", state.user.uid), {
            items: state.favorites
          });
        }
      }
    },
    removeFavorite: (state, action) => {
      const country = action.payload;
      state.favorites = state.favorites.filter(fav => fav.cca3 !== country.cca3);

      // Sync to Firestore
      if (state.user) {
        setDoc(doc(db, "favorites", state.user.uid), {
          items: state.favorites
        });
      }
    },
  },
});

export const {
  setUser,
  setLoading,
  setError,
  setFavorites,
  logout,
  addFavorite,
  removeFavorite,
} = userSlice.actions;

export default userSlice.reducer;
