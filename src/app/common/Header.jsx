"use client";
import React from "react";

function Menu({ item }) {
    return (
        <li>
            <a className="text-xl">{item}</a>
        </li>
    );
}

const menuItem = [
    { item: "[HOME]" },
    { item: "[STORY] - about me" },
    { item: "[TEA] - projects" },
    { item: "[ADD ONS] - skills" },
    { item: "[ORDER] - contact" },
];

function Header() {
    return (
        <>
            <div className="flex h-screen">
                <ul className="menu bg-primary w-60">
                    <li className="menu-title text-2xl ">MENU</li>
                    {menuItem.map((menu) => (
                        <Menu key={menu.item} item={menu.item} />
                    ))}
                    {/* <li>
                        <a>[STORY] -about me</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li> */}
                </ul>
            </div>
        </>
    );
}

export default Header;
