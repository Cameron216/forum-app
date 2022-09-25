import React, { useState, createContext } from 'react';

interface UserState {
  username: string;
  firstName: string;
  lastName: string;
  banner: string;
  friends: string[];
  watchedPosts: string[];
}

interface UserContextInterface {
  user: UserState;
  login: (userName: UserState) => void;
  logout: () => void;
}

const userState = {
  username: '',
  firstName: '',
  lastName: '',
  banner: '',
  friends: [],
  watchedPosts: [],
};

const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userState as UserState);

  const login = (username: UserState) => {
    setUser(username);
  };

  const logout = () => {
    setUser(userState);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
