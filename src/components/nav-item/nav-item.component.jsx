import React from "react";
import { Link } from "react-router-dom";

import "./nav-item.styles.scss";

const NavItem = ({ to, link }) => {
  return (
    <Link className="nav-link" to={to}>
      {link}
    </Link>
  );
};

export default NavItem;
