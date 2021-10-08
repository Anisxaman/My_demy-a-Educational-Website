import React from 'react';
import "./About.css"

import one from "../../Images/author/1.jpg"
import two from "../../Images/author/2.jpg"
import three from "../../Images/author/3.jpg"
import four from "../../Images/author/4.jpg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="container bg-dark ">
        <div  style={{marginTop:"250px"}}>
<div className="row" >

<div className="col-6"> 
            <div class="card card-fluid author py-5" style={{width: "28rem" ,height:"600px",borderRadius:"50px"}}>
         <div className="d-flex">
         <img style={{width: "18rem" }} src={one} className="card-img-top " alt="..."/>
            <div class="card-body">
            <h5 class="card-title">CEO</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
           <div className="d-flex align-items-center">
                <Link to="/1"><button type="button" class="btn btn-primary me-3">Go</button></Link>
                <FontAwesomeIcon className="text-danger fs-1" icon={faEnvelope}></FontAwesomeIcon>
           </div>
           <div>
           <h5><FontAwesomeIcon className="text-danger fs-6" icon={faPhone}></FontAwesomeIcon>
                Phone: 0134347894358</h5>

           </div>
           


            </div>
         </div>
            </div>
</div>
<div  className="col-6">
        
</div>

</div>

<div className="row">

<div className="col-6">
         
</div>
<div className="col-6 d-flex justify-content-end">
            <div class="card author"  style={{width: "18rem",borderRadius:"50px"}}>
           <div className="d-flex">
           <div class="card-body">
            <h5 class="card-title">Managing Director</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div className="d-flex align-items-center">
                <Link to="/1"><button type="button" class="btn btn-primary me-3">Go</button></Link>
                <FontAwesomeIcon className="text-danger fs-1" icon={faEnvelope}></FontAwesomeIcon>
           </div>
           <div>
           <h5><FontAwesomeIcon className="text-danger" icon={faPhone}></FontAwesomeIcon>
                Phone: 0134347894358</h5>

           </div>

            </div>
            <img  src={four} className="card-img-top " alt="..."/>
           </div>

            </div>
</div>

</div>
<div className="row">

<div className="col-6">
<div class="card author "  style={{width: "28rem",borderRadius:"50px"}}>
           <div  className="d-flex">
           <img style={{width: "18rem"}} src={two} className="card-img-top " alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Treserour</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <div className="d-flex align-items-center">
                <Link to="/1"><button type="button" class="btn btn-primary me-3">Go</button></Link>
                <FontAwesomeIcon className="text-danger fs-1" icon={faEnvelope}></FontAwesomeIcon>
           </div>
           <div>
           <h5><FontAwesomeIcon className="text-danger" icon={faPhone}></FontAwesomeIcon>
                Phone: 0134347894358</h5>

           </div>
            </div>
           </div>
            </div>
</div>
<div className="col-6">
      
</div>

</div>
<div className="row">

<div className="col-6">
         
</div>
<div className="col-6 d-flex justify-content-end ">
<div className="card author" style={{width: "18rem",borderRadius:"50px"}}>
<div className="d-flex">
<div class="card-body">
<h5 class="card-title">Chairman</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
{/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
<div className="d-flex align-items-center">
                <Link to="/1"><button type="button" class="btn btn-primary me-3">Go</button></Link>
                <FontAwesomeIcon className="text-danger fs-1" icon={faEnvelope}></FontAwesomeIcon>
           </div>
           <div>
           <h5><FontAwesomeIcon className="text-danger" icon={faPhone}></FontAwesomeIcon>
                Phone: 0134347894358</h5>

           </div>
</div>
<img  src={three} className="card-img-top" alt="..."/>

</div>
</div>
</div>

</div>
           </div>
        
        </div>
  
    );
};

export default About;
















