import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (
    e
  ) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://expense-tracker-backend-production-aca7.up.railway.app/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(
        "Registration Successful"
      );

      window.location.href =
        "/login";

    } catch (error) {

      console.error(error);

      alert(
        "Registration Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Register
        </h2>

        <form
          onSubmit={
            handleRegister
          }
        >

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            className="btn btn-success"
          >
            Register
          </button>
          <div className="mt-3">

  <button
    type="button"
    className="btn btn-secondary"
    onClick={() =>
      window.location.href =
        "/login"
    }
  >
    Back To Login
  </button>

</div>

        </form>

      </div>

    </div>

  );
}

export default Register;