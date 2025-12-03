'use client'
import React from "react";
import styled from "styled-components";
import BackgroundVideo from 'next-video/background-video';
import bgvideo from '../../../videos/bgvideo.mp4';
import './bgvidstyles.css'

const WelcomeWrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #1c1c27ff;
outline: solid;
`

function Welcome() {
  return (
    <WelcomeWrapper>
      <BackgroundVideo className="bgvid" src={bgvideo} autoPlay loop muted />
      <div className="content">
      <h1>I'm Kalen</h1>
      <p>Welcome to my website!</p>

      </div>
    </WelcomeWrapper>
  );
}

export default Welcome;