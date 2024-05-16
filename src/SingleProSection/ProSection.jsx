import React from "react";
import img1 from "../images/single-product-01.jpg";
import img2 from "../images/single-product-02.jpg";

function ProSection() {

    return (
        <>
            <div className="product-sneakers">
                <div className="pro_single">
                    <div className="pro-left">
                        <img src={img1} alt="img" />
                        <img src={img2} alt="img" />
                    </div>
                    <div className="pro-right">
                        <h1>New White Sneakers</h1>
                        <span>$75.00</span>
                        <ul>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore</p>
                        <div className="explor-lite">
                            <i class="fa-solid fa-quote-left"></i>
                            <h5>Cras gravida, leo quis lobortis tristique, sem dui consequat nunc, sit malesuada.</h5>
                        </div>
                        <div className="order">
                            <h1>No of orders</h1>
                            <div className="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="cart">
                            <h1>Total:$ 200</h1>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProSection }