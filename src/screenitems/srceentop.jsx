import React from "react";
import img1 from "../images/left-banner-image.jpg"
import img2 from "../images/baner-right-image-01.jpg"
import img3 from "../images/baner-right-image-02.jpg"
import img4 from "../images/baner-right-image-03.jpg"
import img5 from "../images/baner-right-image-04.jpg"


function Screentop() {

    const rightcontent = [
        {
            id: "a",
            image: `${img2}`,
            name: "Women",
            span: "Best Closthes For Women",
            detail:"Lorem ipsum doler sit amet, conservisil ctrtur adipiscing elit lncid",
            btn:"Discover More",
        },
        {
            id: "b",
            image: `${img3}`,
            name: "Men",
            span: "Best Closthes For Men",
            detail:"Lorem ipsum doler sit amet, conservisil ctrtur adipiscing elit lncid",
            btn:"Discover More",
        },
        {
            id: "c",
            image: `${img4}`,
            name: "Kids",
            span: "Best Closthes For Kids",
            detail:"Lorem ipsum doler sit amet, conservisil ctrtur adipiscing elit lncid",
            btn:"Discover More",
        },
        {
            id: "d",
            image: `${img5}`,
            name: "Accessories",
            span: "Best Trend Accessories",
            detail:"Lorem ipsum doler sit amet, conservisil ctrtur adipiscing elit lncid",
            btn:"Discover More",
        },
    ]

    return (
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
                                                    { (items.image) ?  <img src={items.image} alt="img" /> : ""}
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
export { Screentop }