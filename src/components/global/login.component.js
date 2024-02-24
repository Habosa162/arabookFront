import React , { useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import validator from "validator";
import {signIn} from "../../redux/actions/actionsCreator/userActionCreator.js" ;
import img from "../../assets/images/open.jpeg" ;
import "../../styles/login.css";

function LoginComponent() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector(state => state.userData.message);

  // _________________boolean states for error____________

  const [emailError, setemailErr] = useState(false);
  const [passwordError, setPasswordErr] = useState(false);
  const [messagePopup, setmessagePopup] = useState(true);
  const [showPwd, setshowPwd] = useState(false);
  // _________________string states for inputs____________

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();



  const OnSignIN = () => {
    if ((email !== undefined)) {
      if (!(validator.isEmail(email))) {
        setemailErr(true);
      }
    }

    if (password !== undefined) {
      if (!(validator.isLength(password, { min: 8 }))) {
        setPasswordErr(true);
      }
    }

    // if (message !== null) { //handel wrong password from backend 
    //   setmessagePopup(true);
    // }





    if ((email !== undefined) && (password !== undefined)) {
// ---------------------------((((the sign in method to contact api))))---------------------------------
      if (!(emailError) && !(passwordError)) {
        console.log(`the email is ${email} nad the pass is ${password}`)
        dispatch(signIn({
          email: email,
          password: password
        }, navigate));

        if(messagePopup){
          alert(message) ; 
        }

        // if (message === "Success") {
        //   setSuccess(true);
        // }

      }
    }
  
  }






  const handelForm = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        setemailErr(false);
        break;
      case "password":
        setpassword(e.target.value);
        setPasswordErr(false);
        setmessagePopup(false);
        break;
      default:
        break;
    }
    //  console.log() ; 
  }


  return (
    <div class="container-fluid bg text-white overlayer">
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-xl-4 col-lg-8 col-md-8 col-sm-12">
            {/* <!-- form start--> */}
            <form class="form-container">
                <h1 class="text-center">Login Now</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={handelForm} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter Email" />
                    <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.
                    </div>
                </div>


                {emailError&&<div class="alert alert-secondary" role="alert">
                         THE EMAIL IS WRONG PLEASE TRY AGIN 
                        </div>}



                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" onChange={handelForm} name='password' class="form-control" id="exampleInputPassword1"
                        placeholder="Enter password" />
                </div>
                 {passwordError&&<div class="alert alert-secondary" role="alert">
                         THE PASSWORD IS WRONG PLEASE TRY AGIN 
                        </div>} 

                <div class="d-grid gap-2">
                    <button class="btn btn-primary" onClick={OnSignIN} type="button">Sign In</button>
                </div>
                <div class="py-4 d-flex justify-content-around">
                    <p>Don't have an account?</p>
                    <a href="/register">Register here</a>
                </div>
            </form>

            {/* <!-- form end--> */}

        </div>


    </div>
</div>
  )
}

export default LoginComponent




//



                        
                        