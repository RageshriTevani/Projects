import React from "react";
import logo from '../images/fabindia-logo.svg'
import flag from '../images/smallflag.jpg'
import { MDBNavbar, MDBBtn } from "mdb-react-ui-kit";
import { BiCart, BiHeart, BiSearch, BiSolidMap, BiSolidUserAccount } from "react-icons/bi";
import { Link} from 'react-router-dom'
function Navbar()
{
  return(
    <>
{/* navbar starts from here */}

    <MDBNavbar className="expand-lg  bg-red-950 p-0 pb-0">
      <Link to="/sale" className="text-white w-100">
        <h6 className="text-center pt-2 ">
          <marquee className="marq" direction="left" loop="">Time to Sale-a-brate! Up To 50%* off on Select Apparel & Home Essentials | *T&C Apply</marquee>
        </h6></Link>
    </MDBNavbar>

  <div className="sticky-top">
    <MDBNavbar className="navbar-expand-lg bg-stone-100 shadow-3xl shadow-slate-950 ">
      <div className="col-md-5 text-2xl d-flex">
        <Link to='/map' className="text-black ">
          <BiSolidMap className="ms-60 mt-2"/>
        </Link>
        <img src={flag} alt="flag" className="flag rounded-full ms-3" />
        <MDBBtn className="btnlocation mt-1 pb-2 ps-1 pt-2 shadow-none " type="button" aria-expanded="false">India</MDBBtn>
          <ul className="dropdown-menu">
            <li className="col-md-4 ms-4"><a className="dropdown-item text-center" href="#">WorldWide</a></li>
          </ul>
      </div>
      <div className="col-md-4">
        <img src={logo} alt="logo" className="ms-16" />
      </div>
      <div className="col-md-6 d-flex text-2xl">
      <Link to='' className="text-red-900 hover:text-red-900 me-3">
      <BiSearch /></Link>
      <Link to='/Login' className="text-red-900 hover:text-red-900 me-3"><BiSolidUserAccount /></Link>
      
      <Link to='' className="text-red-900 hover:text-red-900 me-3"><BiHeart /></Link>
      <Link to='' className="text-red-900 hover:text-red-900 me-3"><BiCart /></Link>
      </div>
    </MDBNavbar>


{/* new arrivals */}
    <MDBNavbar className="navbar2 w-100 navbar-expand-lg bg-stone-100 m-0 ">
      <div>
        <ul className="d-flex pt-3 mt-0 text-xl">
          <li><Link to="/newarrivals" className=" text-black ms-72 ps-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">New Arrivals</Link></li>

          <li><Link to="/women" className=" text-black ms-4 ps-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Women</Link></li>

          <li><Link to="/men" className=" text-black ms-4 ps-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Men</Link></li>

          <li><Link to="/kids" className=" text-black ms-4 ps-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Kids</Link></li>

          <li><Link to="/personalcare" className="text-black ms-4 ps-4 hover:underline  hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Personal Care</Link></li>

          <li><Link to="/collection" className="text-black ms-4 ps-4 hover:underline  hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Collection</Link></li>

          <li><Link to="/services" className="text-black ms-4 ps-4 hover:underline  hover:decoration-red-900 md:underline-offset-8 hover:decoration-4">Services</Link></li>

          </ul>
      </div>
    </MDBNavbar>
</div>
    </>
  )
}
export default Navbar