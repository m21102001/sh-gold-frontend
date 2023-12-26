/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import {  createContext, useState } from "react";

export const Auth = createContext();
export const AuthProvider = ({children})=>{

const [Loggedin , SetLoggedin] = useState(false);
const [role , Setrole] = useState("");
const check = ()=>{
  if(localStorage.getItem("token")&&Loggedin === true){
    SetLoggedin(true);
    Setrole(localStorage.getItem("role"))
  }else{
    SetLoggedin(false)
  }
}
useEffect(() => {
  console.log(Loggedin)
  check();

}, [])

return(<Auth.Provider
value={{Loggedin,role}}>
  {children}
</Auth.Provider>)
}

export const useAuth = () => useContext(Auth);

