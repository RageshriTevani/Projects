import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";

import newarvl from '../images/newarvl.jpg'
import newarrivals2 from '../images/newarrivals2.jpg'
import newarrivals3 from '../images/newarrivals3.jpg'
import homedecor from '../images/homedecor.webp'
import giftsets from '../images/giftsets.webp'
import furnitures from '../images/furnitures.webp'
import kitchen from '../images/kitchen.webp'
function NewArrivals()
{
    return(
        <>
        <Navbar/>
        {/* new arrivals slider starts from here */}
        <div id="carouselExampleIndicators" className="carousel slide  mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={newarvl} className="d-block w-100" alt="newarvl" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-150px", marginLeft:"44.3%", fontSize:"22px", color:"white",backgroundColor:"gray"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={newarrivals2} className="d-block w-100" alt="newarrivals2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-210px", marginLeft:"23%", fontSize:"22px", color:"white",backgroundColor:"purple"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={newarrivals3} className="d-block w-100" alt="newarrivals3" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-225px", marginLeft:"44.2%", fontSize:"22px", color:"white",backgroundColor:"darkred"}}>SHOP NOW</MDBBtn>
                </div>


            {/* arrows to change the slides */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <BiSolidLeftArrowCircle className="text-5xl mt-5 bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <BiSolidRightArrowCircle  className="text-5xl mt-5  bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
        </div>
        

{/* new items sections */}
        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px',backgroundColor:'gray'}}>
            <img src={homedecor} alt="homedecor" className="ms-36" />
            <img src={giftsets} alt="giftsets" className="ms-4" />
            <img src={furnitures} alt="furnitures" className="ms-4" />
            <img src={kitchen} alt="kitchen" className="ms-4" />
        </div>


        <Footer/>
        </>
    )
}
export default NewArrivals