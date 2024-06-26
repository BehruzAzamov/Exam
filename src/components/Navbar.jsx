import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/useGlobalContext";
import Signout from "../pages/Signout";
import toast from "react-hot-toast";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function LocalStorageTheme() {
  return localStorage.getItem("mode") || themes.winter;
}

const Navbar = () => {
  const { user } = useContext(GlobalContext);
  console.log(user);
  const [theme, setTheme] = useState(LocalStorageTheme());

  function handleClick() {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    toast.success("Changed theme");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <div className="bg-base-300">
      <div className="navbar align-element mb-10">
        <div className="navbar-start">
          <Link className="btn btn-primary hidden lg:flex" to="/">
            My Kitchen
          </Link>
          <Link className="btn btn-primary flex lg:hidden">MK</Link>
        </div>

        <div className="navbar-end">
          {user && <p className="mr-3">{user.displayName}</p>}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/create">Create book</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button onClick={handleClick}>Change theme</button>
              </li>
              <li>
                <Signout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
