import React from "react";
import Title from "../common/Title";
import ProjectCard from "../components/projects/ProjectCard";
import { projectDetail } from "../components/projects/projectDetails";

function Projects() {
    return (
        <>
            <div className="flex flex-col justify-center sm:mt-20 mx-auto w-2/3 space-y-7">
                <Title text="[PROJECTS]" />
                <div className="flex flex-wrap gap-10 justify-center">
                    {projectDetail.map((project) => (
                        <ProjectCard
                            key={project.name}
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            href={project.href}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
