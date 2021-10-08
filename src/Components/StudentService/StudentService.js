import "./StudentService.css"

import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut } from "@firebase/auth";
import initializeAuthentication from "../../firebase/firebase.initialize";
import { useState } from "react";

//-------------------- AuthenticatorAssertion initializeAuthentication---------------------

initializeAuthentication();


const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();

const StudentService = () => {
const [user,setuser]=useState({})










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










    return (
        <>

        {/* ------------------------student service div ----------------------------*/}


    

       <div className="container ">
       <div className="text-center" style={{marginTop:"250px"}}>
                    <h1 className="text-primary fs-1 fw-bold">Are you a Student??</h1>
                    <h3 className="text-danger">Please Registration for <span className="fs-1 text danger"> Free</span></h3>

        </div>

        <div>

        <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">User Name</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2">Email</span>
              </div>

              <label for="basic-url" class="form-label">Your vanity URL</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span class="input-group-text">.00</span>
              </div>

              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
              </div>

              <div class="input-group">
                <span class="input-group-text">Comment</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
            
        </div>


        <div className="text-center p-5">
        <button type="button" class="btn btn-info me-5">Register</button>
        {/* <button type="button" class="btn btn-danger">Sign in</button> */}

        {/*---------------------- conditional signin signOut button ----------------*/}
       {!user.name?
         <div>
            <button onClick={ handleGoogleSignin} type="button" class="btn btn-danger">Sign in</button>
              <br />
              <button onClick={ handleGitSignin} type="button" class="btn btn-danger">Git Sign in</button>
       </div>:
        <button onClick={ handleSignout} type="button" class="btn btn-danger">Sign out</button>}

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