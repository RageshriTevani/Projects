import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import w1 from '../images/w1.jpg'
import w2 from '../images/w2.jpg'
import w3 from '../images/w3.jpg'
import w4 from '../images/w4.jpg'
import wbanner from '../images/wbanner.jpg'
function Women()
{
    // display prodcuts
    const[data,setData]=useState();
    const Navigate=useNavigate();
    // using useeffects fetch data
    useEffect(()=>{

        // fetch api data
        axios.get(`http://localhost:8000/add-products`).then((response)=>{
            setData(response.data);
        })
    },[data]);



    return(
        <>
        <Navbar/>
        {/* content slider */}
        <div id="carouselExampleIndicators" className="carousel slide  mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="image1" />
                    <MDBBtn className="btn  p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px", position:"absolute", zIndex:"5", marginTop:"-209px", marginLeft:"23%", fontSize:"22px", color:"white",backgroundColor:"orange"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="image2" />
                    <MDBBtn className="btn font-bold p-2 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-159px", marginLeft:"41.2%", fontSize:"22px", color:"white",backgroundColor:"maroon"}}>SHOP NOW</MDBBtn>
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
        
        <div className="p-4 m-5 d-flex w-100" style={{width:'300px', height:'300px', backgroundColor:'pink'}}>
        <a href="" className="d-flex">
            <img src={w1} alt="w1" className="ms-36" />
            <img src={w2} alt="w2" className="ms-4" />
            <img src={w3} alt="w3" className="ms-4" />
            <img src={w4} alt="w4" className="ms-4" />
        </a>
        </div>

        <div className="mt-5">
            <a href="" className="d-flex">
            <img src={wbanner} alt="wbanner" style={{width:"100%"}}/>
            <MDBBtn className="btn p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"250px", marginLeft:"42%", fontSize:"22px", color:"black", backgroundColor:"pink"}}>SHOP NOW</MDBBtn></a>
        </div>        
        <Footer/>
        </>
    )
}

export default Women