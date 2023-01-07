import React, { useState } from "react";
import SingUp from "./SingUp";
import Login from "./Login";

const ConnectModal = () => {
  const [signUp, setSingUp] = useState(true);
  return (
    <div>
      <div className="connect-modal">
        <div className="header-btn">
          <button
            style={{ background: signUp ? "rgb(28,28,28)" : "rgb(83, 83, 83)" }}
            onClick={() => setSingUp(true)}
          >
            S'inscrire
          </button>
          <button
            style={{
              background: signUp ? "rgb(83, 83, 83)" : "rgb(28, 28, 28",
            }}
            onClick={() => setSingUp(false)}
          >
            Se connecter
          </button>
        </div>
      </div>
      {signUp ? <SingUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
