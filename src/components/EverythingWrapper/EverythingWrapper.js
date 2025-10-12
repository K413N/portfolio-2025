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
background-color: rgba(13, 13, 26, 1);
outline: solid;
padding: 32px;
`

function EverythingWrapper({children}) {
  return (
    <PageWrapper>
    {children}
    </PageWrapper>
  );
}

export default EverythingWrapper;