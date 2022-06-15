import "./App.css";
import Header from "@Header";
import { Sidebar, Widget, Feed } from "@Body";
import Login from "@Login";
import { login, logout, selectUser } from "@features/userSlice";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "@firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  console.log(`ApiKey: ${process.env.API_KEY}`);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
