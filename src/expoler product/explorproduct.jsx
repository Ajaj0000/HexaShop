import React from "react";
import cate1 from "../images/explore-image-01.jpg"
import cate2 from "../images/explore-image-02.jpg"

function Explor() {

    return (
        <>
        <div className="top-main-explor">
            <div className="main-explor">
                <div className="explor">
                    <h1>Explore Our Products</h1>
                    <p>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
                    <div className="explor-lite">
                        <i class="fa-solid fa-quote-left"></i>
                        <h5>Cras gravida, leo quis lobortis tristique, sem dui consequat nunc, sit malesuada.</h5>
                    </div>
                    <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. Quam, aliquet non enim tempus nulla.</p>
                    <p>Please tell your friends about our great website. Thank you. Venenatis vitae risus eu pretium. Etiam lacinia efficitur nisi at facilisis. Curabitur id suscipit urna sem.</p>
                    <button>Discover More</button>
                </div>
                <div className="explor">
                    <div className="explor-right">
                        <div className="category">
                            <div className="cat-lite">
                                <h2>Leather Bags</h2>
                                <p>Latest Collection</p>
                            </div>
                        </div>
                        <div className="category">
                            <img src={cate1} alt="img" />
                        </div>
                        <div className="category">
                            <img src={cate2} alt="" />
                        </div>
                        <div className="category">
                            <div className="cat-lite">
                                <h2>Different Types</h2>
                                <p>Over 304 Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
export { Explor }