import "./StudentService.css"

import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,sendEmailVerification,sendPasswordResetEmail, updateProfile,FacebookAuthProvider } from "@firebase/auth";
import initializeAuthentication from "../../firebase/firebase.initialize";
import { useState } from "react";

//-------------------- AuthenticatorAssertion initializeAuthentication---------------------

initializeAuthentication();


const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const StudentService = () => {

const [user,setuser]=useState({})

// ---------------state for email---------------

const [email, setemail] = useState("");
// ---------------state for password---------------

const [passWord, setpassWord] = useState("");

const [error, seterror] = useState("");

const [isLogin, setisLogin] = useState(false);

const [name, setname] = useState("");


// ----------------------------namechange----------------------
const handleNameChange=(e)=>{
  setname(e.target.value);

}


const setUsername=()=>{
  const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});


}






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

//------------------------------------  facebook signin--------------------------

const handleFacebookSignin=()=>{
  const auth = getAuth();
signInWithPopup(auth,FacebookProvider)
  .then((result) =>
   {const {displayName,email,photoURL} = result.user;
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
  if(passWord.length<6){
    seterror("Password must in 6 character long")
    return;
  }

  // --------------------------------case handle-------------------------------------
  if(!/(?=.*?[A-Z])/.test(passWord)){
    seterror("password must contain upper case");
    return;
  }



  const processLogin=(email,passWord)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,passWord)
    .then(result=>{
      const user=result.user;
      console.log(user);
      // seterror("");


    })
    .catch((error) => {
  seterror(error.message);
    } 
    );
    

  }
  
  
  
  const newUser=(email,passWord)=>{
    createUserWithEmailAndPassword(auth, email, passWord)
    .then((result) => {
          // Signed in 
          const user = result.user;
          console.log(user);
          seterror("");
          verifyEmail();
          setUsername();
        })
        .catch((error) => {
          console.log(error.message);
          // ..
        });

}


isLogin? processLogin(email,passWord):newUser(email,passWord);

}




const toggleLogin=(e)=>{
  setisLogin(e.target.checked);

}




// --------------------------------handle get email ------------------------
const handleEmailChange=e=>{
  setemail(e.target.value);
}


// --------------------------------handle get password ------------------------
const handlePassChange=e=>{
  // console.log(e.target.value);
  setpassWord(e.target.value);
}


const verifyEmail=()=>{
  const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then((result) => {
    // Email verification sent!
    console.log(result);
  });
}


//-------------------------------------------------- password reset---------------------------
const handleresetPassword=()=>{
  const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
          {!isLogin &&

      <div class="col-12">
          <label for="inputAddress" className="form-label">Name</label>
          <input type="text" onBlur={handleNameChange} class="form-control" id="inputAddress" placeholder=" Input your name"/>
      </div>}

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
          <h3>please {isLogin?" login ":" registrate"}</h3>
          <br /><br /><br />

          <button onClick={handleresetPassword} type="button" className="btn btn-secondary btn-sm">Reset password</button>
          <div>
                  <label htmlFor="email">Email:   </label>
                
                <input onBlur={handleEmailChange} type="email" name="email"  required/>
          </div>
          <br />
          <div>
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassChange} type="password"  required/>
{/*--------------------------- submit button add ---------------------------------------*/}
          <input type="submit" value="submit" />
          </div>

          {/*--------------------- checkbutton --------------------*/}
          <input onChange={toggleLogin}  className="form-check-input" type="checkbox" id="gridCheck1" />

          <label className="form-check-label" htmlFor="gridCheck1">
            Already Registered?
          </label>

         
        </form>
        <div className="text-danger">
          {error}
        </div>


        <div className="text-center p-5">
        <button type="button" className="btn btn-info me-5">Register</button>
        {/* <button type="button" className="btn btn-danger">Sign in</button> */}

  {/*------------------------------ conditional signin signOut button ----------------------------*/}
       {!user.name?
         <div className="me-5">
            <button onClick={ handleGoogleSignin} type="button" className="btn btn-danger my-3">google Sign in</button>
              <br />
              <button onClick={ handleGitSignin} type="button" className="btn btn-danger">Git Sign in</button>
              <button onClick={ handleFacebookSignin} type="button" className="btn btn-danger m-5">Facebook Sign in</button>
       </div>:
        <button onClick={ handleSignout} type="button" className="btn btn-danger m-5">Sign out</button>}

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





// -----------------------57.4 finish----------