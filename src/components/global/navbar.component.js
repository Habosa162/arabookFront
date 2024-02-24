import React  , {useState , useEffect}from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux'
import {getCurrentUser,loggedOut}from"../../redux/actions/actionsCreator/userActionCreator" ;
import { getCountry } from "../../redux/actions/actionsCreator/userActionCreator";
import "../../styles/home&navbar.css"
export function NavbarComponent(){


  const dispatch = useDispatch();
  // const [response, setResponse] = useState("");


  const [isLoggedIn, setLoggedIn] = useState(false);  
  const user = useSelector(state => state.userData.user);

  const countries = useSelector(state => state.userData.countries);

  // const [showPwd,setshowPwd]   = useState(false) ; 


  const isLoggedINN = useSelector(state => state.userData.isLoggedIn) ; 

  const navigate = useNavigate();

  

  useEffect(() => {
    dispatch(getCountry());

  setLoggedIn(localStorage.getItem("isLoggedIn"))
 
  if (localStorage.getItem("isLoggedIn")) {
    dispatch(getCurrentUser());
  }
    },[localStorage,isLoggedIn,isLoggedINN])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">OPEN BOOK</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                    
              {<Link to={"/"} className="nav-link">Home</Link>}
              { isLoggedIn &&user.role=="student" && <Link to={"/scourses"} className="nav-link">Courses</Link>}  {/* //student */}
              { isLoggedIn &&user.role=="student"&&<Link to={"/discover"} className="nav-link">Discover</Link>}  {/* //student */}
              { isLoggedIn && user.role=="teacher" && <Link to={"/tcourses"} className="nav-link">Courses</Link>}  {/* //teacher */}
              { isLoggedIn && user.role=="master" && <Link to={"/create/country"} className="nav-link">country</Link>}  {/* //master */}
              { isLoggedIn && user.role=="master" && <Link to={"/create/grade"} className="nav-link">grade</Link>}  {/* //master */}
              { isLoggedIn && user.role=="master" && <Link to={"/create/term"} className="nav-link">term</Link>}  {/* //master */}
              { isLoggedIn && user.role=="master" && <Link to={"/create/subject"} className="nav-link">subject</Link>}  {/* //master */}
              { isLoggedIn && user.role=="master" && <Link to={"/create/chapter"} className="nav-link">chapter</Link>}  {/* //master */}

              { isLoggedIn && user.role=="master"&& <Link to={"/create/lesson"} className="nav-link">lesson</Link>}  {/* //master */}
              
              
              
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Your Region
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          
                            {countries&&countries.map((country) =>
                      <li>
                      <Link className="dropdown-item" key={country.id} to={`/${country.name}/grades`}>{country.name}</Link>
                    </li>
                    )}
                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#sign-in">Sign In</a>
                    </li> */}
                    {isLoggedIn  ? <Link className="nav-link active" to={"/"} onClick={() => {dispatch(loggedOut(navigate)); }} >Log out</Link> : <Link className="nav-link active" to={"/login"} >login</Link>}
              
              
              
              
                    <li className="nav-item">
                        <a className="nav-link">{user.name}</a>
                    </li>



                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
