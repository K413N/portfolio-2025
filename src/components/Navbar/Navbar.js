'use client'
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  background-color: #1a1b2bff;
  padding: 12px;
  border-top-color: #ffffff;
  border-bottom-color: #1a1b2bff;
  outline: solid;
  outline-offset: 4px;
  outline-width: 2px;
  border-radius: 32px;

`

const NavButton = styled(Link)`
  display: flex;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1.5em;
  &:hover {
    color: gold;
    border-color: gold;
  }
  &:active {
    color: white;
    border-color: white;
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavButton href="/" className="navbutton">Home</NavButton>
      <NavButton href="/about" className="navbutton">About me</NavButton>
      <NavButton href="/contact" className="navbutton">Contact me</NavButton>
    </NavWrapper>
  );
}

export default Navbar;
