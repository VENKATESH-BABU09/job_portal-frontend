import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'; // Assuming you have a Login component in the same folder

const Navbar = () => {
  // State to manage login form visibility
  const [showLogin, setShowLogin] = useState(false);

  // Function to handle login button click
  const handleClick = () => {
    setShowLogin(true);  // Show the login component when clicked
  };

  const closeLogin = () => {
    setShowLogin(false);  // Close the login component
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-blue-600 text-2xl font-semibold">JobPortal</div>
          <div className="space-x-8 hidden md:flex">
            <Link to="/" className="text-gray-500 hover:text-blue-500">Start a search</Link>
            <Link to="/" className="text-gray-500 hover:text-blue-500">My Jobs</Link>
            <Link to="/" className="text-gray-500 hover:text-blue-500">Salary estimate</Link>
            <Link to="/" className="text-gray-500 hover:text-blue-500">Post A Job</Link>
          </div>
          <div className="space-x-4">
            {/* Trigger Login form on click */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleClick}>Log in</button>
          </div>
        </div>
      </header>

      {/* Conditionally render the Login component */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            {/* Close button for the Login modal */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={closeLogin}>
              &times;
            </button>
            {/* Render the Login component */}
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
