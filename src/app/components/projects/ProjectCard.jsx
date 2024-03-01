import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ image, demo, name, description, href }) {
    return (
        <>
            <div className="card bg-base-100 shadow-xl w-3/4">
                <figure>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions"></div> */}
                    <div className="card-actions justify-end">
                        <a href={href}>
                            <FontAwesomeIcon icon={faGithub} className="w-10" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
