import React from "react";
import Title from "../common/Title";
import BubbleTea from "./BubbleTea";
import SkillIcon from "./SkillIcon";

function Skills() {
    return (
        <>
            <div className="flex flex-col">
                <Title text="Skill" />
                <div className="flex gap-4">
                    <SkillIcon />
                    <BubbleTea />
                </div>
            </div>
        </>
    );
}

export default Skills;
