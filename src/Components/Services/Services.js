import "./Services.css"

import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Math from "../Math/Math";
import Biology from "../biology/Biology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import Body from "../Body/Body";



const Services = () => {

    const [Mathdata, setMathdata] = useState([]);
    const [BioData, setBioData] = useState([]);
    const [data, setdata] = useState([]);


    useEffect(() => {

        fetch("./FakeData.JSON")
        .then(res=>res.json())
        .then(data=>setdata(data))

       
    }, [])

 

    useEffect(() => {
        fetch("./FakeMath.JSON")
        .then(res=>res.json())
        .then(data=>setMathdata(data))
       
    }, [])


    useEffect(() => {
        fetch("./FakeBiology.JSON")
        .then(res=>res.json())
        .then(data=>setBioData(data))
       
    }, [])



const handler=()=>{
    window.location.reload();
    // history.push("/services")
console.log("here")
}


    return (
        <div className="bg-info" style={{marginTop:"130px"}}>
                 {/* <button type="button" onClick={handler} className="btn btn-secondary mt-5 mb-5"> <Link to={"/services"}> <h1 className="border  fw-bolder text-dark">WebDevelopment Course<button type="button" class="btn btn-secondary"><FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon></button>
 
               </h1></Link></button> */}

           <NavLink to="/" style={{textDecoration:"none"}} ><h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">WebDevelopment Course<FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
            </h1>
            </NavLink>


            



            <div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    data.map(item=><Body
                        key={item.id}
                        item={item}  
                    
                    
                    
                    ></Body>)
                }

            </div>
            </div>

<div>
<Link to={"/MathematicsCourse" } style={{textDecoration:"none"}}><h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Mathematics Course <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
</h1></Link>


 
            <div>
                
                <div class="row row-cols-1 row-cols-md-4 g-4">

                {
                    
                    Mathdata.map(item=><Math
                    key={item.id}
                    math={item}
                    
                    
                    
                    ></Math>)
                }
                </div>
            </div>


            </div>

            <div>
                <h1 className="border p-4 bg-Secondary fw-bolder mt-5 p-5">Biology Course <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
</h1>
                <div>
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    {
                    BioData.map(item=><Biology
                    key={item.id}
                    bio={item}
                    
                    
                    
                    ></Biology>)
                  
                    
                    
                    
                    
                }
                    </div>
                </div>
            
            </div>


        </div>
    );
};

export default Services;