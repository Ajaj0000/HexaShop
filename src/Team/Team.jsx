import React from "react";
import { AboutHeading } from "../common/AboutHeading";
import img1 from "../images/team-member-01.jpg";
import img2 from "../images/team-member-02.jpg";
import img3 from "../images/team-member-03.jpg";

function Team() {

    const member = [
        {
            id: '1',
            img: img1,
            name: "Ragnar Lodbrok",
            spam: "Product Caretaker",
            face: <i class="fa-brands fa-facebook-f"></i>,
            twiter: <i class="fa-brands fa-twitter"></i>,
            linked: <i class="fa-brands fa-linkedin-in"></i>,
            bee: <i class="fa-brands fa-youtube"></i>,
        },
        {
            id: "2",
            img: img2,
            name: "Ragnar Lodbrok",
            spam: "Product Caretaker",
            face: <i class="fa-brands fa-facebook-f"></i>,
            twiter: <i class="fa-brands fa-twitter"></i>,
            linked: <i class="fa-brands fa-linkedin-in"></i>,
            bee: <i class="fa-brands fa-youtube"></i>,
        },
        {
            id: "3",
            img: img3,
            name: "Ragnar Lodbrok",
            spam: "Product Caretaker",
            face: <i class="fa-brands fa-facebook-f"></i>,
            twiter: <i class="fa-brands fa-twitter"></i>,
            linked: <i class="fa-brands fa-linkedin-in"></i>,
            bee: <i class="fa-brands fa-youtube"></i>,
        }
    ]

    return (
        <>
            <AboutHeading Heading="Our Amazing Team" span="Details to details is what makes Hexashop different from the other themes." />
            <div className="our-team">
                <div className="our-team-lite">
                    {
                        member.map((itm) => {
                            return (
                                <>
                                    <div className="member-team">
                                        <div className="member-lite">
                                            <div className="team-pic">
                                                <img src={itm.img} alt="img" />
                                                <div className="social-app">
                                                    <ul>
                                                        <li>{itm.face}</li>
                                                        <li>{itm.bee}</li>
                                                        <li>{itm.linked}</li>
                                                        <li>{itm.twiter}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>{itm.name}</h1>
                                        <span>{itm.spam}</span>
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

export { Team }