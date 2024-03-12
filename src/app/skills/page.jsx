import React from "react";
import Title from "../common/Title";
import BubbleTea from "../components/skills/BubbleTea";
import SkillList from "../components/skills/SkillList";

function Skills() {
    return (
        <>
            <div className="flex flex-col justify-center items-center sm:m-auto">
                <Title text="[SKILL]" />
                <div className="sm:flex">
                    <SkillList />
                    <BubbleTea />
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Skills;
