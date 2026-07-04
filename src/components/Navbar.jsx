import { FaWallet } from "react-icons/fa";

function Navbar({ handleLogout }) {

  return (

    <nav
      className="navbar navbar-dark mb-4"
      style={{
        background:
          "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        padding: "15px 25px",
        boxShadow:
          "0 8px 30px rgba(0,0,0,0.2)"
      }}
    >

      <h3
        className="m-0 d-flex align-items-center"
        style={{
          fontWeight: "700"
        }}
      >
        <FaWallet
          className="me-2"
          size={28}
        />

        Expense Tracker Pro
      </h3>

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>

  );
}

export default Navbar;