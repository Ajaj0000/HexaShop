import React from "react";
import social1 from "../images/instagram-01.jpg"
import social2 from "../images/instagram-02.jpg"
import social3 from "../images/instagram-03.jpg"
import social4 from "../images/instagram-04.jpg"
import social5 from "../images/instagram-05.jpg"
import social6 from "../images/instagram-06.jpg"



function Social() {
    const media = [
        {
            img: `${social1}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "Fasion",
        },
        {
            img: `${social2}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "New",
        },
        {
            img: `${social3}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "Brand",
        },
        {
            img: `${social4}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "Make up",
        },
        {
            img: `${social5}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "Leather",
        },
        {
            img: `${social6}`,
            inst: <i class="fa-solid fa-star"></i>,
            name: "Bag",
        },

    ]
    return (
        <>
            <div className="social">
                <div className="social-lite">
                    {
                        media.map((itm) => {
                            return (
                                <>
                                    <div className="media-box">
                                        <img src={itm.img} alt="" />
                                        <div className="name">
                                            <div className="icon">
                                            <p>{itm.name}</p>
                                            <p>{itm.inst}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export { Social }