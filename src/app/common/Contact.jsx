import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "./contactInfo";

function Contact() {
    return (
        <div className="flex flex-col gap-5 absolute top-1/3 right-5">
            {icons.map((icon, index) => (
                <a key={index} href={icon.href}>
                    <FontAwesomeIcon
                        key={index}
                        icon={icon.icon}
                        className="h-10 transform hover:scale-150 my-2"
                    />
                </a>
            ))}
        </div>
    );
}

export default Contact;
