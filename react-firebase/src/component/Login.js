import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h3>Se connecter</h3>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <input type="submit" value="Se connecter" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
