import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact()
{
    return(
        <>
        <Navbar/>
        <Container className="p-5 mt-3 bg-info">
            <Row>
                <div className="col-md-5 p-4">
                    <img src="https://i.pinimg.com/originals/b7/43/52/b743527a755c9e382579da4eb63c03d1.gif" className="img-fluid"></img>
                </div>
                <div className="col-md-7 shadow p-4 text-center bg-white">
                    <h2 className="mt-3">Contact us</h2>
                    <h5 className="mt-3">You can find us here
                    <form>
                        <div className="form-group mt-3">
                            <input type="text" placeholder="Name *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Email *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Phone *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Subject *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <textarea type="text" placeholder="Address *" className="form-control border border-dark"></textarea>
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit"  className="w-50 btn btn-md btn-dark bg-dark text-white" value="Send" />
                        </div>
                    </form>
                    </h5>
                </div>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default Contact