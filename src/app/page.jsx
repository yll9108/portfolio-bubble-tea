"use client";
import SharedBtn from "./common/SharedBtn";
import Title from "./common/Title";
import AnimationComponent from "./components/home/Animation";

export default function Home() {
    return (
        <>
            <div className="flex flex-col">
                <AnimationComponent />
                <Title text="Let's walk with me to show you our menu :)" />
                <SharedBtn btnName="Start" />
            </div>
        </>
    );
}
