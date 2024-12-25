// Navbar.js
import React from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const signOutRedirect = () => {
    auth.removeUser();
    const clientId = "h1263ksgpk07d9445lnntdvia";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-east-1ysfcvmhlm.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
    <nav className="bg-stone-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
              <span className="text-stone-800">B</span>
              <span className="text-stone-700">o</span>ok
              <span className="text-stone-800">C</span>
              <span className="text-stone-700">l</span>oud 
        </div>
        
        <div className="flex items-center space-x-4">
          {auth.isAuthenticated ? (
            <>
              <span className="text-white">Hello, {auth.user?.profile.email}</span>
              <button
                onClick={() => signOutRedirect()}
                className="text-white bg-yellow-900 px-4 py-2 rounded-md hover:bg-yellow-800"
              >
                Sign Out
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="text-white bg-yellow-800 px-4 py-2 rounded-md hover:bg-yellow-700"
              >
                Profile
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="text-white bg-yellow-800 px-4 py-2 rounded-md hover:bg-yellow-700"
              >
                Dashboard
              </button>
            </>
          ) : (
            <button
              onClick={() => auth.signinRedirect()}
              className="text-white bg-stone-500 px-4 py-2 rounded-md hover:bg-stone-400"
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
