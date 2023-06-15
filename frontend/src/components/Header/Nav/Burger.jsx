import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const BurgerIcon = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) =>
      open ? "rgba(0, 0, 0, 0.7)" : "#7532f9"};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: 0.5s;
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: 0.3s;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transition: 0.5s;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
