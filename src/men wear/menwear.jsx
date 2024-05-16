import React from "react";
import man1 from "../images/men-01.jpg";
import man2 from "../images/men-02.jpg";
import man3 from "../images/men-03.jpg";
import { Link } from "react-router-dom";


function Men() {
    const men = [
        {
            img: `${man1}`,
            name: "Classic Spring",
            price: 120.0,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man2}`,
            name: "Air Force 1 X",
            price: 90.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man3}`,
            name: "Love Nana '20",
            price: 150.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },

    ]


    return (
        <>
            <div className="men-section" id="men">

                {
                    men.map((itm) => {
                        return (
                            <>
                                <div className="men-products">
                                    <div className="man-img">
                                        <img src={itm.img} alt="" />
                                        <div className="shop">
                                            <Link to="/singleproduct">
                                                <div className="view">
                                                    {itm.view}
                                                </div>
                                            </Link>
                                            <Link to="/singleproduct">
                                                <div className="view">
                                                    {itm.star}
                                                </div>
                                            </Link>
                                            <Link to="/singleproduct">
                                                <div className="view">
                                                    {itm.cart}
                                                </div>
                                            </Link>
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
export { Men }