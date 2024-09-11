import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBBtn } from "mdb-react-ui-kit";
import flag from '../images/smallflag.jpg'
import storepagebanner from '../images/storepagebanner.jpg'
function Map(){
    return(
        <>
        <Navbar/>
        <img src={storepagebanner} alt="banner" className="img-fluid ms-60 pb-0 pt-0"/>
            <div className="details  shadow-md">
                <h5 className=" p-5 pt-5">STORE FINDER</h5>

                <div className="d-flex content">
                <img src={flag} alt="flag" className="smallflag rounded-full ms-5" />
                    <MDBBtn className="location mt-1 pb-2 ps-0 pt-2 ms-3 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">India</MDBBtn>
                    <ul className="dropdown-menu">
                        <li className="col-md-4 ms-4"><a className="dropdown-item text-center" href="#">International</a></li>
                    </ul>

                    {/* searchbar */}
                    <div className="searchbar w-75 ms-4 mt-2 input-group">
                        <input type="search" placeholder="Search here by a City or Pincode" className="form-control ms-60 hover:border-red-900" />
                        <span className="input-group-text"><i className="bi bi-search text-red-900 me-16"></i></span>
                    </div>
                </div>
                <h5 align='center' className="m-1 mt-0 p-5">POPULAR CITIES</h5>
                <ul className="ms-20 mt-1 text-center d-flex">
                    <a href="" className="text-gray-600 "><li className="ms-5">MUMBAI</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">NEW DELHI</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">BENGALURU</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">CHENNAI</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">AHMEDABAD</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">HYDRABAD</li></a>
                    <a href="" className="text-gray-600 "><li className="ms-4">JAIPUR</li></a>
                </ul>
                <ul className="d-flex p-5 ms-24">
                    <a href="" className="text-gray-600"><li className="ms-5">KOCHI</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">PUNE</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">KOLKATA</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">PATNA</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">CHANDIGARH</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">LUCKNOW</li></a>
                    <a href="" className="text-gray-600"><li className="ms-4">GURUGRAM</li></a>
                </ul>
                </div>
            <Footer/>
        </>
    )
}
export default Map