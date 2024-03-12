import React from "react";
import { bubbleSkills } from "./bubbleSkills";
import "./skillList.css";
import Title from "@/app/common/Title";

function SkillList() {
    // let languageDisplayed = false;
    // let frameworksDisplayed = false;
    // let databasesDisplayed = false;

    return (
        <>
            <div className="skillListContainer flex flex-wrap  flex-col sm:gap-1 m-auto">
                {bubbleSkills.map((skill, index) => (
                    <div className="flex gap-2" key={index}>
                        <img className="h-10" key={index} src={skill.src} />
                        <span className="flex items-center" key={index}>
                            {skill.alt}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SkillList;
{
    /* {bubbleSkills.map((skill, index) => (
    <div key={index}>
        {skill.category === "Frameworks" &&
        !frameworksDisplayed ? (
            <>
                <p>Frameworks</p>
                {(frameworksDisplayed = true)}
            </>
        ) : skill.category === "Languages" &&
          !languageDisplayed ? (
            <>
                <p>Languages</p>
                {(languageDisplayed = true)}
            </>
        ) : skill.category === "Databases" &&
          !databasesDisplayed ? (
            <>
                <p>DB</p>
                {(databasesDisplayed = true)}
            </>
        ) : null}
        <div className="flex gap-2">
            <img
                className="h-10"
                src={skill.src}
                alt={skill.alt}
            />
            <p>{skill.alt}</p>
        </div>
    </div>
))} */
}
{
    /* <div>
    <div>Library</div>
    <div className="flex gap-2">
        <div className="bg-red-100">SkillList</div>
        <div className="bg-red-100">icon</div>
    </div>
    <div className="flex">
        <div className="bg-red-100">SkillList</div>
        <div className="bg-red-100">icon</div>
    </div>
</div>
<div>
    <div>Not Library</div>
    <div className="flex gap-2">
        <div className="bg-red-100">SkillList</div>
        <div className="bg-red-100">icon</div>
    </div>
    <div className="flex">
        <div className="bg-red-100">SkillList</div>
        <div className="bg-red-100">icon</div>
    </div>
</div> */
}
