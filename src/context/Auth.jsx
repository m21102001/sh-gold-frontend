/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import axios from '@/api/axios'
export const Auth = createContext();
export const AuthProvider = ({ children }) => {

  const [Loggedin, SetLoggedin] = useState(false);
  const [role, Setrole] = useState("");

  const [user, setuser] = useState({})
  const [Fetched, setFetched] = useState(Boolean())
  useEffect(() => {
    const CheckUser = async () => {
      try {
        const { data } = await axios.get("/users/getMe/", { withCredentials: true });
        if (typeof data === "object") {
          setuser(data);
          Setrole(data.data.role)
          console.log('from auth', data.data);
          SetLoggedin(true)
        }
      } finally {
        setFetched(true);
      }
    }

    CheckUser();
  }, [])

  useEffect(() => {
    console.log('loggedin',Loggedin)
    console.log("user", user);
    console.log("fetch", Fetched);
    console.log("role", role);

  }, [Loggedin, user, Fetched, role])

  return (<Auth.Provider
    value={{ Loggedin, role, user, Fetched }}>
    {children}
  </Auth.Provider>)
}

export const useAuth = () => useContext(Auth);

