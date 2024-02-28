import React from "react";
import "./skillIcon.css";
import { bubbleSkills } from "./bubbleSkills";

function SkillIcon() {
    return (
        <>
            <ul className="skillGird">
                {bubbleSkills.map((skill, index) => (
                    <li className={`pearl pearl${index + 1}`} key={index}>
                        <img key={skill.alt} src={skill.src} alt={skill.alt} />
                    </li>
                ))}
            </ul>
        </>
    );
}

{
    /* {bubbleSkills.map((skill, index) => (
                <div className={`pearl pearl${index + 1}`} key={index}>
                    <img key={skill.alt} src={skill.src} alt={skill.alt} />
                </div>
            ))} */
}

export default SkillIcon;
