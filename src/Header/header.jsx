import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
    const list = [
        {
            id: "home",
            name: "Home",
            path: "#main-top",
        },
        {
            id: "men",
            name: "Men's",
            path: "#men",
        },
        {
            id: "men",
            name: "Women's",
            path: "#women",
        },
        {
            id: "men",
            name: "Kid's",
            path: "#kid",
        },
        {
            id: "men",
            name: "Pages",
            path: "/about",
        },
        {
            id: "men",
            name: "Features",
            path: "/about",
        },
        {
            id: "men",
            name: "Explore",
            path: "/about",
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
                                        <NavLink activeClassname="active" to={nav.path} ><li id={nav.id}>{nav.name}</li></NavLink>
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