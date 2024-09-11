import React from "react";
import Navbar from "./Navbar.jsx";
import Content from "./Home.jsx";
import Footer from "./Footer.jsx";
function Layout()
{
    return(
        <>
            <Navbar/>
            <Content/>
            <Footer/>
        </>
    )
}
export default Layout