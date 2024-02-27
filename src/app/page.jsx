"use client";
import SharedBtn from "./common/SharedBtn";
import Title from "./common/Title";
import AnimationComponent from "./components/home/Animation";
import BubbleTeaShop from "./components/home/BubbleTeaShop";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center content-center">
                {/* <AnimationComponent /> */}
                <Title text="Let's walk with me to show you our menu :)" />
                <BubbleTeaShop />
                {/* <SharedBtn btnName="Start" /> */}
            </div>
        </>
    );
}
