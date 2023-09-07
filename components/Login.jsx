import React from 'react';
import Login from '../components/Login'; 

const LoginPage = () => {
  const handleLogin = (username, password) => {

  };

  return (
    <div>
      <h2>Login Page</h2>
      <Login handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
