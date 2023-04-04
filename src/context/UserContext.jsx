import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContexProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return null;
    }
  });
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
