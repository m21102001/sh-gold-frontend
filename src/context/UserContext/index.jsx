import { useEffect, useState, createContext } from 'react';

export const UserContext = createContext();
const UserContextElement = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('loggedIn'))
  );
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem('isAdmin'))
  );

  useEffect(() => {
    console.log('user', user?.username, user);
    if (user?.username) {
      if (user?.role === 'ADMIN') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user]);

  useEffect(() => {
    if (!isLoggedIn) setIsAdmin(false);
    localStorage.setItem('loggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(isAdmin);
    localStorage.setItem('isAdmin', isAdmin);
  }, [isAdmin]);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        isAdmin: isAdmin,
        setIsAdmin: setIsAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


export default UserContextElement