// HomePage.js
import React from 'react';
import { useAuth } from 'react-oidc-context';

const HomePage = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {auth.isAuthenticated ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {auth.user?.profile.email}</h1>
          <pre className="text-gray-700 mt-4">ID Token: {auth.user?.id_token}</pre>
          <pre className="text-gray-700">Access Token: {auth.user?.access_token}</pre>
          <pre className="text-gray-700">Refresh Token: {auth.user?.refresh_token}</pre>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Please Sign In</h1>
          <button
            onClick={() => auth.signinRedirect()}
            className="mt-4 text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
