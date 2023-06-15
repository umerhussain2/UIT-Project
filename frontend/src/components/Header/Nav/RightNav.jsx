import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/Context";
import AdminNav from "../Admin Nav/AdminNav";
import PublicNav from "../Public Nav/PublicNav";
import { BsPersonCircle } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";

const Ul = styled.ul`
  list-style: none;
  text-align: center;

  display: flex;
  flex-flow: column wrap;
  align-items: start;
  justify-content: start;

  background-color: #ffffff;
  border-left: 2px solid #7532f9;

  position: fixed;
  top: 0;
  right: 0;

  padding-top: 10vmax;

  width: 20vmax;
  height: 100vh;

  .link-1 {
    transform: ${({ open }) =>
      open ? "align-items: start" : "translateX(100%)"};
    transition: 1.2s;
  }

  .link-2 {
    transform: ${({ open }) =>
      open ? "align-items: start" : "translateX(100%)"};
    transition: 1.4s;
  }

  .link-3 {
    transform: ${({ open }) =>
      open ? "align-items: start" : "translateX(100%)"};
    transition: 1.6s;
  }

  .link-4 {
    transform: ${({ open }) =>
      open ? "align-items: start" : "translateX(100%)"};
    transition: 1.8s;
  }

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
`;

const RightNav = ({ open }) => {
  const auth = useAuth();

  return (
    <Ul open={open}>
      <li className="link-1">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>

      <li className="link-2">
        {auth.user && (
          <NavLink className="nav-link" to="/profile">
            <BsPersonCircle /> Account
          </NavLink>
        )}
        {!auth.user && (
          <NavLink className="nav-link" to="/login">
            <RiLoginCircleFill /> Login
          </NavLink>
        )}
      </li>

      <li className="link-3">{auth.user === "Admin" && <AdminNav />}</li>

      <li className="link-4">{auth.user === "Public-User" && <PublicNav />}</li>
    </Ul>
  );
};

export default RightNav;
