import React from 'react';
import { useAuth } from 'react-oidc-context';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  return (
    <div>
      <Container />
    </div>
  );
};

export default HomePage;
