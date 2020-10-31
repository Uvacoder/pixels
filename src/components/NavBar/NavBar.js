import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import "./navbar.css";

export default function NavBar() {
  const [width, setWidth] = useState(Number);
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  //const drawer = document.getElementById("drawer");

  // window.addEventListener("click", (event) => {
  //   if (document.getElementById("drawer") === event.target) {
  //     setToggle(false);
  //     console.log(event.target);
  //   } else {
  //     setToggle(false);
  //   }
  // });

  // helper function for useEffect - sets the window width state
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  // checks for changes in the window width and asigns the value to width
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    if (width > 800) {
      setToggle(false);
    }
  }, [width]);

  const disableScroll = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // changes the toggle state to conditionally render the mobile drawer
  const toggleMenu = () => {
    setToggle(!toggle);
    disableScroll();
  };

  //checks if user clicks outside of the drawer. If yes, it closes

  return (
    <div className="outer-container">
      {toggle && <Drawer />}
      <div className="nav-container">
        <p className="logo">
          <i className="fab fa-pushed"></i>Pixels
        </p>
        {width < 800 ? (
          <button className="mobile-menu" onClick={toggleMenu}>
            <i className="fas fa-bars white"></i>
          </button>
        ) : (
          <div className="menu-container">
            <ul className="menu">
              <Link className="link" to="/">
                <li>Home</li>
              </Link>
              <Link className="link" to="/photos">
                <li>Photos</li>
              </Link>

              <Link className="favorites" to="/favorite">
                <li>Favorites</li>
              </Link>
            </ul>
            <span className="search-container">
              <Link
                to={{
                  pathname: "/search",
                  state: {
                    query: title,
                  },
                }}
              >
                <i className="fas fa-search"></i>
              </Link>

              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Search"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
