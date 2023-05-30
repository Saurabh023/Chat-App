import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Welcome = () => {
  const [err, setErr] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        const { uid, displayName, email } = result.user;
        console.log("uid:", uid);
        console.log("displayName:", displayName);
        console.log("email:", email);

        await setDoc(doc(db, "users", uid), {
          uid,
          displayName,
          email,
        });

        await setDoc(doc(db, 'userChats', uid), {
          
        })
      }
    } catch (error) {
      setErr(true);
      console.log("Error during Google sign-in:", error);
    }
  };

  return (
    <main className="welcome">
      <h2>Welcome to the Chat App.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with your friends.</p>
      <button className="sign-in" onClick={handleGoogleSignIn}>
        <img src={GoogleSignin} alt="sign in with google" type="button" />
      </button>
      { err && <span>Something went wrong.</span>}
    </main>
  );
};

export default Welcome;
