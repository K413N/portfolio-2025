'use client'
import React from "react";
import styled from "styled-components";
import BackgroundVideo from 'next-video/background-video';
import bgvideo from '../../../assets/bgvideo.mp4';
import bgimage from '../../../assets/cropped_photo.png';
import Image from "next/image";
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
height: 380px;
`

const SmallSpacer = styled.div`
height: 32px;
`

const Intro = styled.div`
border-color: rgba(50, 50, 50, 0.5);
border-style: solid;
box-shadow:
  6px 6px red,
  -1em 0 0.7em gold;
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
padding: 36px;
height: 100%;
width: 600px;
margin: 100px;
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
justify-content: space-between;
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

  const translateXFromLeft = isShown ? '0%' : '-500%';
  const translateXFromRight = isShown ? '0%' : '500%';
  return (
    <WelcomeWrapper>
       <VidWrapper>
       <BackgroundVideo className="bgvid" src={bgvideo} autoPlay loop muted />
      </VidWrapper>
      <div className="content">
      <Overlay>
      <h1>Hi I'm Kalen</h1>
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
          <h1>My introduction</h1>
          <SmallSpacer />
          <p>
            I'm a full stack web developer.
            I came from Vancouver BC, but I am looking for work in Montreal Quebec.
            I've been sharpening my skills for quite some time now, and did my first game dev bootcamp 
            about 2 decades ago and haven't stopped learning since.
          </p>
          <SmallSpacer />
        </Intro>
        <Intro style={{
          transition: `transform 2600ms`,
          transform: `translateX(${translateXFromRight})`,
        }}>
          <h1>A little bit about me</h1>
          <SmallSpacer />
          <p>
            My strongest skill sets are React, JavaScript, and GDScript.
            I am very passionate about my projects, and I love learning 
            and collaborating with other devs to improve.
            Take a look at some of my projects, and feel free to send me 
            a message!
          </p>
          <SmallSpacer />
        </Intro>
        </VerticalContainer>
      </HorizontalContainer>
        <Spacer />
    </WelcomeWrapper>
  );
}

export default Welcome;