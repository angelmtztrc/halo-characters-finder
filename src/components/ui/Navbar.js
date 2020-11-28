const { Link, NavLink } = require('react-router-dom');

const Navbar = () => {
  return (
    <nav className="px-6 py-4 w-full text-white bg-gray-800">
      <div className="flex items-center w-full font-mono">
        <Link className="text-blue-300 text-xl font-semibold" to="/">
          Halo Characters
        </Link>
        <span className="mx-5">|</span>
        <div className="flex flex-1 justify-between text-gray-400 text-lg font-semibold">
          <div>
            <NavLink
              activeClassName="text-white"
              className="mr-3"
              exact
              to="/spartans"
            >
              Spartans
            </NavLink>
            <NavLink
              activeClassName="text-white"
              className="mr-3"
              exact
              to="/covenants"
            >
              Covenants
            </NavLink>
            <NavLink activeClassName="text-white" exact to="/search">
              Search
            </NavLink>
          </div>
          <NavLink activeClassName="text-white" exact to="/login">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
