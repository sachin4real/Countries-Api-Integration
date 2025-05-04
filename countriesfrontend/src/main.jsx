// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import the Redux Provider
import store from '../src/redux/store.js';  // Import your Redux store
import './index.css';
import App from './App.jsx';

// Initialize React 18 and wrap the app with the Redux Provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap your App component with Provider */}
      <App />
    </Provider>
  </StrictMode>,
);
