'use client'
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 16px;
  z-index: 1000;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(15, 16, 36, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
`;

const baseStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 32px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 10px 22px;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  &:active {
    transform: scale(0.96);
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }
`;

const NavLink = styled(Link)`${baseStyles}`;
const NavButton = styled.button`${baseStyles}`;

const Divider = styled.span`
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`;

function Navbar({ aboutRef, projectsRef }) {
  return (
    <NavWrapper>
      <NavContainer>
        <NavButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </NavButton>
        <Divider />
        <NavButton onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>
          About Me
        </NavButton>
        <Divider />
        <NavButton onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>
          Projects
        </NavButton>
        <Divider />
        <NavButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
          Contact
        </NavButton>
      </NavContainer>
    </NavWrapper>
  );
}

export default Navbar;