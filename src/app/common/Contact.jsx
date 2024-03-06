import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "./contactInfo";

function Contact() {
    return (
        <div className="static grid grid-col-3">
            <div className="flex flex-col gap-5 absolute top-1/3 right-5">
                {icons.map((icon) => (
                    <a key={icon.icon} href={icon.href}>
                        <FontAwesomeIcon
                            key={icon.icon}
                            icon={icon.icon}
                            className="w-16 h-10 transform hover:scale-150"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;
