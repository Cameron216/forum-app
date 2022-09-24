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
  login: (userName: string, password: string) => void;
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

const dan = {
  username: 'Dante',
  firstName: 'Daniel',
  lastName: 'Stewardson',
  banner: 'tomato',
  friends: ['Cameron', 'Shireen'],
  watchedPosts: [],
};

const shireen = {
  username: 'Shireen',
  firstName: 'Shireen',
  lastName: 'Nicholls',
  banner: 'blue',
  friends: ['Cameron', 'Daniel'],
  watchedPosts: [],
};

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userState as UserState);

  const login = async (userName: string, password: string) => {
    // const userData = await fetch ....
    switch (userName) {
      case 'dan':
        setUser(dan);
        break;
      case 'shireen':
        setUser(shireen);
        break;
      default:
        alert('Enter a valid login');
    }
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
