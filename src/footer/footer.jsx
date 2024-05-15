import React from "react";
import logo from "../images/white-logo.png"


function Footer() {
    const foot = [
        {
            logo: logo,
            li1: "6501 Collins Ave, Sunny Isles Beach, FL 33160, United States",
            li2: "m@gmail.com",
            li3: "0102-030-340"
        },
        {
            head: "Shopping & Category",
            li1: "Men's Shopping",
            li2: "Women's Shpping",
            li3: "Kid's Shopping"
        },
        {
            head: "Useful links",
            li1: "Homepage",
            li2: "About us",
            li3: "Help",
            li4: "Contect Us"
        },
        {
            head: "Help & Information",
            li1: "Help",
            li2: "FAQ's",
            li3: "Shopping",
            li4: "Tracking Id"
        }
    ]
    return (
        <>
            <div className="footer">
                <div className="foot">

                    {
                        foot.map((itm) => {
                            return (
                                <>
                                    {/* <li>{itm.}</li> */}
                                    <ul>
                                        {itm.logo ? <li><img src={itm.logo} alt="" /></li> : ''}
                                        {itm.head ? <h3>{itm.head}</h3> : ""}
                                        {itm.li1 ? <li>{itm.li1}</li> : ''}
                                        {itm.li2 ? <li>{itm.li2}</li> : ''}
                                        {itm.li3 ? <li>{itm.li3}</li> : ''}
                                        {itm.li4 ? <li>{itm.li4}</li> : ''}
                                    </ul>
                                </>
                            )
                        })
                    }

                </div>
                <div className="center">
                    <div className="line-bottom"></div>
                    <div className="under-line">
                        <p>Copyright © 2045 HexaShop Co., Ltd. All Rights Reserved.</p>
                        <p>Design: Azaz Khan</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Footer }