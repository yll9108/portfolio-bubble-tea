import React from "react";
import Profile from "../components/story/Profile";
import Introduction from "../common/Introduction";
import Title from "../common/Title";

function Story() {
    return (
        <div className="flex flex-col w-3/5 justify-center m-auto space-y-5">
            <Title text="[Story]" />
            <Profile />
            <Introduction />
        </div>
    );
}

export default Story;
