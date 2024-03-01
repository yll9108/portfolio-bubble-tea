import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
    return (
        <div>
            <TypeAnimation
                className="text-6xl"
                style={{ whiteSpace: "pre-line" }}
                preRenderFirstString={true}
                sequence={[
                    500,
                    `Hello!\nI'm\nYen.`, // initially rendered starting point
                    1000,
                    `Hello!\nI'm a\nweb developer`,
                    1000,
                    `Hello!\nI'm a\nbubble tea lover!`,
                    1000,
                ]}
                speed={50}
                repeat={5}
            />
        </div>
    );
};

export default AnimationComponent;
