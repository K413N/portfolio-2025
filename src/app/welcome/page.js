'use client'
import React from "react";
import styled from "styled-components";
import BackgroundVideo from 'next-video/background-video';
import bgvideo from '../../../videos/bgvideo.mp4';
import './bgvidstyles.css'

const WelcomeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: #000000ff;
outline: solid;
`
const VidWrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #1c1c27ff;
outline: solid;
`

const Overlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
border-radius: 16px;
padding: 6px;
background-color: rgba(0,0,0,0.4);
`

const Spacer = styled.div`
height: 512px;
`

const SmallSpacer = styled.div`
height: 32px;
`

const Intro = styled.div`
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
height: 100%;
width: 70%;
`

function Welcome() {
  return (
    <WelcomeWrapper>
       <VidWrapper>
       <BackgroundVideo className="bgvid" src={bgvideo} autoPlay loop muted />
      </VidWrapper>
      <div className="content">
      <Overlay>
      <h1>I'm Kalen</h1>
      <p>Welcome to my website!</p>
      </Overlay>
      </div>
      <Spacer />
        <Intro>
          <h1>I'm a developer</h1>
          <SmallSpacer />
          <p>
            I came from Vancouver BC, but I am currently looking for work in Montreal.
            I've been working hard on sharpening my skills for quite some time now.
          </p>
          <SmallSpacer />
          <p>
            I got into programming at a very early age. I've always been fascinated 
            by modding communities, and game developers. 
            I remember they were telling me to learn C++ at the time, However we did not 
            have the resources we have today. So I picked up 'C++ for dummies'
            and 12 year old me really did feel like a dummy trying to memorize that brick of a book. 
            Teachers caught wind of this and set me up with a game dev bootcamp at a BCIT summer camp in grade 7 using C# 
            and I've been hooked ever since!            
          </p>
          <SmallSpacer />
          <p>
            I've done Khan Academy's intro JavaScript course immediately after I graduated back in 2013.
            This gave me a very good foundation, and allowed me to follow 
            tutorials in Unity3D using C# with ease. I found using JavaScript and C# interchangeably to be simple.
          </p>
          <SmallSpacer />
          <p>
            I made the switch to GodotEngine, and its my most favorite place to work out of by far.
            Godot uses a language called GDScript which is identical to python, and I've become very profecient with it.
            I have worked on many projects in this engine, and just released my first game for free on itch recently
            called 'procedural nightmares' that is playable in your browser. You can play it right now!
          </p>
          <SmallSpacer />
          <p>
            I've taken 2 courses on React. One was a 12 week course at 
            Concordia Bootcamps in 2022, which showed me how to build full stack applications using MongoDB, 
            and the other was Josh W Comeau's 'Joy of React' which I just finished now in 2025.
          </p>
          <SmallSpacer />
          <p>
            I know without a doubt I wield the skills 
            to begin work in this field.
          </p>
          <SmallSpacer />
          <p>
            Take a look at some of my projects, and don't hesitate to reach out. 
            I'm here if you need help, are looking to hire, or just want to chat!
          </p>
        </Intro>
        <Spacer />
    </WelcomeWrapper>
  );
}

export default Welcome;