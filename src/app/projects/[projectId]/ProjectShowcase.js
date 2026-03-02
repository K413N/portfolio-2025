'use client'
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

/* ========================
   ANIMATIONS
   ======================== */

const borderGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ========================
   LAYOUT
   ======================== */

const Container = styled.article`
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const GlassPanel = styled.section`
  background: linear-gradient(
    135deg,
    rgba(40, 80, 200, 0.08),
    rgba(120, 0, 255, 0.04),
    rgba(40, 80, 200, 0.02)
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(80, 140, 255, 0.2);
  border-radius: 16px;
  box-shadow:
    0 0 15px rgba(60, 120, 255, 0.08),
    0 0 30px rgba(100, 60, 255, 0.04),
    0 4px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(120, 180, 255, 0.1);
  padding: 2rem;
  position: relative;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    border-color: rgba(80, 160, 255, 0.35);
    box-shadow:
      0 0 20px rgba(60, 120, 255, 0.15),
      0 0 40px rgba(100, 60, 255, 0.08),
      0 4px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(120, 180, 255, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.4rem;
    border-radius: 12px;
  }
`;

const NeonPanel = styled(GlassPanel)`
  border: 1px solid rgba(0, 200, 255, 0.25);
  box-shadow:
    0 0 20px rgba(0, 180, 255, 0.1),
    0 0 40px rgba(80, 0, 255, 0.06),
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(0, 200, 255, 0.12);

  &:hover {
    border-color: rgba(0, 200, 255, 0.45);
    box-shadow:
      0 0 25px rgba(0, 180, 255, 0.2),
      0 0 50px rgba(80, 0, 255, 0.1),
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(0, 200, 255, 0.2);
  }
`;

const Section = styled.div`
  width: 100%;
  padding: 1rem 3vw;

  @media (min-width: 1400px) {
    padding: 1rem 4vw;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const MediaRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FourColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ========================
   HERO HEADER
   ======================== */

const HeroSection = styled.div`
  width: 100%;
  padding: 5rem 3vw 3.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(60, 100, 255, 0.12) 0%,
    rgba(120, 0, 255, 0.06) 30%,
    transparent 70%
  );
  border-bottom: 1px solid rgba(80, 140, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 200, 255, 0.4),
      rgba(120, 0, 255, 0.3),
      rgba(0, 200, 255, 0.4),
      transparent
    );
    animation: ${borderGlow} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 0.3rem;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  text-shadow:
    0 0 20px rgba(60, 140, 255, 0.3),
    0 0 40px rgba(60, 140, 255, 0.1);
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.15rem);
  color: rgba(140, 180, 255, 0.5);
  margin: 0;
  max-width: 650px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
`;

const Tag = styled.span`
  padding: 0.3em 0.8em;
  font-size: 0.78rem;
  font-weight: 500;
  border-radius: 999px;
  background: rgba(60, 140, 255, 0.08);
  border: 1px solid rgba(0, 200, 255, 0.2);
  color: rgba(120, 200, 255, 0.8);
  text-shadow: 0 0 8px rgba(0, 200, 255, 0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 200, 255, 0.5);
    box-shadow: 0 0 12px rgba(0, 200, 255, 0.15);
  }
`;

const MetaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const MetaLabel = styled.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(100, 160, 255, 0.3);
`;

const MetaValue = styled.span`
  font-size: 0.95rem;
  color: rgba(200, 220, 255, 0.85);
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  border-radius: 1px;
  margin: 0.8rem 0;
  background: linear-gradient(
    90deg,
    rgba(0, 200, 255, 0.5),
    rgba(120, 0, 255, 0.5),
    rgba(0, 200, 255, 0.5)
  );
  background-size: 200% 100%;
  animation: ${shimmer} 3s linear infinite;
`;

/* ========================
   VIDEO
   ======================== */

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 200, 255, 0.15);
  box-shadow:
    0 0 20px rgba(0, 150, 255, 0.08),
    0 4px 20px rgba(0, 0, 0, 0.3);

  & > video,
  & > iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const SectionLabel = styled.h2`
  font-weight: 600;
  color: rgba(0, 200, 255, 0.7);
  margin: 0 0 1rem;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-shadow: 0 0 10px rgba(0, 200, 255, 0.2);
`;

/* ========================
   DESCRIPTION
   ======================== */

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(200, 210, 240, 0.6);
  margin: 0;
`;

/* ========================
   FEATURES
   ======================== */

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  font-size: 0.9rem;
  color: rgba(200, 210, 240, 0.65);
  padding: 0.6em 0.9em;
  background: rgba(60, 120, 255, 0.04);
  border: 1px solid rgba(80, 140, 255, 0.08);
  border-left: 2px solid rgba(0, 200, 255, 0.3);
  border-radius: 4px 8px 8px 4px;
  display: flex;
  align-items: center;
  gap: 0.6em;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:hover {
    border-left-color: rgba(0, 200, 255, 0.6);
    background: rgba(60, 120, 255, 0.06);
  }

  &::before {
    content: '▸';
    color: rgba(0, 200, 255, 0.4);
    flex-shrink: 0;
  }
`;

/* ========================
   GALLERY
   ======================== */

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  flex: 1;
  min-height: 280px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    min-height: 200px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(80, 140, 255, 0.1);
  background: rgba(40, 80, 200, 0.04);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    border-color: rgba(0, 200, 255, 0.35);
    box-shadow:
      0 0 15px rgba(0, 180, 255, 0.12),
      0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const DummyImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: rgba(100, 160, 255, 0.2);
  background: linear-gradient(
    135deg,
    rgba(60, 120, 255, 0.06),
    rgba(120, 0, 255, 0.03),
    rgba(60, 120, 255, 0.02)
  );
`;

/* ========================
   LIGHTBOX
   ======================== */

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(2, 0, 15, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;

const LightboxImageWrapper = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  width: 1000px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 200, 255, 0.2);
  box-shadow:
    0 0 30px rgba(0, 150, 255, 0.15),
    0 0 60px rgba(100, 0, 255, 0.08),
    0 16px 64px rgba(0, 0, 0, 0.5);
  cursor: default;
`;

const LightboxNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
  background: rgba(40, 80, 200, 0.15);
  border: 1px solid rgba(0, 200, 255, 0.2);
  color: rgba(0, 220, 255, 0.9);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 1001;
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(40, 80, 200, 0.25);
    border-color: rgba(0, 200, 255, 0.5);
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.2);
  }
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(40, 80, 200, 0.15);
  border: 1px solid rgba(0, 200, 255, 0.2);
  color: rgba(0, 220, 255, 0.9);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  z-index: 1001;
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(200, 40, 80, 0.2);
    border-color: rgba(255, 60, 100, 0.4);
    box-shadow: 0 0 15px rgba(255, 60, 100, 0.15);
  }
`;

const ImageCounter = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: rgba(0, 200, 255, 0.5);
  background: rgba(2, 0, 15, 0.6);
  padding: 0.3em 0.8em;
  border-radius: 999px;
  border: 1px solid rgba(0, 200, 255, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1001;
`;

/* ========================
   LINKS
   ======================== */

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.6em 1.2em;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(0, 220, 255, 0.85);
  background: rgba(0, 150, 255, 0.06);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(0, 150, 255, 0.12);
    border-color: rgba(0, 200, 255, 0.45);
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.12);
  }
`;

/* ========================
   TECH STACK
   ======================== */

const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 0.9em;
  font-size: 0.82rem;
  color: rgba(200, 220, 255, 0.75);
  background: rgba(60, 120, 255, 0.04);
  border: 1px solid rgba(80, 140, 255, 0.1);
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ glowColor }) => glowColor || 'rgba(0, 200, 255, 0.3)'};
    box-shadow: 0 0 12px ${({ glowColor }) => glowColor ? glowColor + '33' : 'rgba(0, 200, 255, 0.1)'};
  }
