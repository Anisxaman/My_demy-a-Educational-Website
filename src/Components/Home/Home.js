import "./Home.css"
import React, { useEffect, useState } from 'react';
import Body from "../Body/Body";
import Topics from "../Topics/Topics";
import Instructor from "../Instructor/Instructor";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";


const Home = () => {
    const [data, setdata] = useState([]);


    useEffect(() => {

        fetch("./FakeData.JSON")
        .then(res=>res.json())
        .then(data=>setdata(data))

       
    }, [])

    const history=useHistory();


    const useHandler=()=>{
        history.push("/services");
    }

console.log(data);
    //----------------------- main home component where contain three child component-------------------
const getData=data.slice(0,5);
    return (
        <>
           <Title></Title>

            <div className="row cart">
                <div className="fs-1 border rounded-3 fw-bold p-5">Web development Course <button onClick={useHandler} type="button" class="btn btn-secondary">Show Details <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                
    </div>
            {
                getData.map(item=><Body
                key={item.id}
                item={item}                
                >

                </Body>
                
                
                )
            } 
            </div>
         

            
            
            
            
            <Topics></Topics>
            <Instructor></Instructor>



            
        </>
    );
};

export default Home;