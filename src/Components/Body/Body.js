import "./Body.css"
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Body = (props) => {
    const {img,name,Instructor,rating,price}=props.item;
//-------------------------------------------- display card-----------------------------------
    return (
        <>



        <div className="col-lg-4 col-12 ">
        <div class="card mb-3  " style={{maxWidth: "540px",height:"380px",borderRadius:"30px"}}>
            <div class="row g-0  hover rounded-3">
                
                <div class="col-md-5 col-12">
                <img src={img} style={{height:"380px"}} className="img-fluid rounded-start" alt="not found"/>
                    
                </div>
                <div class="col-md-7 col-12 ">
                <div class="card-body">
                    <h3 class="card-title fw-bolder">{name}</h3>
                    <h5 class="card-title fw-bolder instuctor">{Instructor}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text fs-5"><small class="text-muted">${price}</small></p>
                    

                   
                   <div className="d-flex">
                       <div>
                           <h5>({rating})</h5>
                       </div>


                           
                   <Rating className='iccon'
                       initialRating={rating}  
                       emptySymbol="far fa-star"
                      
                       fullSymbol="fas fa-star"
                        readonly/>

                <button type="button" class="btn btn-danger ms-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add Cart</button>

                   </div>
                   
                </div>
                </div>
                </div>
        
            </div>
            </div>
        

            

            
        </>
    );
};

export default Body;