import { useState } from 'react';
import { createContext } from 'react';

export const EmailContext = createContext();

export const EmailContexProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    if (localStorage.getItem('email')) {
      return localStorage.getItem('email');
    } else {
      return null;
    }
  });

  return (
    <EmailContext.Provider value={{ email, setEmail }}>{children}</EmailContext.Provider>
  );
};
