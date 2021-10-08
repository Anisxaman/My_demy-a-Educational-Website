import "./StudentService.css"

import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut,createUserWithEmailAndPassword  } from "@firebase/auth";
import initializeAuthentication from "../../firebase/firebase.initialize";
import { useState } from "react";

//-------------------- AuthenticatorAssertion initializeAuthentication---------------------

initializeAuthentication();


const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();

const StudentService = () => {

const [user,setuser]=useState({})

// ---------------state for email---------------

const [email, setemail] = useState("");
// ---------------state for password---------------

const [passWord, setpassWord] = useState("");









// --------------------------------------Google signin------------------------


  const  handleGoogleSignin=()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
           
            // const logInUser = result.user;
            // console.log(logInUser);
            const {displayName,email,photoURL} = result.user;
            const logInUser={
              name:displayName,
              email:email,
              photo:photoURL
            };
           
           console.log(logInUser);
           setuser(logInUser);
          })
          .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
            console.log(error.message);
          });


   }
// -----------------------------------------github signin------------------------
const  handleGitSignin=()=>{
  const auth = getAuth();
  signInWithPopup(auth,Gitprovider)
  .then((result) => {
         
          // const logInUser = result.user;
          // console.log(logInUser);
          const {displayName,email,photoURL} = result.user;
          const logInUser={
            name:displayName,
            email:email,
            photo:photoURL
          };
         
         console.log(logInUser);
         setuser(logInUser);
        })
        .catch((error) => {
        
          console.log(error.message);
        });


 }





 //-----------------------signout----------------------------------
const  handleSignout=()=>{
  const auth = getAuth();
signOut(auth).then(() => {
  setuser({});
}).catch((error) => {
  // An error happened.
});

}


// ------------------------------------submit event handler for  email--------------------------

const handleRegistration=(e)=>{
  e.preventDefault(); ///form by default reload hoi .ta bondo jorte preventDefault
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, passWord)
  .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });

}


// --------------------------------handle email change------------------------
const handleEmailChange=e=>{
  setemail(e.target.value);
}


// --------------------------------handle password change------------------------
const handlePassChange=e=>{
  // console.log(e.target.value);
  setpassWord(e.target.value);
}










    return (
        <>

        {/* ------------------------student service div ----------------------------*/}


    

       <div className="container ">
       <div className="text-center" style={{marginTop:"250px"}}>
                    <h1 className="text-primary fs-1 fw-bold">Are you a Student??</h1>
                    <h3 className="text-danger">Please Registration for <span className="fs-1 text danger"> Free</span></h3>

        </div>

        <div>

        <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">User Name</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2">Email</span>
              </div>

              <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span className="input-group-text">.00</span>
              </div>

              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
              </div>

              <div className="input-group">
                <span className="input-group-text">Comment</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
            
        </div>

  {/*----------------------------------- create form ------------------------------------------------*/}
        <form onSubmit={handleRegistration} action="">
          <h3>please registar</h3>
          <br /><br /><br />
          <div>
                  <label htmlFor="email">Email:   </label>
                
                <input onBlur={handleEmailChange} type="email" name="email"  required/>
          </div>
          <br />
          <div>
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassChange} type="password"  required/>

          <input type="submit" value="submit" />
          </div>

         
        </form>


        <div className="text-center p-5">
        <button type="button" className="btn btn-info me-5">Register</button>
        {/* <button type="button" className="btn btn-danger">Sign in</button> */}

  {/*------------------------------ conditional signin signOut button ----------------------------*/}
       {!user.name?
         <div>
            <button onClick={ handleGoogleSignin} type="button" className="btn btn-danger">Sign in</button>
              <br />
              <button onClick={ handleGitSignin} type="button" className="btn btn-danger">Git Sign in</button>
       </div>:
        <button onClick={ handleSignout} type="button" className="btn btn-danger">Sign out</button>}

{/* ----------------------------display inf0 -----------------------*/}
        {
          user.email && <div>
          <h2 >Welcome {user.name}</h2>
          <p><small>Your email: {user.email}</small></p>
          <img src={user.photo} alt="" />
          </div>
        }
        {/* <h1 className="text-dark">eferfefe</h1> */}


        </div>
       </div>

        </>
    );
};

export default StudentService;