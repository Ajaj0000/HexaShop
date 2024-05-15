import React from "react";


function Sub() {
    const about = [
        {
            head: "Store Location:",
            p: "Sunny Isles Beach, FL 33160, United States",
        },
        {
            head: "Work Hours:",
            p: "07:30 AM - 9:30 PM Daily",
        },
        {
            head: "Phone:",
            p: "010-020-0340",
        },
        {
            head: "Email:",
            p: "mail@gmail.com",
        },
        {
            head: "Office Location:",
            p: "North Miami Beach",
        },
        {
            head: "Social Media:",
            p: "Facebook, Instagram, Behance, Linkedin",
        },
    ]
    return (
        <>
            <div className="subscribe">
                <div className="subscribe-lite">
                    <div className="sub">
                        <h1>By Subscribing To Our Newsletter You Can Get 30% Off</h1>
                        <p>Details to details is what makes Hexashop different from the other themes</p>
                        <div className="input-set">
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your Email Addresh" />
                        <button><i class="fa-solid fa-star"></i></button>
                        </div>
                    </div>
                    <div className="sub2">
                        <div className="sub-lite">
                            {
                                about.map((itm) => {
                                    return (
                                        <>
                                            <div className="about">
                                                <h5>{itm.head}</h5>
                                                <p>{itm.p}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Sub }