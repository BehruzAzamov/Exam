import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/useGlobalContext";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(GlobalContext);

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        dispatch({ type: "SIGN_IN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const signupWithPasswordAndEmail = (name, url, email, password) => {
    createUserWithEmailAndPassword(auth,url,name, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url
        });
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return { signUpWithGoogle, signupWithPasswordAndEmail, user, error };
}

export default useSignup;