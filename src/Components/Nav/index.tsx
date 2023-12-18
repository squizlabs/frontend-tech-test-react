import React from 'react';
import { Link } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        Instructions
      </Link>
      <Link className="nav__link" to="/task-1">
        Task 1
      </Link>
      <Link className="nav__link" to="/task-2">
        Task 2
      </Link>
    </nav>
  );
}
