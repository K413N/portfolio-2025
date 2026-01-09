'use client'
import React from "react";
import styled from "styled-components";
import BackgroundVideo from 'next-video/background-video';
import bgvideo from '../../../assets/bgvideo.mp4';
import bgimage from '../../../assets/cropped_photo.png';
import Image from "next/image";
import './bgvidstyles.css'
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import Navbar from "@/components/Navbar";

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
color: cyan;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
border-radius: 16px;
padding: 22px;
background-color: rgba(0, 0, 0, 0.7);
box-shadow:
  6px 6px black,
  -1em 0 1em black;
`

const Spacer = styled.div`
height: 220px;
`

const SmallSpacer = styled.div`
height: 16px;
`

const Intro = styled.div`
background-color: rgba(50, 50, 120, 0.8);
border-color: rgba(50, 50, 50, 0.5);
border-style: solid;
box-shadow:
  6px 6px blue,
  -1em 0 0.7em black;
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
padding: 36px;
height: 100%;
width: 450px;
margin: 22px;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
`
const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: center;
align-items: center;
`

const ShadowedH = styled.h1`
font-size: 28px;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
`

const ShadowedP = styled.p`
text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
font-size: 16px;
`




function Welcome() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      console.log(entry.isIntersecting)
      setIsShown(entry.isIntersecting);
      
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateXFromLeft = isShown ? '35%' : '-500%';
  const translateXFromRight = isShown ? '-35%' : '500%';
  return (
    <WelcomeWrapper>
       <VidWrapper>
       <BackgroundVideo className="bgvid" src={bgvideo} autoPlay loop muted />
      </VidWrapper>
      <div className="content">
      <Overlay>
      <ShadowedH>Hi I'm Kalen</ShadowedH>
      <p>Welcome to my website!</p>
      </Overlay>
      </div>
      <Spacer />
      <HorizontalContainer>
        <Image src={bgimage} alt="Background Photo" style={{
          transition: `transform 2000ms`,
          transform: `translateX(${translateXFromLeft})`,
        }}/>
        <VerticalContainer ref={wrapperRef}>

        <Intro style={{
          transition: `transform 300ms`,
          transform: `translateX(${translateXFromRight})`,
        }}>
          <ShadowedH>My introduction</ShadowedH>
          <SmallSpacer />
          <ShadowedP>
            I'm a full stack web, and game developer.
            I came from Vancouver BC, and I am currently looking for work in Montreal Quebec.
            I've been sharpening my skills for quite some time now, and did my first game dev bootcamp 
            about 2 decades ago and haven't stopped learning since! I've done various courses
            like Khan academy's intro JavaScript course, 
            Concordia Bootcamp's Full Stack Web Development Course,
            Josh Comeau's Joy of React,
            and have a ton of experience in Godot Engine.
            I also use GNU/Linux as my main desktop.
          </ShadowedP>
          <SmallSpacer />
        </Intro>
        <Intro style={{
          transition: `transform 2600ms`,
          transform: `translateX(${translateXFromRight})`,
        }}>
          <ShadowedH>In short...</ShadowedH>
          <SmallSpacer />
          <ShadowedP>
            My strongest skill sets are React, JavaScript, Python, and GDScript.
            Take a look at some of my projects, and feel free to send me 
            a message!
          </ShadowedP>
          <SmallSpacer />
        </Intro>
        </VerticalContainer>
      </HorizontalContainer>
      <ContactComponent />
      <Navbar aboutRef={wrapperRef} />
    </WelcomeWrapper>
  );
}

export default Welcome;