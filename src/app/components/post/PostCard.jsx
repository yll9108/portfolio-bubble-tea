import React from "react";
import postInfo from "./postInfo";

function PostCard() {
    return (
        <>
            {postInfo.map((post, index) => (
                <div
                    key={index}
                    className="card card-compact bg-base-100 shadow-xl mb-5 mr-5"
                >
                    <figure>
                        <img src={post.src} alt={post.title} />
                    </figure>
                    <div className="card-body">
                        <p>{post.title}</p>
                        <div className="card-actions justify-end">
                            <a href={post.href}>
                                <button className="btn bg-primary text-secondary">
                                    Check it out!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostCard;
