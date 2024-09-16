import React from "react";
import { Container } from "react-bootstrap";
import gif from '../src/images/gif.gif'
import Navbar from "./Navbar";
import Footer from "./Footer";
function Pagenotfound()
{
    return(
        <>
        <Navbar/>
        <Container className="p-5">
                <div className=" p-4 text-center">
                    <h2 >Page Not found 404 error</h2>
                    <p className="mt-3">
                        <img src={gif} alt="gif" className="img-fluid" />
                    </p>
                </div>
        </Container>
        <Footer/>
        </>
    )
}
export default Pagenotfound