'use client'
import React from "react";
import styled from "styled-components";
import EverythingWrapper from "@/components/EverythingWrapper";

const WelcomeWrapper = styled.div`
width: 100%;
height: 100%;
background-color: #1c1c27ff;
outline: solid;
padding: 20px;
`

function Contact() {
  return (
    <EverythingWrapper>
    <WelcomeWrapper>
    <div>Contact me</div>
    </WelcomeWrapper>
    </EverythingWrapper>
  );
}

export default Contact;