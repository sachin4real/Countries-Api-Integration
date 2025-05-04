// src/redux/authActions.js
import { setUser, setLoading, setError, setFavorites } from './userSlice';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
} from '../../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { updateProfile, signOut } from 'firebase/auth';

export const registerUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: email.split('@')[0] });

    // Create empty favorites doc in Firestore
    await setDoc(doc(db, "favorites", user.uid), { items: [] });

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'User',
    };

    dispatch(setUser(userData));
    dispatch(setFavorites([]));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw error;
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Load favorites from Firestore
    const docRef = doc(db, "favorites", user.uid);
    const docSnap = await getDoc(docRef);
    const favorites = docSnap.exists() ? docSnap.data().items : [];

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'User',
    };

    dispatch(setUser(userData));
    dispatch(setFavorites(favorites));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await signOut(auth);
    dispatch(setUser(null));
    dispatch(setFavorites([]));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
