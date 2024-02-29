import React from "react";
import "./bubbletea.css";

function BubbleTea() {
    return (
        <div className="bubbleTeaGrid">
            <div className="cup"></div>
            <div className="cupShadow"></div>
            <div className="lid"></div>
            <div className="straw"></div>
            <div className="wave"></div>
            <div className="logo text-2xl">
                Chill on <span>BOBA</span>
                Coding with <span>YEN</span>
            </div>
            {/* {bubbleSkills.map((skill, index) => (
                <div className={`pearl pearl${index + 1}`} key={index}>
                    <img key={skill.alt} src={skill.src} alt={skill.alt} />
                </div>
            ))} */}
        </div>
    );
}

export default BubbleTea;
