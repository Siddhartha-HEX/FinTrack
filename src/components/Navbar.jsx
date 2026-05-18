function Navbar({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  darkMode,
  setDarkMode,
}) {

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

        <div className="profile">
          <p>Siddhartha</p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;