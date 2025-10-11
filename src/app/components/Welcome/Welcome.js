'use client'
import React from "react";
import styled from "styled-components";

const WelcomeWrapper =styled.div`
width: 100%;
height: 100%;
background-color: #1c1c27ff;
outline: solid;
padding: 20px;
`

function Welcome() {
  return (
    <WelcomeWrapper>
    <div>Welcome!</div>
    </WelcomeWrapper>
  );
}

export default Welcome;