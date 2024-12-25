import React from 'react';
import { useAuth } from 'react-oidc-context';
import profileImage from '../assets/User.png'; // Adjust the path based on your project structure

const ProfilePage = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Access Denied</h1>
          <p className="text-gray-600 mt-2">You must sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-amber-500"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome</h1>
          <p className="text-gray-700 text-lg mt-2">{auth.user?.profile.email}</p>
        </div>
        <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-inner">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tokens:</h2>
          <div className="overflow-auto text-sm">
            <pre className="text-gray-700">ID Token: {auth.user?.id_token}</pre>
            <pre className="text-gray-700">Access Token: {auth.user?.access_token}</pre>
            <pre className="text-gray-700">Refresh Token: {auth.user?.refresh_token}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
