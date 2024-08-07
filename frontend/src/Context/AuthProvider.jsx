import React, { createContext, useContext } from 'react'
import { useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
 const initialAuthUser = localStorage.getItem("User")
 const [authUser, setauthUser] = useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)

return(
    <AuthContext.Provider value={[authUser,setauthUser]}>{children}</AuthContext.Provider>
)

}

export default AuthProvider



export const useAuth = ()=>
    useContext(AuthContext);
