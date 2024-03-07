import React from "react";
import Title from "../common/Title";
import BubbleTea from "../components/skills/BubbleTea";
import SkillList from "../components/skills/SkillList";
// import SkillIcon from "../components/skills/SkillIcon";

function Skills() {
    return (
        <>
            <div className="flex flex-col justify-center items-center sm:m-auto">
                <Title text="Skill" />
                {/* <div className="flex flex-row">
                    <div>123</div>
                    <div>123</div>
                </div> */}
                {/* <div className="flex gap-4"> */}
                {/* <SkillIcon /> */}
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
