import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../service/api';
import { User } from '../shared/types/User';
import { PropsChildrenOnly } from '../shared/types/utils';
import { toast } from 'react-toastify';

type AuthContextType = {
  user: User;
  login: (user: User, remember: boolean) => void;
  logout: () => void;
};

export const authContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider: React.FC<PropsChildrenOnly> = ({ children }) => {
  const [user, setUser] = useState({} as User);

  const handleStoreUser = (user: User, remember: boolean) => {
    if (remember) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    setUser(user);
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser({} as User);
  };

  const handleGetUserData = useCallback(async () => {
    try {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        const user = JSON.parse(localUser);
        handleStoreUser(user, true);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  }, []);

  useEffect(() => {
    handleGetUserData();
  }, [handleGetUserData]);

  return (
    <authContext.Provider
      value={{
        user,
        login: handleStoreUser,
        logout: handleLogOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;