'use client'
import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background-color: rgba(26, 13, 13, 1);
outline: solid;
`

function EverythingWrapper({children}) {
  return (
    <PageWrapper>
    {children}
    </PageWrapper>
  );
}

export default EverythingWrapper;