import React from "react";

function SharedBtn({ btnName }) {
    return (
        <div>
            <button className="btn btn-active btn-neutral">{btnName}</button>
        </div>
    );
}

export default SharedBtn;
