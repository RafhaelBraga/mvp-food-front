import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider"; 

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    
  let navigate = useNavigate();

  const { authenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    if (!authenticated) {
      navigate('/login');     
    }
    setLoading(false);
         
  })
    
  if(loading)
     return <h1>loading...</h1>;

  return children;
}

export default RequireAuth;