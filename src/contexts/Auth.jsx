import React, { createContext, useEffect, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cashedUser = JSON.parse(localStorage.getItem('user'));
    if (cashedUser) setUser(cashedUser);
    else setUser(null);
  }, []);

  // Function to log in the user
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Provide the auth context values to the children components
  const authContextValues = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};
