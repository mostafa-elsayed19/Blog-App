"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./FirebaseConfig";

export async function signInWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("Signed in with Google: ", result);
      const user = result.user;
    })
    .catch((error) => {
      console.error("Error signing in with Google: ", error);
    });
}
