import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userNamePhoto = (registeredUser, name, photo) => {
    setLoading(true);
    return updateProfile(registeredUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   const signIn = (email, password) => {
  //     setLoading(true);
  //     return signInWithEmailAndPassword(auth, email, password);
  //   };

  //   const googleSignIn = () => {
  //     setLoading(true);
  //     return signInWithPopup(auth, googleProvider);
  //   };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       console.log("current user in auth Provider", currentUser);
  //       //   setLoading(false);
  //       if (currentUser && currentUser.email) {
  //         const loggedUser = {
  //           email: currentUser.email,
  //         };
  //         fetch("https://car-doctor-server-smoky.vercel.app/jwt", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(loggedUser),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("jwt response", data);
  //             // Warning: Local storage is not the best (second best place) to store access token
  //             localStorage.setItem("car-access-token", data.token);
  //           });
  //       } else {
  //         localStorage.removeItem("car-access-token");
  //       }
  //     });
  //     return () => {
  //       return unsubscribe();
  //     };
  //   }, []);

  const authInfo = {
    auth,
    user,
    createUser,
    userNamePhoto,
    loading,
    logOut,
    loginEmailPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
