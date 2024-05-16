import React from "react";
import { Header } from "../Header/header";
import { Footer } from "../footer/footer";
import { Sub } from "../subscribtion/subscribtion";
import { OurSkill } from "./OurSkill";
import { Team } from "../Team/Team";

function Aboutus() {
    return (
        <>
            <Header />
            <div className="page-headin">
                <div className="single">
                    <div className="single-head">
                        <h1>About Our Company</h1>
                        <span>Awesome, Stylish and Fashionable Ideas</span>
                    </div>
                </div>
            </div>
            <OurSkill/>
            <Team/>
            <Sub/>
            <Footer />
        </>
    )
}
export { Aboutus }