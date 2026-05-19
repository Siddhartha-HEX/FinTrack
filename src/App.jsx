import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase/firebase";

import Login from "./components/auth/Login";

import MainContent from "./pages/MainContent";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser);

      });

    return () => unsubscribe();

  }, []);

  return (
    <>
      {user ? <MainContent /> : <Login />}
    </>
  );
}

export default App;