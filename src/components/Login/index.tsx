import React from "react";
import './style.css';

const LoginForm =  () => {
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
                <button><strong>Entrar</strong></button>
            </div>
        </form>
    );
}
export default LoginForm;