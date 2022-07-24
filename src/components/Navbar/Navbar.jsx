import "./navbar.css";
import petkartLogo from "../../../src/assets/others/petkart-logo-gif.gif";
import { SearchBar, Logout } from "../../components";
import { useAuth, useWishlist } from "../../contexts";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const { authState } = useAuth();
  const {
    wishlistState: { wishlistItems },
  } = useWishlist();
  const { isAuthenticated } = authState;
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
        <SearchBar />
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
              {isAuthenticated
                ? wishlistItems.length < 99
                  ? wishlistItems.length
                  : "99+"
                : 0}
            </span>
          </NavLink>
          <NavLink
            to="/login"
            className={`btn relative mx-0-5 my-1 w-max h-max ${
              pathname === "/sign-up" ||
              pathname === "/login" ||
              pathname === "/profile"
                ? "active-link"
                : ""
            }`}
          >
            <i className="fa-solid fa-user fa-xl" />
          </NavLink>
          {isAuthenticated && <Logout iconButton />}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
