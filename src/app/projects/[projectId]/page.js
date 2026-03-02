import React from "react";
import { getProjectInfo } from "../projects";
import ProjectShowcase from "./ProjectShowcase";
import Link from "next/link";

async function ProjectPage({ params }) {
  const { projectId } = await params;
  const projectInfo = await getProjectInfo(projectId);

  return (
    <main style={{
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      position: "relative",
    }}>
      <nav style={{
        width: "100%",
        padding: "1.2rem 2.5rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(2, 0, 20, 0.95), transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
        <Link
          href="/projects"
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
          ← Back to Projects
        </Link>
      </nav>
      <ProjectShowcase project={projectInfo} />
    </main>
  );
}

export default ProjectPage;