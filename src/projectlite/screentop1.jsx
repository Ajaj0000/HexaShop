import React, { useEffect, useState } from "react";
import img1 from "../images/left-banner-image.jpg"
import img4 from "../images/baner-right-image-04.jpg"

function Screentop1(){
    const [rightcontent , setrigthcontent] = useState([])

    async function Right(){
        const res = await fetch("http://localhost:1001/right")
        const getright = await res.json()
        setrigthcontent(getright)
    }
    useEffect(()=>{
        Right()
    },[])
    return(
        <>
         <section id="main-top">
                <section id="a1">
                    <div className="top">
                        <div className="img-hexashope">
                            <img src={img1} alt="img" />
                            <div className="inner-text">
                                <h1>We Are Hexashop</h1>
                                <span>Style, Fasion & creative Looks</span>
                                <div className="hexa-btn">
                                    <button>Purchase Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top">
                        <div className="right-box">
                            {
                                rightcontent.map((items) => {
                                    return (
                                        <>
                                            <div className="right-card" key={items.id} id={items.id}>
                                                    <div className="card-img">
                                                    {/* { (items.image) ?  <img src={items.image} alt="img" /> : ""} */}
                                                    <img src={img4} alt="" />
                                                    </div>
                                                <div className="right-text">
                                                    <h1>{items.name}</h1>
                                                    <span>{items.span}</span>
                                                </div>
                                                <div className="none-text">
                                                    <h1>{items.name}</h1>
                                                    <p>{items.detail}</p>
                                                    <button>{items.btn}</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export{Screentop1}