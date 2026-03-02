import React from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import { getProjectInfo } from "./projects";
import Link from "next/link";

async function Projects () {
    return(
        <div>
            <Link
          href="/"
          style={{
            color: "rgba(120, 180, 255, 0.5)",
            textDecoration: "none",
            fontSize: "0.85rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4em",
            transition: "color 0.2s ease, text-shadow 0.2s ease",
          }}
        >
          ← Home
        </Link>
            <ProjectCarousel />
        </div>
    )
}

export default Projects;