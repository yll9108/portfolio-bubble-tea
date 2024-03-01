import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
    return (
        <div className="min-h-20 sm:min-h-32">
            <TypeAnimation
                className="text-2xl sm:text-6xl"
                style={{ whiteSpace: "pre-line" }}
                preRenderFirstString={true}
                sequence={[
                    1000,
                    `Hello! I'm Yen.\nWeb developer!`,
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
