import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import c1 from '../images/c1.webp'
import c2 from '../images/c2.webp'
import c3 from '../images/c3.webp'
import cc1 from '../images/cc1.jpg'
import cc2 from '../images/cc2.jpg'
import cc3 from '../images/cc3.jpg'
import cc4 from '../images/cc4.jpg'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
function Collection()
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
                    <img src={c1} className="d-block w-100" alt="c1" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-118px", marginLeft:"42.5%", fontSize:"22px", color:"black",backgroundColor:"pink"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={c2} className="d-block w-100" alt="c2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-120px", marginLeft:"36.5%", fontSize:"22px", color:"white",backgroundColor:"maroon"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={c3} className="d-block w-100" alt="c3" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-159px", marginLeft:"43%", fontSize:"22px", color:"black",backgroundColor:"white"}}>SHOP NOW</MDBBtn>
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
        
        <div className="p-4 m-5 d-flex w-100" style={{width:'400px', height:'300px', backgroundColor:'pink'}}>
        <a href="" className="d-flex">
            <img src={cc1} alt="c1" className="ms-36" />
            <img src={cc2} alt="c2" className="ms-28" />
            <img src={cc3} alt="c3" className="ms-28" />
            <img src={cc4} alt="c4" className="ms-28" />
        </a>
        </div>
        <Footer/>
        </>
    )
}
export default Collection