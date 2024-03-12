import React from "react";
import "./bubbletea.css";
import { bubbleSkills } from "./bubbleSkills";

function BubbleTea() {
    return (
        <div className="bubbleTeaGrid animated-grid">
            <div className="cup"></div>
            <div className="cupShadow"></div>
            <div className="lid"></div>
            <div className="straw"></div>
            <div className="wave"></div>
            {bubbleSkills.map((skill, index) => (
                <div className={`pearl pearl${index + 1}`} key={index}>
                    <img
                        className="fill-blue-500 transform hover:scale-150"
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                    />
                </div>
            ))}
            {Array(4)
                .fill()
                .map((_, index) => (
                    <div
                        className={`pearl pearl${index + 18}`}
                        key={index}
                    ></div>
                ))}
        </div>
    );
}

export default BubbleTea;
