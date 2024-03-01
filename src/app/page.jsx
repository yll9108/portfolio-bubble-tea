"use client";
import SharedBtn from "./common/SharedBtn";
import Title from "./common/Title";
import AnimationComponent from "./components/home/Animation";
import BubbleTeaShop from "./components/home/BubbleTeaShop";

export default function Home() {
    return (
        <>
            {/* <div className="flex w-3/5 m-auto gap-5">
                <div className="flex flex-col ">
                    <AnimationComponent />
                    <Title text="Let's walk with me to show you our menu :)" />
                </div>
                <div>
                    <BubbleTeaShop />
               
                </div>
            </div> */}
            <div className="flex w-3/5 m-auto gap-5">
                <div className="flex flex-col">
                    <AnimationComponent />
                    <Title text="Let's walk with me to show you our menu :)" />
                    <div className="sm:hidden">
                        {/* 在小尺寸下顯示 */}
                        <BubbleTeaShop />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    {/* 在小尺寸下隱藏，在大尺寸下顯示 */}
                    <BubbleTeaShop />
                </div>
            </div>
        </>
    );
}