`;

const StackDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ color }) => color || 'rgba(0, 200, 255, 0.5)'};
  box-shadow: 0 0 6px ${({ color }) => color || 'rgba(0, 200, 255, 0.3)'};
  flex-shrink: 0;
`;

/* ========================
   STATS
   ======================== */

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 1rem;
  text-align: center;
`;

const StatValue = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1;
  text-shadow: 0 0 20px rgba(0, 180, 255, 0.25);
`;

const StatLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(100, 180, 255, 0.35);
  margin-top: 0.4rem;
`;

/* ========================
   DUMMY DATA
   ======================== */

const DUMMY_IMAGES = [
  { src: null, alt: "Screenshot 1" },
  { src: null, alt: "Screenshot 2" },
  { src: null, alt: "Screenshot 3" },
  { src: null, alt: "Screenshot 4" },
  { src: null, alt: "Screenshot 5" },
  { src: null, alt: "Screenshot 6" },
];

/* ========================
   COMPONENTS
   ======================== */

function LightboxModal({ images, index, onClose, onNav }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };

    // Prevent background scrolling while lightbox is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNav]);

  if (!mounted) return null;

  const current = images[index];

  return createPortal(
    <LightboxOverlay onClick={onClose}>
      <LightboxImageWrapper onClick={(e) => e.stopPropagation()}>
        {current.src ? (
          <Image
            src={current.src}
            alt={current.alt || `Screenshot ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <DummyImage style={{ fontSize: "1.2rem" }}>
            {current.alt || `Screenshot ${index + 1}`}
          </DummyImage>
        )}
        <LightboxNav direction="prev" onClick={() => onNav(-1)}>‹</LightboxNav>
        <LightboxNav direction="next" onClick={() => onNav(1)}>›</LightboxNav>
        <LightboxClose onClick={onClose}>✕</LightboxClose>
        <ImageCounter>{index + 1} / {images.length}</ImageCounter>
      </LightboxImageWrapper>
    </LightboxOverlay>,
    document.body
  );
}

