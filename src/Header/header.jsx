import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

function Header() {
    const list = [
        {
            id: "home",
            name: "Home",
            path: "/home",
        },
        {
            id: "men",
            name: "Men's",
            path: "/men",
        },
        {
            id: "men",
            name: "Women's",
            path: "/women",
        },
        {
            id: "men",
            name: "Kid's",
            path: "/kid",
        },
        {
            id: "men",
            name: "Pages",
            path: "/page",
        },
        {
            id: "men",
            name: "Features",
            path: "/home",
        },
        {
            id: "men",
            name: "Explore",
            path: "/explore",
        },

    ]
    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        {
                            list.map((nav) => {
                                return (
                                    <>
                                        <NavLink activeClassname="active" ><li id={nav.id}>{nav.name}</li></NavLink>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export { Header }