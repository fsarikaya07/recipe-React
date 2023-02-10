import React, { useState } from "react";

import {
  NavbarContainer,
  Brand,
  Menu,
  MenuLink,
  Hamburger,
} from "./Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

  const [isOpen, setIsOpen]=useState(false)
  return (
    <NavbarContainer justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>
      <Hamburger onClick={()=> setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu justify="space-between" isOpen={isOpen} onClick={()=> setIsOpen(false)}>
        <MenuLink to="/"> HOME</MenuLink>
        <MenuLink to="/about"> About</MenuLink>
        <MenuLink to="/register"> Register</MenuLink>
        <MenuLink to="/logout" onClick={()=> sessionStorage.clear() }> LogOut</MenuLink>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
