import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase/firebase";

import Login from "./components/auth/Login";

import Signup from "./components/auth/Signup";

import MainContent from "./pages/MainContent";

function App() {

  const [user, setUser] = useState(null);

  const [isSignup, setIsSignup] =
    useState(false);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

        }
      );

    return () => unsubscribe();

  }, []);

  if (user) {
    return <MainContent />;
  }

  return (
    <>
      {isSignup ? (
        <Signup
          setIsSignup={setIsSignup}
        />
      ) : (
        <Login
          setIsSignup={setIsSignup}
        />
      )}
    </>
  );
}

export default App;