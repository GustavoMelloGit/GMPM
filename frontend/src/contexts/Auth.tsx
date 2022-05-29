import React, { createContext, useCallback, useEffect, useState } from 'react';
import { User } from '../shared/types/User';
import { PropsChildrenOnly } from '../shared/types/utils';
import { setAuthToken } from '../service/api';

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

  const handleStoreUser = useCallback((user: User, remember: boolean) => {
    if (remember) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    setAuthToken(user.token);
    setUser(user);
  }, []);

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('user');
    setUser({} as User);
  }, []);

  const handleGetUserData = useCallback(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      const user = JSON.parse(localUser);
      handleStoreUser(user, true);
    }
  }, [handleStoreUser]);

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
