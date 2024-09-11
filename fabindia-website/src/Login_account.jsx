import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import loginbackground from '../images/loginbackground.jpg'
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
        <Navbar/>
        <div className="account text-center">
            <img src={loginbackground} alt="login" className="w-100" />
            <h3>Log in or register to manage your orders</h3>
            <Link to='/login'><button className="btn btn1">Login</button></Link> 
            <button className="btn btn2">Register</button>
        </div>
        <Footer />
        </>
    )
}
export default Login