import React from "react";
import Title from "../common/Title";
import PostCard from "../components/post/PostCard";

function page() {
    return (
        <>
            <div className="flex flex-col justify-center sm:m-auto space-y-1">
                <Title text="[POST]" />
                <div className="w-3/5 m-auto">
                    <p className="text-justify text-base sm:text-xl mb-3">
                        As a newbie in the coding world, I got lots of help from
                        others that really boosted my learning curve. Feeling
                        inspired, I decided to pay it forward and start writing
                        article to share.
                    </p>

                    <div className="md:flex">
                        <PostCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
