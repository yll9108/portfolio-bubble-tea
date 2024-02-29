import React from "react";
import Title from "../common/Title";

function Projects() {
    return (
        <>
            <div className="flex flex-col w-4/5 m-auto space-y-2">
                <Title text="[projects]" />
                <div className="flex gap-1 flex-wrap">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions"></div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions"></div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
