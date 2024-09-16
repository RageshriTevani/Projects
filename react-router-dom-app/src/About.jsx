import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About()
{
    return(
        <>
        <Navbar/>
        <Container className="p-5 mt-5 bg-info">
            <Row>
                <div className="col-md-5 p-4">
                    <img src="https://i.pinimg.com/originals/b7/43/52/b743527a755c9e382579da4eb63c03d1.gif" className="img-fluid"></img>
                </div>
                <div className="col-md-7 shadow p-4 text-center bg-white">
                    <h2 className="mt-5">About us</h2>
                    <p className="mt-5">Hey There!<br></br> Our company is the largest in the IT sector. <br></br>We have the best solutions for your software based problems <br></br>We are here to solve your queries so you can find us here anytime you want. Go through the contact us page to get our contact details.
                    </p>
                </div>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default About