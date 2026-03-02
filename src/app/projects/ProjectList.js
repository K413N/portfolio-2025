'use client'
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

/* ========================
   ANIMATIONS
   ======================== */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const borderGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

/* ========================
   LAYOUT
   ======================== */

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  padding: 4rem 3vw 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(60, 100, 255, 0.1) 0%,
    rgba(120, 0, 255, 0.05) 30%,
    transparent 70%
  );
  border-bottom: 1px solid rgba(80, 140, 255, 0.08);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 200, 255, 0.35),
      rgba(120, 0, 255, 0.25),
      rgba(0, 200, 255, 0.35),
      transparent
    );
    animation: ${borderGlow} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 0.4rem;
  letter-spacing: -0.02em;
  text-shadow:
    0 0 20px rgba(60, 140, 255, 0.3),
    0 0 40px rgba(60, 140, 255, 0.1);
`;

const PageSubtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: rgba(140, 180, 255, 0.4);
  margin: 0;
  max-width: 500px;
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

const ProjectCount = styled.span`
  font-size: 0.75rem;
  color: rgba(0, 200, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-top: 0.5rem;
`;

/* ========================
   FILTER BAR
   ======================== */

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.5rem 3vw;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FilterTag = styled.button`
  padding: 0.4em 1em;
  font-size: 0.78rem;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $active }) =>
    $active ? 'rgba(0, 200, 255, 0.15)' : 'rgba(60, 140, 255, 0.05)'};
  border: 1px solid ${({ $active }) =>
    $active ? 'rgba(0, 200, 255, 0.5)' : 'rgba(80, 140, 255, 0.12)'};
  color: ${({ $active }) =>
    $active ? 'rgba(0, 220, 255, 0.95)' : 'rgba(140, 180, 255, 0.5)'};
  box-shadow: ${({ $active }) =>
    $active ? '0 0 12px rgba(0, 200, 255, 0.15)' : 'none'};
  text-shadow: ${({ $active }) =>
    $active ? '0 0 8px rgba(0, 200, 255, 0.3)' : 'none'};

  &:hover {
    border-color: rgba(0, 200, 255, 0.35);
    color: rgba(0, 220, 255, 0.8);
    background: rgba(0, 200, 255, 0.08);
  }
`;

/* ========================
   PROJECT GRID
   ======================== */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1rem 3vw 4rem;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 4vw 4rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem 1rem 3rem;
  }
`;

/* ========================
   PROJECT CARD
   ======================== */

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ index }) => index * 0.08}s;
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 200px 1fr;
  background: linear-gradient(
    135deg,
    rgba(40, 80, 200, 0.07),
    rgba(120, 0, 255, 0.03),
    rgba(40, 80, 200, 0.02)
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(80, 140, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 0 15px rgba(60, 120, 255, 0.05),
    0 4px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(120, 180, 255, 0.06);
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 200, 255, 0.35);
    box-shadow:
      0 0 25px rgba(0, 180, 255, 0.12),
      0 0 50px rgba(80, 0, 255, 0.06),
      0 12px 40px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(0, 200, 255, 0.1);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CardThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 180px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(60, 120, 255, 0.08),
    rgba(120, 0, 255, 0.04)
  );

  @media (max-width: 600px) {
    min-height: 200px;
  }
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 60%,
    rgba(2, 0, 20, 0.6) 100%
  );
  z-index: 1;
  pointer-events: none;

  @media (max-width: 600px) {
    background: linear-gradient(
      180deg,
      transparent 50%,
      rgba(2, 0, 20, 0.6) 100%
    );
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  text-shadow: 0 0 15px rgba(60, 140, 255, 0.15);
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(200, 210, 240, 0.5);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.3rem;
`;

const CardTag = styled.span`
  padding: 0.2em 0.6em;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 999px;
  background: rgba(0, 200, 255, 0.06);
  border: 1px solid rgba(0, 200, 255, 0.12);
  color: rgba(0, 200, 255, 0.6);
`;

const CardStatus = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ status }) => {
    if (status === 'Released') return 'rgba(0, 255, 140, 0.7)';
    if (status === 'Complete') return 'rgba(0, 200, 255, 0.7)';
    return 'rgba(255, 200, 0, 0.7)';
  }};
  text-shadow: 0 0 8px ${({ status }) => {
    if (status === 'Released') return 'rgba(0, 255, 140, 0.2)';
    if (status === 'Complete') return 'rgba(0, 200, 255, 0.2)';
    return 'rgba(255, 200, 0, 0.2)';
  }};
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const ViewProject = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 200, 255, 0.4);
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  ${Card}:hover & {
    color: rgba(0, 200, 255, 0.8);
    text-shadow: 0 0 8px rgba(0, 200, 255, 0.3);
  }
`;

const DummyThumbnail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: rgba(80, 140, 255, 0.15);
`;

/* ========================
   COMPONENT
   ======================== */

function ProjectList({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <Container>
      <Header>
        <PageTitle>Projects</PageTitle>
        <PageSubtitle>A collection of things I've built and explored</PageSubtitle>
        <Divider />
        <ProjectCount>{projects.length} Projects</ProjectCount>
      </Header>

      <FilterBar>
        {allTags.map((tag) => (
          <FilterTag
            key={tag}
            $active={activeFilter === tag}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </FilterTag>
        ))}
      </FilterBar>

      <Grid>
        {filtered.map((project, i) => (
          <CardLink
            href={`/projects/${project.id}`}
            key={project.id}
            index={i}
          >
            <Card>
              <CardThumbnail>
                {project.thumbnail ? (
                  <>
                    <Image
                      src={projects.thumbnail}
                      alt={`${project.name} thumbnail`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <ThumbnailOverlay />
                  </>
                ) : (
                  <DummyThumbnail>⬡</DummyThumbnail>
                )}
              </CardThumbnail>

              <CardBody>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>

                {project.tags?.length > 0 && (
                  <CardTags>
                    {project.tags.slice(0, 4).map((tag) => (
                      <CardTag key={tag}>{tag}</CardTag>
                    ))}
                  </CardTags>
                )}

                <CardFooter>
                  {project.status && (
                    <CardStatus status={project.status}>
                      {project.status}
                    </CardStatus>
                  )}
                  <ViewProject>
                    View Project →
                  </ViewProject>
                </CardFooter>
              </CardBody>
            </Card>
          </CardLink>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectList;