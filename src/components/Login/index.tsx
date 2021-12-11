import React from "react";

const LoginForm =  () => {
    return (
        <form>
            <div id="email_container">
                <input type="text" name="email" maxLength={30}/>
                <input type="password" name="password" maxLength={20}/>
                <button>Entrar</button>
            </div>
        </form>
    );
}
export default LoginForm;