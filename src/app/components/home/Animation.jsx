import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
    return (
        <div>
            <TypeAnimation
                style={{ whiteSpace: "pre-line" }}
                preRenderFirstString={true}
                sequence={[
                    500,
                    `Welcome!\nI'm Yen`, // initially rendered starting point
                    1000,
                    `Welcome!\nI'm a web developer`,
                    1000,
                    `Welcome!\nI'm a bubble tea lover!`,
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
            />
        </div>
    );
};

export default AnimationComponent;
