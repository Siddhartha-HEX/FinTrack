import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

function Login({ setIsSignup }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {

        console.log(userCredential.user);

        alert("Login Successful!");

      })
      .catch((error) => {

        alert(error.message);

      });
  };

  return (
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleLogin}
      >

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
        <p className="auth-switch">

            Don't have an account?

            <span
                onClick={() => setIsSignup(true)}
            >
                Sign Up
            </span>

        </p>

      </form>

    </div>
  );
}

export default Login;