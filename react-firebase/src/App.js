import React, { useState } from "react";
import ConnectModal from "./component/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./component/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); //cette methode va surveiller sur on est connecté ou pas

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => handleLogout()}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}

        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
