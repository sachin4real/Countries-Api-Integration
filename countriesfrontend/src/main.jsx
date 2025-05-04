import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import store from './redux/store';
import App from './App';
import { auth, db } from '../firebase';
import { setUser, setFavorites } from './redux/userSlice';
import './index.css'

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || 'User',
        };
        dispatch(setUser(userData));

        // Fetch favorites from Firestore
        const docRef = doc(db, 'favorites', user.uid);
        const docSnap = await getDoc(docRef);
        const favorites = docSnap.exists() ? docSnap.data().items : [];

        dispatch(setFavorites(favorites));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthLoader>
        <App />
      </AuthLoader>
    </Provider>
  </StrictMode>
);
