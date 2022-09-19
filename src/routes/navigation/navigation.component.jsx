import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import NavItem from "../../components/nav-item/nav-item.component";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <NavItem to={"/contact-us"} link={"CONTACT US"} />
          <NavItem to={"/shop"} link={"SHOP"} />
          <NavItem to={"/login"} link={"LOGIN"} />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
