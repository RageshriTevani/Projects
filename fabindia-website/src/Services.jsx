import React from "react";
import sponsorSectionBanner from '../images/sponsorSectionBanner.webp'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
function Services()
{
    return(
        <>
            <Navbar/>
            <div className="mt-5">
            <a href="" className="d-flex">
            <img src={sponsorSectionBanner} alt="sponsorSectionBanner" style={{width:"100%"}}/></a>
        </div>
            <Footer/>
        </>
    )
}
export default Services