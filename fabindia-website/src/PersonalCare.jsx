import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import Navbar from "./Navbar.jsx";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import ff1 from '../images/ff1.jpg'
import f1 from '../images/f1.jpg'
import ff3 from '../images/ff3.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'

import Footer from "./Footer.jsx";
function PersonalCare()
{
    return(
        <>
        <Navbar/>
             {/* content slider */}
            <div id="carouselExampleIndicators" className="carousel slide  mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={p1} className="d-block w-100" alt="kids1" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-125px", marginLeft:"66%", fontSize:"22px", color:"black",backgroundColor:"lightblue"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={p2} className="d-block w-100" alt="kids2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-140px", marginLeft:"71.5%", fontSize:"22px", color:"orange",backgroundColor:"white"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={p3} className="d-block w-100" alt="kids3" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"233px",position:"absolute", zIndex:"5", marginTop:"-155px", marginLeft:"70.2%", fontSize:"22px", color:"black",backgroundColor:"white"}}>SHOP NOW</MDBBtn>
                </div>
            </div>

            {/* arrows to change the slides */}
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

        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px', backgroundColor:'gray'}}>
        <a href="" className="d-flex">
            <img src={ff1} alt="ff1" className="ms-30" />
            <img src={f1} alt="f1" className="ms-5" />
            <img src={ff3} alt="ff3" className="ms-5" />
            <img src={f2} alt="f2" className="ms-5" />
            <img src={f3} alt="f3" className="ms-5" />
        </a>
        </div> 

        <Footer/>
        </>
    )
}
export default PersonalCare