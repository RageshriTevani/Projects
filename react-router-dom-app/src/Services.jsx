import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
function Services()
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
                    <h2 className="mt-5">Our Services</h2>
                    <p className="mt-3">Network security<br/>
                    Artificial intelligence (AI)<br/>
                    Network configuration<br/>
                    Cloud services<br/>
                    Data backup<br/>
                    Email marketing service<br/>
                    Web design<br/>
                    Animation<br/>
                    IT repair service<br/>
                    Social media<br/>
                    IT consulting<br/>
                    Data storage<br/>
                    Software support<br/>
                    Voice over Internet Protocol (VoIP)<br/>
                    Data visualization<br/>
                    Data analysis<br/>
                    Data analytics<br/>
                    Business process services<br/>
                    APIs<br/>
                    Data synchronization<br/>
                    End-user device management<br/>
                    Knowledge management<br/>
                    Data entry<br/>
                    Technology training<br/>
                    Internet-based communications<br/>
                    </p>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default Services