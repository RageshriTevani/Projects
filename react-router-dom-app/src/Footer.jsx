import React from "react";
import { Container,Row } from "react-bootstrap";
function Footer()
{
    return(
        <>
    <Container fluid className="p-5 mt-5 bg-dark text-white">
        <Row>
            <div className="col-md-4">
                <h3 className="ms-5">React App</h3>
            </div>
            <div className="col-md-4">
                <h3 className="ms-5">Page links</h3>
                <ul className="footer-nav ms-5">
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Gallery</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Terms and conditions</a></li>
                    <li><a href="">Privacy & policy</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                    <h3 className="ms-5">Our office address</h3>
                    <p className="ms-5">Vaishnavi Summit, Ground Floor,<br/> 7th Main, 80 Feet Road, 3rd Block,<br/> Koramangala Industrial Layout,<br/> Bangalore KA IN 560034.</p>
                </div>
        </Row>
    </Container>
        </>
    )
}
export default Footer