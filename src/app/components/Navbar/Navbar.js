'use client'
import React from "react";
import styled from "styled-components";

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

const NavButton = styled.button`
  display: flex;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavButton className="navbutton">Home</NavButton>
      <NavButton className="navbutton">About me</NavButton>
      <NavButton className="navbutton">Contact me</NavButton>
    </NavWrapper>
  );
}

export default Navbar;
