import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
    return (
        <div>
            <TypeAnimation
                className="text-3xl"
                style={{ whiteSpace: "pre-line" }}
                preRenderFirstString={true}
                sequence={[
                    500,
                    `Hello! I'm Yen.`, // initially rendered starting point
                    1000,
                    `Hello! I'm Yen.\nWeb developer`,
                    1000,
                    `Hello! I'm Yen.\nBubble tea lover!`,
                    1000,
                ]}
                speed={50}
                repeat={5}
            />
        </div>
    );
};

export default AnimationComponent;
