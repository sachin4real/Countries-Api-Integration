// src/redux/authActions.js
import { setUser, setLoading, setError } from './userSlice';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../firebase'; // Modular imports

// Register User Action
export const registerUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Firebase register
    const user = userCredential.user;

    // Store only relevant user data (uid, email, displayName)
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "No Display Name", // Default name if not available
    };

    dispatch(setUser(userData)); // Store user data in Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message)); // Set error in Redux state
    dispatch(setLoading(false));
    throw error; // Throw error to be handled in component
  }
};

// Login User Action
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const userCredential = await signInWithEmailAndPassword(auth, email, password); // Firebase login
    const user = userCredential.user;

    // Store only relevant user data
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "No Display Name", // Default name if not available
    };

    dispatch(setUser(userData)); // Store user data in Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message)); // Set error in Redux state
    dispatch(setLoading(false));
    throw error; // Throw error to be handled in component
  }
};

// Logout User Action
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await auth.signOut(); // Firebase logout
    dispatch(setUser(null)); // Clear user data from Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message)); // Set error in Redux state
    dispatch(setLoading(false));
  }
};
