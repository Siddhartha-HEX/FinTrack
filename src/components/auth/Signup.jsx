import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";

function Signup({ setIsSignup }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
        auth,
        email,
        password
        )
        .then((userCredential) => {

            console.log(userCredential.user);

            alert("Signup Successful!");

        })
        .catch((error) => {

            alert(error.message);

        });
  };

  return (
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSignup}
      >

        <h2>Create Account</h2>

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
          Sign Up
        </button>
        <p className="auth-switch">

        Already have an account?

        <span
            onClick={() => setIsSignup(false)}
        >
            Login
        </span>

        </p>

      </form>

    </div>
  );
}

export default Signup;