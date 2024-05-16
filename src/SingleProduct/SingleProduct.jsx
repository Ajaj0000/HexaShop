import React from "react";
import { Header } from "../Header/header";
import { Footer } from "../footer/footer";
import { SingleHead } from "./singleHead";
import { ProSection } from "../SingleProSection/ProSection";

function SingleProduct() {

    return (
        <>
            <Header />
            <SingleHead/>
            <ProSection/>
            <Footer />
        </>
    )
}

export { SingleProduct }