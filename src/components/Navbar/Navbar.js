'use client'
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  background-color: #1a1b2bff;
  padding: 6px;
  border-top-color: #ffffff;
  border-bottom-color: #1a1b2bff;
  outline: solid;
  outline-width: 2px;
  border-radius: 32px;
`
const NavWrapper = styled.div`
position: fixed;
bottom: 0;
margin-bottom: 8px;
`

const NavLink = styled(Link)`
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

const NavButton = styled.button`
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

function Navbar({ aboutRef }) {
  return (
    <NavWrapper>
      <NavContainer>
        <NavButton className="navbutton" onClick={() => {
          window.scrollTo(0, 0)}}
          >Home</NavButton>
        <NavButton className="navbutton" onClick={() => {
          aboutRef.current.scrollIntoView()
        }}>About me</NavButton>
        <NavButton className="navbutton" onClick={() => {
          window.scrollTo(0, 9000)
        }}>Contact me</NavButton>
      </NavContainer>
    </NavWrapper>
  );
}

export default Navbar;
