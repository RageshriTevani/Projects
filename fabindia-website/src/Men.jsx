import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import Navbar from "./Navbar.jsx";
import men1 from '../images/men1.jpg'
import men2 from '../images/men2.jpg'
import men3 from '../images/men3.jpg'
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
import mbanner from '../images/mbanner.jpg'
import Footer from "./Footer.jsx";
function Men()
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
                    <img src={men1} className="d-block w-100" alt="men1" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-192px", marginLeft:"62.6%", fontSize:"22px", color:"white",backgroundColor:"orange"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={men2} className="d-block w-100" alt="men2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-225px", marginLeft:"44.2%", fontSize:"22px", color:"white",backgroundColor:"maroon"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={men3} className="d-block w-100" alt="men3" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-195px", marginLeft:"42.6%", fontSize:"22px", color:"black",backgroundColor:"white"}}>SHOP NOW</MDBBtn>
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

        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px', backgroundColor:'lavender'}}>
        <a href="" className="d-flex">
            <img src={m1} alt="m1" className="ms-36" />
            <img src={m2} alt="m2" className="ms-28" />
            <img src={m3} alt="m3" className="ms-28" />
        </a>
        </div>

        <div className="mt-5">
            <a href="" className="d-flex">
            <img src={mbanner} alt="m" style={{width:"100%"}}/>
            <MDBBtn className="btn p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"290px", marginLeft:"43%", fontSize:"22px", color:"black", backgroundColor:"brown"}}>SHOP NOW</MDBBtn></a>
        </div>
            <Footer/>
        </>
    )
}
export default Men