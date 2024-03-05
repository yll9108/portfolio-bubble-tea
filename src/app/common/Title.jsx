import React from "react";

function Title({ text }) {
    return (
        <div>
            <h1 className="sm:text-6xl text-center">{text}</h1>
        </div>
    );
}

export default Title;
