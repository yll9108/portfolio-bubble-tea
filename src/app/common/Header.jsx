"use client";
import React from "react";

function Menu({ item, href }) {
    return (
        <li>
            <a href={href} className="text-xl">
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
    { item: "[ORDER] - contact" },
];

function Header() {
    return (
        <>
            <div className="flex h-screen">
                <ul className="menu bg-primary w-60">
                    <li className="menu-title text-2xl ">MENU</li>
                    {menuItem.map((menu) => (
                        <Menu
                            key={menu.item}
                            item={menu.item}
                            href={menu.href}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
