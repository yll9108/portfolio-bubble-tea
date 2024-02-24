import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const icons = [
        { icon: faGithub, href: "https://github.com/yll9108" },
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/yen-lun-l-39641025b/",
        },
        {
            icon: faSquareInstagram,
            href: "https://www.instagram.com/notetakingwithyen/",
        },
    ];

    return (
        <div className="static grid grid-col-3">
            <div className="flex flex-col gap-10 absolute top-1/3 right-5">
                {icons.map((icon) => (
                    <a key={icon.icon} href={icon.href}>
                        <FontAwesomeIcon
                            key={icon.icon}
                            icon={icon.icon}
                            className="w-16 h-10"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;
