import React from "react";
import Title from "../common/Title";
import BubbleTea from "./BubbleTea";

function Skills() {
    return (
        <>
            <div className="flex flex-col w-1/2">
                <Title text="Skill" />
                <BubbleTea />
            </div>
        </>
    );
}

export default Skills;
