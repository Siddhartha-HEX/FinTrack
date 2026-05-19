import { signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

function Navbar({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  darkMode,
  setDarkMode,
}) {
  const handleLogout = () => {

    signOut(auth)
      .then(() => {

        alert("Logged Out");

      })
      .catch((error) => {

        alert(error.message);

      });
  };

  return (
    <div className="navbar">

      <div className="nav-left">

        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <select
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(e.target.value)
          }
        >

          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
          <option value="Bills">Bills</option>

        </select>

      </div>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

        <div className="profile">
          <p>Siddhartha</p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;