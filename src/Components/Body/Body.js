import "./Body.css"
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Body = (props) => {
    const {img,name,Instructor,rating,price}=props.item;
//--------------------------------- display card-----------------------------------
    return (
        <>

        <div className="card col-lg-4 col-sm-3 col-12"  style={{height:"720px",borderRadius:"30px"}}>
            <div className=" hover rounded-3 p-2">
                
                <div >
                <img src={img} className="img-fluid" style={{borderRadius:"10px"}}  alt="not found"/>
                    
                </div>
                <div >
                <div className="card-body">
                    <h3 classNames="card-title fw-bolder">{name}</h3>
                    <h5 className="card-title fw-bolder instuctor">{Instructor}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text fs-5"><small className="text-muted">${price}</small></p>
                    

                   
                   <div className="d-flex justify-content-between">
                       <div>
                           <h5>({rating})</h5>
                       </div>


                           
                   <Rating className='iccon'
                       initialRating={rating}  
                       emptySymbol="far fa-star"
                      
                       fullSymbol="fas fa-star"
                        readonly/>

                <button type="button" className="btn btn-danger ms-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add Cart</button>

                   </div>
                   
                </div>
                </div>
                </div>
        
            </div>
           
        

            

            
        </>
    );
};

export default Body;