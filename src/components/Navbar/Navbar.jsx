import "./navbar.css";
import petkartLogo from "../../../src/assets/others/petkart-logo-gif.gif";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveStyles = ({ isActive }) => {
    return isActive
      ? "btn relative mx-0-5 my-1 w-max h-max active-link"
      : "btn relative mx-0-5 my-1 w-max h-max";
  };

  return (
    <nav className="nav-bar">
      <div className="w-full h-full font-bold px-3 py-0-5 rounded-md flex-row flex-justify-between flex-align-center flex-wrap">
        <div className="flex-row flex-justify-between flex-align-center flex-gap-1">
          <div className="flex-row flex-justify-center flex-align-center flex-gap-2">
            {/* Brand Logo */}
            <Link to="/">
              <img
                className="nav-logo rounded-circle"
                src={petkartLogo}
                alt="Logo"
                width={60}
                height={60}
              />
            </Link>
            {/* Brand Title */}
            <h1 className="nav-logo-title h1 font-xbold">
              <Link to="/" className="btn color-primary">
                Petkart
              </Link>
            </h1>
          </div>
        </div>
        {/* search bar */}
        <div className="flex-row flex-justify-between flex-align-center flex-gap-1 w-30-pc">
          <form className="search-bar flex-row flex-justify-between flex-align-center flex-gap-1 px-1 py-0-5 rounded-md w-full">
            <button className="btn btn-icon">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <input
              className="search-bar-input text-sm"
              type="search"
              placeholder="Type to search"
            />
          </form>
        </div>
        {/* Icons and Buttons */}
        <div className="nav-actions-container flex-row flex-justify-between flex-align-center flex-gap-2">
          <NavLink to="/cart" className={getActiveStyles}>
            <i className="fa-solid fa-cart-shopping fa-xl" />
            <span className="badge-notification-count absolute w-2 h-2 p-0-5 rounded-full font-bold flex-row flex-justify-center flex-align-center text-sm">
              0
            </span>
          </NavLink>
          <NavLink to="/wishlist" className={getActiveStyles}>
            <i className="fa-regular fa-heart fa-xl" />
            <span className="badge-notification-count absolute w-2 h-2 p-0-5 rounded-full font-bold flex-row flex-justify-center flex-align-center text-sm">
              0
            </span>
          </NavLink>
          <NavLink to="/profile" className={getActiveStyles}>
            <i className="fa-solid fa-user fa-xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
