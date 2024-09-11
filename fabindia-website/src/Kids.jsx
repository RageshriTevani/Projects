import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import kids1 from '../images/kids1.jpg'
import kids2 from '../images/kids2.jpg'
import kids3 from '../images/kids3.jpg'
import girl1 from '../images/girl1.jpg'
import girl2 from '../images/girl2.jpg'
import girl3 from '../images/girl3.jpg'
import boy1 from '../images/boy1.jpg'
import boy2 from '../images/boy2.jpg'
import boy3 from '../images/boy3.jpg'
import k from '../images/k.jpg'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
function Kids()
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
                    <img src={kids1} className="d-block w-100" alt="kids1" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-125px", marginLeft:"45%", fontSize:"22px", color:"black",backgroundColor:"lightblue"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={kids2} className="d-block w-100" alt="kids2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-190px", marginLeft:"68%", fontSize:"22px", color:"black",backgroundColor:"pink"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={kids3} className="d-block w-100" alt="kids3" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-155px", marginLeft:"15.2%", fontSize:"22px", color:"black",backgroundColor:"white"}}>SHOP NOW</MDBBtn>
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

        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px', backgroundColor:'brown'}}>
        <a href="" className="d-flex">
            <img src={girl1} alt="girl1" className="ms-36" />
            <img src={girl2} alt="girl2" className="ms-28" />
            <img src={girl3} alt="girl3" className="ms-28" />
        </a>
        </div> 
        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px', backgroundColor:'brown'}}>
        <a href="" className="d-flex">
            <img src={boy1} alt="boy1" className="ms-36" />
            <img src={boy2} alt="boy2" className="ms-28" />
            <img src={boy3} alt="boy3" className="ms-28" />
        </a>
        </div> 

        <div className="mt-5">
            <a href="" className="d-flex">
            <img src={k} alt="k" style={{width:"100%"}}/>
            <MDBBtn className="btn p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"290px", marginLeft:"43%", fontSize:"22px", color:"black", backgroundColor:"pink"}}>SHOP NOW</MDBBtn></a>
        </div>
        <Footer/>
        </>
    )
}
export default Kids