import React from "react";
import { getProjectInfo } from "../projects";

async function ProjectPage ( {params} ) {
    const {projectId} = await params;
    const projectInfo = await getProjectInfo(projectId)
    return(
        <div>
            <div>Project: {projectInfo.name}</div>
            <div>{projectInfo.description}</div>
        </div>
    )
}

export default ProjectPage;