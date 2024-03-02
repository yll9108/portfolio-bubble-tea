import React from "react";
import Title from "../common/Title";
import BubbleTea from "../components/skills/BubbleTea";
import SkillIcon from "../components/skills/SkillIcon";

function Skills() {
    return (
        <>
            <div className="flex m-auto flex-col">
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
