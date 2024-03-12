import React from "react";
import Title from "../common/Title";

function page() {
    return (
        <>
            <div className="flex flex-col justify-center sm:m-auto">
                {/* <div className="m-auto">POST</div> */}
                <Title text="[POST]" />
                <div className="w-3/5 m-auto">
                    <div className="md:flex gap-3">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img src="1. ES.png" alt="ESlint vs Prettier" />
                            </figure>
                            <div className="card-body">
                                <p>Explain ESLint and Prettier</p>
                                <div className="card-actions justify-end">
                                    <a href="https://www.instagram.com/p/C3oyPtevB2E/?utm_source=ig_web_copy_link">
                                        <button className="btn bg-primary text-secondary">
                                            Check it out!
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="2. Fast way killing port.png"
                                    alt="Fast way killing port"
                                />
                            </figure>
                            <div className="card-body">
                                <p>Introduce fast way killing port</p>
                                <div className="card-actions justify-end">
                                    <a href="https://www.instagram.com/p/C367VWsvJ1w/?utm_source=ig_web_copy_link">
                                        <button className="btn bg-primary text-secondary">
                                            Check it out!
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
