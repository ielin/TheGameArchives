import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link>
        <h1>
          THE<span>GAME</span>ARCHIVES
        </h1>
      </Link>

      <div className="navbar-links">
        <Link to="">Home</Link>
        <Link to="">About</Link>
      </div>
    </nav>
  );
}
