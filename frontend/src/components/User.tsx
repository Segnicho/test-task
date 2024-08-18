import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const User: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
