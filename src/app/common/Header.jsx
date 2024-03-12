"use client";
import React from "react";
import Contact from "./Contact";

function Menu({ item, href }) {
    return (
        <li>
            <a href={href} className="text-xl sm:text-secondary">
                {item}
            </a>
        </li>
    );
}

const menuItem = [
    { item: "[HOME]", href: "/" },
    { item: "[STORY]", href: "/story" },
    { item: "[PROJECTS]", href: "/projects" },
    { item: "[SKILLS]", href: "/skills" },
    { item: "[POST]", href: "/post" },
];

export function HeaderLG() {
    return (
        <>
            <div className="sticky top-0">
                <div className="flex">
                    <ul className="menu bg-primary w-60 h-screen">
                        <li className="menu-title text-2xl text-secondary ">
                            MENU
                        </li>
                        {menuItem.map((menu) => (
                            <Menu
                                key={menu.item}
                                item={menu.item}
                                href={menu.href}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export function HeaderSmall() {
    return (
        <>
            <div className="navbar bg-primary w-100 mb-10 sm:text-secondary">
                <div className="flex-1 px-2  lg:flex-none">
                    <a className="text-lg font-bold">Yen's</a>
                </div>
                {/* <Contact /> */}
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        {/* <a className="btn btn-ghost rounded-btn">Button</a> */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost rounded-btn"
                            >
                                Menu
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                            >
                                <li className="menu-title text-lg ">MENU</li>
                                {menuItem.map((menu) => (
                                    <Menu
                                        key={menu.item}
                                        item={menu.item}
                                        href={menu.href}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
