'use client'
import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import BackgroundVideo from 'next-video/background-video';
import bgvideo from '../../../assets/bgvideo.mp4';
import bgimage from '../../../assets/cropped_photo.png';
import Image from "next/image";
import './bgvidstyles.css';
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import Link from "next/link";

/* ───────── Animations ───────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-80px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(80px); }
  to   { opacity: 1; transform: translateX(0); }
`;

/* ───────── Reusable visibility mixin ───────── */
const revealAnimation = (animation, duration = "0.8s", delay = "0s") => css`
  opacity: 0;
  &.visible {
    animation: ${animation} ${duration} ${delay} ease-out forwards;
  }
`;

/* ───────── Layout ───────── */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0a14;
  min-height: 100vh;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VidWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #0e0e1a;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 10, 20, 0) 60%,
      rgba(10, 10, 20, 1) 100%
    );
    pointer-events: none;
  }
`;

const HeroOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 32px;
  border-radius: 20px;
  background: rgba(10, 10, 20, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  animation: ${fadeUp} 1s ease-out;

  h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px;
    letter-spacing: -0.02em;
  }

  p {
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: ${fadeUp} 1s 0.6s ease-out forwards;
  opacity: 0;

  &::after {
    content: "";
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
  }
`;

/* ───────── About Section ───────── */
const AboutSection = styled.section`
  width: 100%;
  max-width: 1100px;
  padding: 80px 24px 60px;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 16px 40px;
    gap: 32px;
  }
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
  ${revealAnimation(slideFromLeft, "0.9s")}

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledProfileImage = styled(Image)`
  border-radius: 20px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
  width: clamp(200px, 30vw, 320px);
  height: auto;
`;

const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-width: 0;
`;

const GlassCard = styled.div`
  background: rgba(15, 16, 36, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: clamp(24px, 4vw, 36px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  ${({ $delay }) => revealAnimation(slideFromRight, "0.8s", $delay || "0s")}

  h2 {
    font-size: clamp(1.25rem, 3vw, 1.6rem);
    font-weight: 700;
    color: #fff;
    margin: 0 0 12px;
    letter-spacing: -0.01em;
  }

  p {
    font-size: clamp(0.88rem, 2vw, 1rem);
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0;
  }
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  margin: 4px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(130, 106, 251, 0.15);
  border: 1px solid rgba(130, 106, 251, 0.25);
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`;

/* ───────── Contact Section Wrapper ───────── */
const ContactSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 16px 120px;
`;

/* ───────── Bottom Spacer for Navbar ───────── */
const NavSpacer = styled.div`
  height: 80px;
`;

/* ───────── Hook: useInView ───────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // only trigger once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/* ───────── Component ───────── */
function Welcome() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [imageRef, imageVisible] = useInView();
  const [card1Ref, card1Visible] = useInView();
  const [card2Ref, card2Visible] = useInView();

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <VidWrapper>
          <BackgroundVideo className="bgvid" src={bgvideo} autoPlay loop muted />
        </VidWrapper>
        <HeroOverlay>
          <h1>Hi, I'm Kalen</h1>
          <p>Welcome to my website!</p>
        </HeroOverlay>
        <ScrollIndicator>Scroll</ScrollIndicator>
      </HeroSection>

      {/* ── About ── */}
      <AboutSection ref={aboutRef}>
        <ProfileImageWrapper
          ref={imageRef}
          className={imageVisible ? "visible" : ""}
        >
          <StyledProfileImage
            src={bgimage}
            alt="Photo of Kalen"
            priority
          />
        </ProfileImageWrapper>

        <CardsColumn>
          <GlassCard
            ref={card1Ref}
            className={card1Visible ? "visible" : ""}
            $delay="0.1s"
          >
            <h2>My Introduction</h2>
            <p>
              I'm a full-stack web and game developer from Vancouver, BC,
              currently looking for work in Montreal, Quebec. I did my first
              game dev bootcamp about two decades ago and haven't stopped
              learning since! I've completed Khan Academy's intro JavaScript
              course, Concordia Bootcamp's Full-Stack Web Development
              program, Josh Comeau's Joy of React, and have extensive
              experience with Godot Engine. I also use GNU/Linux as my
              daily driver.
            </p>
          </GlassCard>

          <GlassCard
            ref={card2Ref}
            className={card2Visible ? "visible" : ""}
            $delay="0.25s"
          >
            <h2>In Short…</h2>
            <p>
              Take a look at some of my projects and feel free to send me a
              message!
            </p>
            <SkillsRow>
              {["React", "JavaScript", "Python", "GDScript", "Next.js", "Linux"].map(
                (skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                )
              )}
            </SkillsRow>
          </GlassCard>
        </CardsColumn>
      </AboutSection>

      <HeroOverlay ref={projectsRef}>
        <Link href="/projects"><h1>Projects</h1></Link>
      </HeroOverlay>
      <ProjectCarousel />

      {/* ── Contact ── */}
      <ContactSection>
        <ContactComponent />
      </ContactSection>

      <NavSpacer />
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} />
    </PageWrapper>
  );
}

export default Welcome;