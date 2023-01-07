import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SingUp = () => {
  const registerEmail = useRef(); //useRef() recupère tout ce qui est entré dans les "input", les formulaires.
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    //gere l'inscription
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          });
          //on recupere ici ce qui a été fait
          console.log(userAuth);
          window.location.relead();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
          />
          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
};

export default SingUp;
