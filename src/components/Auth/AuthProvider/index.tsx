import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

interface AuthContextType {
    authenticated: boolean,
    loading: boolean,
    handleLogin: any,
    handleLogout: any,
}

const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider ({children} : any) {

    const [authenticated, setauthenticated] = useState(false);  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          //api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
          setauthenticated(true);
        }
    
        setLoading(false);
      }, []);

    async function handleLogin() {                
        
        // await axios.get(`https://pokeapi.co/api/v2/ability/1/`)
        // .then(res => {
        //     if(res.status===200) {
        //         localStorage.setItem('token', res.data);//Json.stringdy(token)
        //         //api.defaults.headers.Authorization = token;
        //     } else {
        //         handleLogout();
        //     }
        // })
        setauthenticated(true);
        localStorage.setItem('token', 'res.dat');//Json.stringdy(token)
        history.push('/restaurantes');
    };

    function handleLogout() {
        setauthenticated(false);
        localStorage.removeItem('token');
        //api.defaults.headers.Authorization = undefined;
        history.push('/login');        
    }
      
    if(loading)
        return <h1>Loading...</h1>;
    return (
        <AuthContext.Provider value={{authenticated, loading, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
   );

};

export { AuthProvider, AuthContext };