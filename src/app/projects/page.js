import React from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import { getProjectInfo } from "./projects";

async function Projects () {
    return(
        <div>
            <ProjectCarousel />
        </div>
    )
}

export default Projects;