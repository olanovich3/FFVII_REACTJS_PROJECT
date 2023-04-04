import { useState } from 'react';
import { createContext } from 'react';

export const PasswordContext = createContext();

export const PasswordContexProvider = ({ children }) => {
  const [password, setPassword] = useState(() => {
    if (localStorage.getItem('password')) {
      return localStorage.getItem('password');
    } else {
      return null;
    }
  });

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      {children}
    </PasswordContext.Provider>
  );
};
