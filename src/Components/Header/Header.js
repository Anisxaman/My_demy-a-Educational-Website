import "./Header.css"
import "animate.css"


import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBookOpen, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "tomato"
        
    }
    return (
      
        < >
<nav className="navbar navbar-expand-lg navbar-dark primary fixed-top ">
  <div className="container-fluid">
    <a className="navbar-brand ms-5" style={{fontSize:"25px"}} href="/shop"><span className="focusName text-danger fw-bolder">M</span>y-demy <FontAwesomeIcon className="ms-2" style={{fontSize:"40px"}} icon={faBookOpen}></FontAwesomeIcon>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
         
          <NavLink activeStyle={activeStyle} className="nav-link" to="/services" >Services</NavLink>
        </li>
        <li className="nav-item">
                   <NavLink activeStyle={activeStyle}  className="nav-link" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeStyle={activeStyle} className="nav-link" to="/student">For Student</NavLink>
        </li>
        <li className="nav-item">
        
          <button  type="button"   class="btn btn-success me-2"><FontAwesomeIcon className="text-dark me-2" icon={faShoppingCart}></FontAwesomeIcon>Cart </button>

        </li>
     
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/shop">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* -----------------------nav bar end------------------------------------------------ */}


        </>
    );
};

export default Header;