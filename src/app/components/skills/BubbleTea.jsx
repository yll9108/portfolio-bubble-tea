import React from "react";
import "./bubbletea.css";
import { bubbleSkills } from "./bubbleSkills";

function BubbleTea() {
    return (
        <div className="bubbleTeaGrid">
            <div className="cup"></div>
            <div className="cupShadow"></div>
            <div className="lid"></div>
            <div className="straw"></div>
            <div className="wave"></div>
            {/* <div className="logo text-2xl">
                Chill on <span>BOBA</span>
                Coding with <span>YEN</span>
            </div> */}
            {bubbleSkills.map((skill, index) => (
                <div className={`pearl pearl${index + 1}`} key={index}>
                    <img key={skill.alt} src={skill.src} alt={skill.alt} />
                </div>
            ))}
            <div className="pearl pearl18"></div>
            <div className="pearl pearl19"></div>
            <div className="pearl pearl20"></div>
            <div className="pearl pearl21"></div>
        </div>
    );
}

export default BubbleTea;
