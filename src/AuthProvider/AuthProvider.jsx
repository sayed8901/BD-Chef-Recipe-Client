/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./FirebaseAuth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  //   to create a new user using email & password
  const createNewUserByMail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // to update user name to firebase auth
  const updateUserData = (userName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });
  };

  //   to log in an user using email & password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log in with gitHub
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //   to log out existing user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // to observe auth state change
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unmount();
  }, []);

  //   to pass the data
  const AuthInfo = {
    user,
    setUser,
    updateUserData,
    createNewUserByMail,
    userLogin,
    googleSignIn,
    gitHubSignIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
