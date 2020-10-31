import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Drawer(props) {
  const [title, setTitle] = useState("");

  return (
    <div id="drawer" className="drawer">
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
      <ul className="mobile-drawer">
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
    </div>
  );
}
