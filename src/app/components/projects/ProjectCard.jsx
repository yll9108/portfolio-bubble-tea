import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ demo, name, description, href }) {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <iframe src={demo} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions"></div> */}
                    <div className="card-actions">
                        <a href={href}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className=" w-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
