import React from "react";
import man1 from "../images/kid-01.jpg"
import man2 from "../images/kid-02.jpg"
import man3 from "../images/kid-03.jpg";
import { Link } from "react-router-dom";


function Kids() {
    const men = [
        {
            img: `${man1}`,
            name: "School Collection",
            price: 50.0,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man2}`,
            name: "Summer Cap",
            price: 19.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },
        {
            img: `${man3}`,
            name: "Classic Kid",
            price: 15.00,
            star: <i class="fa-solid fa-star"></i>,
            view: <i class="fa-solid fa-eye"></i>,
            cart: <i class="fa-solid fa-cart-shopping"></i>,
        },

    ]
    return (
        <>
            <div className="men-section" id="kid">

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
export { Kids }