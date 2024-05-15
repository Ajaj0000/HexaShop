import React, { useEffect, useState } from "react";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Header1(){
    const [list ,setlite] = useState([])
    async function listdata(){
        const res = await fetch("http://localhost:1001/list")
        const getlist = await res.json()
        setlite(getlist)
    }
    useEffect(()=>{
        listdata()
    },[])
    return(
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
                                        <NavLink activeClassname="active" to={nav.path}><li id={nav.id}>{nav.name}</li></NavLink>
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
export{Header1}