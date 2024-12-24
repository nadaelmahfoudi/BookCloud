// Navbar.js
import React from 'react';
import { useAuth } from 'react-oidc-context';

const Navbar = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "h1263ksgpk07d9445lnntdvia";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-east-1ysfcvmhlm.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Home</a>
        </div>
        
        <div className="flex items-center space-x-4">
          {auth.isAuthenticated ? (
            <>
              <span className="text-white">Hello, {auth.user?.profile.email}</span>
              <button
                onClick={() => auth.removeUser()}
                className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => auth.signinRedirect()}
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
