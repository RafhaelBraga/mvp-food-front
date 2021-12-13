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
        
        if (localStorage.getItem('token')) {
          setauthenticated(true);
        }
    
        setLoading(false);

      }, []);

    async function handleLogin(user: string, password: string) {
        let user_data = {
            'email': user,
            'senha': password};
        let response = await axios.post(`http://localhost:8080/mvp/authenticate`, 
            user_data,
            {headers: {}},
        )
        
        if(response.status === 200) {            
            localStorage.setItem('token', JSON.stringify(response.data));
            setauthenticated(true);
        };
        
        history.push('/restaurantes');
    };

    function handleLogout() {
        setauthenticated(false);
        localStorage.removeItem('token');
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