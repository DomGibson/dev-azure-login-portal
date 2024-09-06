// src/Login.js

import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  return (
    <div>
      <h1>Welcome to My Login Portal</h1>
      <button onClick={handleLogin}>Login with Entra ID</button>
    </div>
  );
};

export default Login;
