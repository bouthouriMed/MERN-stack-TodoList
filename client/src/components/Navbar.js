import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { connect, useSelector } from "react-redux";

import Logout from "./auth/Logout";

const NavbarMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Navbar color="light" light expand="sm" className="mb-5">
        <NavbarBrand href="/" className="mr-auto">
          My TodoList
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink>
                {isAuthenticated === true ? (
                  <span>{`Welcome ${user.username}`}</span>
                ) : null}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://gomycode.tn/" target="blank">
                GoMyCode
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/bouthouriMed/" target="blank">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <Logout />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect()(NavbarMenu);
