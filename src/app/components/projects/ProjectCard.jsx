import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ image, demo, name, description, href }) {
    return (
        <>
            <div className="card bg-base-100 shadow-xl sm:w-3/4 transform hover:scale-125">
                <figure>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2">
                        <h2 className="sm:card-title text-lg">{name}</h2>
                        <div className="card-actions">
                            <a href={href}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-7"
                                />
                            </a>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
