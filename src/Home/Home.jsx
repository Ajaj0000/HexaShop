import React from "react";
import { Header } from "../Header/header";
import { Screentop } from "../screenitems/srceentop";
import { Heading } from "../common/heading";
import { Men } from "../men wear/menwear";
import { Women } from "../women wear/womenwear";
import { Kids } from "../kids wear/kidswear";
import { Explor } from "../expoler product/explorproduct";
import { Social } from "../socialmedia/socialmedia";
import { Sub } from "../subscribtion/subscribtion";
import { Footer } from "../footer/footer";

function Home(){
    return(
        <>
        <Header />
        <Screentop/>
        <Heading head="Men's Latest" detail="Details to details is what makes Hexashop different from the other themes." />
        <Men/>
        <Heading head="Women's Latest" detail="Details to details is what makes Hexashop different from the other themes."/>
        <Women/>
        <Heading head="Kid's Latest" detail="Details to details is what makes Hexashop different from the other themes."/>
        <Kids/>
        <Explor/>
        <Heading head="Social Media" detail="Details to details is what makes Hexashop different from the other themes."/>
        <Social/>
        <Sub/>
        <Footer/>
        </>
    )
}
export{Home}