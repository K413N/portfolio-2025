'use client'
import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/app/projects/projects";

const CarouselWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeaderLink = styled(Link)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: rgba(0, 200, 255, 0.9);
    text-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
  }

  &::after {
    content: '→';
    font-size: 0.8em;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NavLink = styled(Link)`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 5em;
  width: 6em;
  font-size: 3rem;
  border-radius: 14px;
  flex-shrink: 0;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.03)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: 
    border-color 0.3s ease, 
    transform 0.3s ease, 
    box-shadow 0.3s ease,
    background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.06);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(1.02);
    border-color: rgba(255, 255, 255, 0.35);
  }
`;

const CardTitle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.6)
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.9);
  padding: 24px 10px 10px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 3;

  ${NavLink}:hover & {
    transform: translateY(0);
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ProjectCard({ project }) {
  return (
    <NavLink href={`/projects/${project.id}`}>
      <CardImage
        src={project.thumbnail}
        alt={`${project.name} project thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw, 192px"
      />
      <CardTitle>{project.name}</CardTitle>
    </NavLink>
  );
}

function ProjectCarousel() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return null;
  }

  return (
    <CarouselWrapper>
      <HeaderLink href="/projects">
        Projects
      </HeaderLink>
      
      <section className="carousel" aria-label="Project showcase">
        <div className="group">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <div className="group" aria-hidden>
          {projects.map((project) => (
            <ProjectCard project={project} key={`dup-${project.id}`} />
          ))}
        </div>
      </section>
    </CarouselWrapper>
  );
}

export default ProjectCarousel;