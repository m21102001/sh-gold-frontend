/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from 'react';
import axios from '@/api/axios';
export const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [Loggedin, setLoggedin] = useState(false);
  const [role, setRole] = useState('');
  const [plan, setPlan] = useState('');

  const [user, setuser] = useState();
  const [Fetched, setFetched] = useState(false);
  useEffect(() => {
    const CheckUser = async () => {
      try {
        const { data } = await axios.get('/users/getMe/', {
          withCredentials: true,
        });
        if (typeof data === 'object') {
          setuser(data.data);
          setRole(data.data.role);
          setRole(data.data.plan);
          // console.log('from auth', data.data);
          setLoggedin(true);
        }
      } finally {
        setFetched(true);
      }
    };

    CheckUser();
  }, []);

  useEffect(() => {
    // console.log('loggedin', Loggedin)
    // console.log('user', user);
    // console.log("fetch", Fetched);
    // console.log("role", role);
  }, [Loggedin, user, Fetched, role,plan]);

  return (
    <Auth.Provider
      value={{
        setLoggedin,
        Loggedin,
        setRole,
        role,
        user,
        plan,
        setuser,
        setFetched,
      }}
    >
      {Fetched ? children : null}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
export const authenticated = () => useAuth().user != null;
