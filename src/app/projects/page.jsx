import React from "react";
import Title from "../common/Title";
import ProjectCard from "../components/projects/ProjectCard";
import { projectDetail } from "../components/projects/projectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
    return (
        <>
            <div className="flex flex-col w-4/5 m-auto space-y-2">
                <Title text="[projects]" />
                <div className="flex flex-wrap gap-2">
                    {projectDetail.map((project) => (
                        <ProjectCard
                            key={project.name}
                            demo={project.demo}
                            name={project.name}
                            description={project.description}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
