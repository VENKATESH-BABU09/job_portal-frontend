
import React, { useState } from 'react';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">{isRegister ? 'Register' : 'Login'}</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          {isRegister && (
            <div className="mb-4">
              <label className="block text-sm mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded hover:bg-gray-700 transition duration-200 transform hover:scale-105"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            {isRegister ? "Already have an account?" : "Don't have an account?"} 
            <button 
              onClick={() => setIsRegister(!isRegister)} 
              className="text-gray-600 hover:underline"
            >
              {isRegister ? ' Login' : ' Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
