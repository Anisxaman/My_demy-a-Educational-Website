import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Math = (props) => {

    const {img,name,Instructor,rating,price}=props.math;

    console.log(props);

    return (
        <>
  <div className="col-lg-4 col-sm-3 col-12">
    <div className="card hover" style={{height:"420px",borderRadius:"30px"}}   >
      <img  height="200px" src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between">
                     <div className="d-flex">
                     <div>
                           <h5>({rating})</h5>
                       </div>


                           
                   <Rating className='iccon'
                       initialRating={rating}  
                       emptySymbol="far fa-star"
                       // emptySymbol="fas fa-star-o fa-2x"
                       // fullSymbol="fas fa-star fa-2x"
                       fullSymbol="fas fa-star"
                        readonly/>
                     </div>

                <button type="button" className="btn btn-danger ms-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add Cart</button>

                   </div>
      </div>
    </div>
  </div>



            
        </>
    );
};

export default Math;