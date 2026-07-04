import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaWallet } from "react-icons/fa";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password
        }
      );

      if (
        response.data ===
        "Login Successful"
      ) {

        localStorage.setItem(
          "loggedIn",
          "true"
        );

        window.location.href = "/";
      }

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }

  };

  return (

    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh"
      }}
    >

      <div
        className="card shadow p-4"
        style={{
          width: "420px",
          borderRadius: "25px"
        }}
      >

        <div className="text-center mb-4">

          <FaWallet
            size={55}
            className="mb-3"
          />

          <h2>
            Expense Tracker
          </h2>

          <p>
            Manage your finances smarter
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <div
            style={{
              position: "relative"
            }}
          >

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <span
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              style={{
                position: "absolute",
                right: "15px",
                top: "12px",
                cursor: "pointer"
              }}
            >

              {showPassword
                ? <FaEyeSlash />
                : <FaEye />}

            </span>

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-success w-100"
            onClick={() =>
              window.location.href =
                "/register"
            }
          >
            Create New Account
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;