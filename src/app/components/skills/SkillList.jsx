import React from "react";
import { bubbleSkills } from "./bubbleSkills";
import "./skillList.css";

function SkillList() {
    return (
        <>
            <div className="skillListContainer flex flex-wrap  flex-col sm:gap-1 m-auto">
                {bubbleSkills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                        <img className="h-10" src={skill.src} />
                        <span className="flex items-center">{skill.alt}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SkillList;
