import "./Instructor.css"
import one from '../../Images/teacher/1.jpg'
import two from '../../Images/teacher/2.jpg'
import three from '../../Images/teacher/3.jpg'
import "animate.css"


import React from 'react';

const Instructor = () => {
    return (
        <div className="mb-5">
            <div className="text-center fs-3 p-5">
                <h2 className="text-success fw-bold animate__animated animate__flip"> MEET THE TEACHERS</h2>
                <h5>WE HAVE THE HIGHLY QUALIFIED TEACHERS FOR WORLD CLASS TEACHING</h5>
            </div>


            <div>
            <div id="carouselExampleCaptions"  class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{marginLeft:"450px",borderRadius:"20px"}}>
      <img  height="600px"  src={one} class="d-block w-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-white fw-bold fs-2" style={{marginRight:"850px"}}>
        <h5>John Chena</h5>
        <p>Math</p>
      </div>
    </div>
    <div class="carousel-item" style={{marginLeft:"450px",borderRadius:"20px"}}>
      <img  height="600px"  src={two} class="d-block w-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-danger fw-bold fs-2 " style={{marginRight:"850px"}}>
        <h5>Showen Mickle</h5>
        <p>Bengali</p>
      </div>
    </div>
    <div class="carousel-item" style={{marginLeft:"450px",borderRadius:"20px"}}>
      <img  height="600px"  src={three} class="d-block w-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-danger fs-2 fw-bold " style={{marginRight:"850px"}}>
        <h5>Triple H</h5>
        <p>Biology</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            
        </div>
    );
};

export default Instructor;