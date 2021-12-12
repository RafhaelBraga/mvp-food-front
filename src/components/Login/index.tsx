import { useContext } from "react";
import './style.css';
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const LoginForm =  () => {

    const { handleLogin } = useContext(AuthContext);

    return (
        <form className="LoginContainer">
            <div className="LoginForm">
                <label>
                    <strong>Email:</strong>
                    <input type="text" name="email" maxLength={30} id="email"/>
                </label>
                <label>
                    <strong>Senha:</strong>
                    <input type="password" name="password" maxLength={20}/>
                </label>
                <Link to="/restaurantes">
                    <button type="button" onClick={handleLogin}><strong>Entrar</strong></button>
                </Link>

            </div>
        </form>
    );
}
export default LoginForm;