function ProjectShowcase({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = project.images?.length > 0 ? project.images : DUMMY_IMAGES;

  const handleNav = (direction) => {
    setLightboxIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  return (
    <Container>

      {/* HERO */}
      <HeroSection>
        <Title>{project.name}</Title>
        {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
        <Divider />

        {project.tags?.length > 0 && (
          <TagList>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
        )}

        {(project.role || project.timeline || project.status) && (
          <MetaGrid>
            {project.role && (
              <MetaItem>
                <MetaLabel>Role</MetaLabel>
                <MetaValue>{project.role}</MetaValue>
              </MetaItem>
            )}
            {project.timeline && (
              <MetaItem>
                <MetaLabel>Timeline</MetaLabel>
                <MetaValue>{project.timeline}</MetaValue>
              </MetaItem>
            )}
            {project.status && (
              <MetaItem>
                <MetaLabel>Status</MetaLabel>
                <MetaValue>{project.status}</MetaValue>
              </MetaItem>
            )}
          </MetaGrid>
        )}
      </HeroSection>

      {/* OVERVIEW */}
      <Section>
        <GlassPanel>
          <SectionLabel>Overview</SectionLabel>
          <Description>{project.description}</Description>
        </GlassPanel>
      </Section>

      {/* VIDEO + GALLERY */}
      <Section>
        <MediaRow>
          <NeonPanel>
            <SectionLabel>Developer Commentary</SectionLabel>
            <VideoWrapper>
              <video
                src={project.videoUrl}
                controls
                preload="metadata"
                poster={project.videoPoster}
              />
            </VideoWrapper>
          </NeonPanel>

          <NeonPanel style={{ display: "flex", flexDirection: "column" }}>
            <SectionLabel>Gallery</SectionLabel>
            <GalleryGrid>
              {images.map((image, i) => (
                <Thumbnail key={i} onClick={() => setLightboxIndex(i)}>
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt || `Screenshot ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <DummyImage>{image.alt || `Image ${i + 1}`}</DummyImage>
                  )}
                </Thumbnail>
              ))}
            </GalleryGrid>
          </NeonPanel>
        </MediaRow>
      </Section>

      {/* STATS */}
      {project.stats?.length > 0 && (
        <Section>
          <FourColumn>
            {project.stats.map((stat) => (
              <NeonPanel key={stat.label} style={{ padding: "0.5rem" }}>
                <StatCard>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </NeonPanel>
            ))}
          </FourColumn>
        </Section>
      )}

      {/* FEATURES + TECH */}
      {(project.features?.length > 0 || project.techStack?.length > 0) && (
        <Section>
          <TwoColumn>
            {project.features?.length > 0 && (
              <GlassPanel>
                <SectionLabel>Key Features</SectionLabel>
                <FeatureList>
                  {project.features.map((feature) => (
                    <FeatureItem key={feature}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </GlassPanel>
            )}

            {project.techStack?.length > 0 && (
              <GlassPanel>
                <SectionLabel>Tech Stack</SectionLabel>
                <StackGrid>
                  {project.techStack.map((tech) => (
                    <StackItem key={tech.name} >
                      <StackDot color={tech.color} />
                      {tech.name}
                    </StackItem>
                  ))}
                </StackGrid>
              </GlassPanel>
            )}
          </TwoColumn>
        </Section>
      )}

      {/* CHALLENGES + LESSONS */}
      {(project.challenges || project.lessons) && (
        <Section>
          <TwoColumn>
            {project.challenges && (
              <GlassPanel>
                <SectionLabel>Challenges</SectionLabel>
                <Description>{project.challenges}</Description>
              </GlassPanel>
            )}
            {project.lessons && (
              <GlassPanel>
                <SectionLabel>What I Learned</SectionLabel>
                <Description>{project.lessons}</Description>
              </GlassPanel>
            )}
          </TwoColumn>
        </Section>
      )}

      {/* LINKS */}
      {project.links?.length > 0 && (
        <Section>
          <NeonPanel>
            <SectionLabel>Links</SectionLabel>
            <LinkRow>
              {project.links.map((link) => (
                <ProjectLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </ProjectLink>
              ))}
            </LinkRow>
          </NeonPanel>
        </Section>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={handleNav}
        />
      )}
    </Container>
  );
}

export default ProjectShowcase;