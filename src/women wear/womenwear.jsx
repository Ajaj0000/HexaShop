import React from "react";
import man1 from "../images/women-01.jpg"
import man2 from "../images/women-02.jpg"
import man3 from "../images/women-03.jpg";


function Women() {
    const men = [
        {
            img: `${man1}`,
            name: "New Green Jecket",
            price: 120.0,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man2}`,
            name: "Classic Dress",
            price: 100.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man3}`,
            name: "Spring Collection",
            price: 130.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },

    ]
    return (
        <>
            <div className="men-section">
                <button id="left"><i class="fa-solid fa-less-than"></i></button>
                <button id="right"><i class="fa-solid fa-less-than fa-rotate-180"></i></button>
                {
                    men.map((itm) => {
                        return (
                            <>
                                <div className="men-products">
                                    <div className="man-img">
                                        <img src={itm.img} alt="" />
                                        <div className="shop">
                                            <div className="view">
                                                {itm.view}
                                            </div>
                                            <div className="view">
                                                {itm.star}
                                            </div>
                                            <div className="view">
                                                {itm.cart}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h2>{itm.name}</h2>
                                        <div className="rating">
                                            {itm.star}
                                            {itm.star}
                                            {itm.star}
                                            {itm.star}
                                            {itm.star}
                                        </div>
                                    </div>
                                    <h3>${itm.price}</h3>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Women }