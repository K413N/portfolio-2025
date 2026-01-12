'use client'
import React from "react";
import style from "./style.css"
import styled from "styled-components";
import Link from "next/link";

import beatclashThumbnail from './thumbnails/beatclash_thumbnail.png'
import gunbunniiThumbnail from './thumbnails/gunbunnii_thumbnail.png'
import proceduralGenThumbnail from './thumbnails/procedural_gen_thumbnail.png'
import proceduralNightmaresThumbnail from './thumbnails/procedural_nightmares_thumbnail.png'

const projects = [
    { href: "projects/beatclash", thumbnail: beatclashThumbnail, title: "Beatclash"},
    { href: "projects/gunbunnii", thumbnail: gunbunniiThumbnail, title: "GunBunnii"},
    { href: "projects/procgen", thumbnail: proceduralGenThumbnail, title: "Proc Gen"},
    { href: "projects/proceduralnightmares", thumbnail: proceduralNightmaresThumbnail, title: "Procedural Nightmares"},
]

const NavLink = styled(Link)`
    display: flex;
    height: 5em;
    width: 6em;
    background: blue;
    font-size: 3rem;
    text-align: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 32px;
    border: 5px solid gray;
    &:hover {
    color: gold;
    border-color: gold;
    }
    &:active {
    color: white;
    border-color: white;
    }
`

const CardTitle = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.7);
color: white;
padding: 10px;
text-align: center;
font-size: 1rem;
font-weight: bold;
`

const CardImage = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
`

function ProjectCarousel () {
    return(
        <div className="carousel" >
            <div className="group">
                {projects.map((project, index) => (
                    <NavLink href={project.href} key={index}>
                        <CardImage src={project.thumbnail.src} />
                        <CardTitle>{project.title}</CardTitle>
                    </NavLink>
                ))}
            </div>
            <div aria-hidden className="group">
                {projects.map((project, index) => (
                    <NavLink href={project.href} key={`dup-${index}`}>
                        <CardImage src={project.thumbnail.src} />
                        <CardTitle>{project.title}</CardTitle>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel;