import { useContext, useState } from "react";
import './style.css';
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const LoginForm =  () => {

    const { handleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="LoginContainer">
            <div className="LoginForm">
                <label>
                    <strong>Email:</strong>
                    <input type="text" name="email" maxLength={30} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <strong>Senha:</strong>
                    <input type="password" name="password" maxLength={20}  value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <Link to="/restaurantes">
                    <button type="button" onClick={handleLogin(email, password)}><strong>Entrar</strong></button>
                </Link>

            </div>
        </form>
    );
}
export default LoginForm;