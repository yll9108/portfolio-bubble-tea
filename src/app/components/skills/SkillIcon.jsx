import React from "react";
import "./skillIcon.css";
import { bubbleSkills } from "./bubbleSkills";

function SkillIcon() {
    return (
        <>
            <div>
                <ul className="skills">
                    <li className="skill-icon">
                        {bubbleSkills.map((skill, index) => (
                            <img
                                key={skill.alt}
                                src={skill.src}
                                alt={skill.alt}
                            />
                        ))}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SkillIcon;

// function SkillIcon() {
//     return (
//         <>
//             <div className="skills">
//                 {/* <div className="skill-icon">
//                     <img src="bootstrap-fill-svgrepo-com.svg" alt="BS" />
//                     <img src="bootstrap-fill-svgrepo-com.svg" alt="BS" />
//                 </div> */}
//                 {/* {bubbleSkills.map((skill, index) => (
//                     <li className={`pearl pearl${index + 1}`} key={index}>
//                         <img key={skill.alt} src={skill.src} alt={skill.alt} />
//                     </li>
//                 ))} */}
//             </div>
//         </>
//     );
// }

// {
/* {bubbleSkills.map((skill, index) => (
                <div className={`pearl pearl${index + 1}`} key={index}>
                    <img key={skill.alt} src={skill.src} alt={skill.alt} />
                </div>
            ))} */
// }
