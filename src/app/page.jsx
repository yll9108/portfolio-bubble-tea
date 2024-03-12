"use client";
import SharedBtn from "./common/SharedBtn";
import Title from "./common/Title";
import AnimationComponent from "./components/home/Animation";
import BubbleTeaShop from "./components/home/BubbleTeaShop";

export default function Home() {
    return (
        <>
            <div className="container flex w-3/5 m-auto gap-2">
                <div className="flex flex-col">
                    <AnimationComponent />
                    <p className="text-justify text-base sm:text-xl pb-4">
                        Coding is like crafting bubble tea; adding more pearls
                        enriches the blend. Code diligently, master your craft.
                    </p>
                    <div className="sm:hidden">
                        <BubbleTeaShop />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <BubbleTeaShop />
                </div>
            </div>
        </>
    );
}
