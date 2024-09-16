import React from "react";
import { Container,Row } from "react-bootstrap";
function Content()
{
    return(
        <>
        <Container className="p-5 mt-5 bg-info">
            <Row>
                <div className="col-md-5 p-4">
                    <img src="https://i.pinimg.com/originals/b7/43/52/b743527a755c9e382579da4eb63c03d1.gif" className="img-fluid"></img>
                </div>
                <div className="col-md-7 shadow p-4 text-center bg-white">
                    <h2 className="mt-5">Welcome to Our Home page</h2>
                    <p className="mt-5">GIPHY is the platform that animates your world. Find the GIFs, Clips, and Stickers 
                    <br></br>that make your conversations more positive, more expressive, and more ...</p>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default Content