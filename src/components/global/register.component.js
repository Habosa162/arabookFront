import React ,{useState,useEffect} from 'react'
import img from "../../assets/images/open.jpeg" ;
import { useDispatch, useSelector } from "react-redux";
import {getGender,getRole,getCountry ,register} from "../../redux/actions/actionsCreator/userActionCreator" ; 
import { useNavigate } from 'react-router-dom';
function RegisterComponent() {


  

  const [user,setUser] = useState({name:"",email:"",password:"",role:0,gender:0,country:0})

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();

  const navigate = useNavigate() ;
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getGender());
    dispatch(getRole())
    dispatch(getCountry()) ; 
}, [])
  
const roles = useSelector(state=>state.userData.roles) ; 
const genders = useSelector(state=>state.userData.genders) ; 
const countries = useSelector(state=>state.userData.countries) ; 

  const handelForm = (e) => {
    switch (e.target.name) {
        case "name":
           setName(e.target.value);
            break;
        case "email":
           setEmail(e.target.value);
            break;
        case "password":
          setPassword(e.target.value);
          break;
          
        case "role":
          setRole(e.target.value);
            break;
        case "gender":
          setGender(e.target.value);
            break;
        case "country":
          setCountry(e.target.value);
            break;

        default:
            break;
    }
}


// const [user,setUser] = useState({name:"",email:"",password:"",role:0,gender:0,country:0})


const onRegister=()=>{
    dispatch(register({email,password,name,role,country,gender},navigate));
}


  return (
    <>
    {/* <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12">
          <div className="item">
            <img className="img-fluid" src={img}alt="Site image" />
          </div>
          <form className="form-container p-5">
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="name" name='name' onChange={handelForm} className="form-control" id="exampleInputName1" placeholder='Enter your Name'/>

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" name='email' onChange={handelForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name='password' onChange={handelForm} className="form-control" id="exampleInputPassword1"  placeholder='Enter your Password' />

            </div>




            <div className="form-group my-3 col-md-12 position-relative">
                                <label htmlFor="roleInput">Role</label>
                                <select name="role" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="roleInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select role</option>
                                    {roles && roles.map((role) => {
                                        return (
                                            <option value={role.id}>{role.name}</option>
                                        )
                                    })}
                                </select>
            </div>

    



            <div className="form-group my-3 col-md-12 position-relative">
                                <label htmlFor="genderInput">gender</label>
                                <select name="gender" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="genderInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select gender</option>
                                    {genders && genders.map((gender) => {
                                        return (
                                            <option value={gender.id}>{gender.name}</option>
                                        )
                                    })}
                              </select>
            </div>

            <div className="form-group my-3 col-md-12 position-relative">
                                <label htmlFor="countryInput">country</label>
                                <select name="country" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select country</option>
                                    {countries && countries.map((country) => {
                                        return (
                                            <option value={country.id}>{country.name}</option>
                                        )
                                    })}
                              </select>
            </div> 


            {/* <button type='button' onClick={()=>{
              dispatch(getCountry())
            }}>get roles</button> 

            <div className="d-flex justify-content-center">
              <button type="button" onClick={onRegister} className="btn btn-outline-success w-50">Submit</button>

            </div>

          </form>

        </div>

      </div>
    </div> */}
{/* //////////////////////////////////////////////////////////////// */}
<div className="container-fluid bg text-white overlayer">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-xl-4 col-lg-8 col-md-8 col-sm-12">
                {/* <!-- form start--> */}
                <form className="form-container">
                    <h1 className="text-center">create your account</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" name='name' onChange={handelForm}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"  name='email' onChange={handelForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={handelForm} className="form-control" id="exampleInputPassword1"
                            placeholder="Enter password" />
                    </div>
                    <div className="grade mb-3">
                        <label for="exampleInputGradel1" className="form-label">Role</label>
                        <select name="role" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="roleInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select role</option>
                                    {roles && roles.map((role) => {
                                        return (
                                            <option value={role.id}>{role.name}</option>
                                        )
                                    })}
                                </select>
                    </div>
                    <div className="gender mb-3">
                        <label for="exampleInputGenderl1" className="form-label">Country</label>
                        <select name="country" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select country</option>
                                    {countries && countries.map((country) => {
                                        return (
                                            <option value={country.id}>{country.name}</option>
                                        )
                                    })}
                          </select>
                    </div>

                    <div className="gender mb-3">
                        <label for="exampleInputGenderl1" className="form-label">Gender</label>
                        <select name="gender" onChange={(e)=>{
                                    handelForm(e) ; 
                                }} className="form-select form-control" id="genderInput" aria-label="Default select example">
                                    <option value="" disabled selected>Select gender</option>
                                    {genders && genders.map((gender) => {
                                        return (
                                            <option value={gender.id}>{gender.name}</option>
                                        )
                                    })}
                              </select>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary"  onClick={onRegister} type="button">Sign Up</button>
                    </div>

                </form>

                {/* <!-- form end--> */}

            </div>


        </div>
    </div>

    </>
  )
}

export default RegisterComponent