import React from "react";
import img1 from "../images/about-left-image.jpg";

function OurSkill() {


    return (
        <>
            <div className="aboutUs">
                <div className="out-skill">
                    <div className="left-pic">
                        <img src={img1} alt="img" />
                    </div>
                    <div className="right-main">
                        <h1>About Us & Our Skills</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                        <div className="explor-lite">
                            <i class="fa-solid fa-quote-left"></i>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</h5>
                        </div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { OurSkill }
