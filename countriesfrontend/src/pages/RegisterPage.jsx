// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authActions'; // Action for registration

function RegisterPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user); // Get loading and error from Redux
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(email, password)); // Dispatch register action
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Create an Account</h2>
        
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error if any */}
        
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account? <a href="/login" className="text-teal-600 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
