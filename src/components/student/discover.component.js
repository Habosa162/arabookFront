import React , {useEffect,useState}from 'react'
import "../../styles/discover.css";
// import "../../styles/all.min.css";
import {enrolCourse} from "../../redux/actions/actionsCreator/studentActionCreator"
import { useSelector,useDispatch } from 'react-redux'



function DiscoverComponent() {

    const [course,SetCourse] = useState();
    const dispatch  = useDispatch()

//     useEffect(()=>{
//       dispatch(getStudentCourses())
//   },[])
  
  return (
    <div><section id="groups">
    <div className="container text-dark">
        <div className="row justify-content-between mb-5">
            <div className="col-md-4">
                <h2 className="">Join a team</h2>
            </div>
            <div className="col-md-4">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search teams" aria-label="Search" />
                    <button className="btnn btn btn-outline-success" onClick={()=>{

                    }} type="submit">Search</button>
                </form>
            </div>
        </div>

        <div className="row g-4">
            {/* <!-- join a team with a code--> */}
            <div className="col-lg-3 col-sm-6">                                                                                                               
                <div className="info-box py-5 px-4 bg-white h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center"><i
                            className="fa-solid fa-users"></i></div>
                    <h5 className="mb-3 text-center">Join with a code</h5>
                    <form role="search">
                        <input className="form-control me-2 mb-3" name='course' onChange={(e)=>{
                            console.log(course)
                            SetCourse(e.target.value)
                        }} type="search" placeholder="Enter code"
                            aria-label="Search" />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-success" onClick={()=>{
                                dispatch(enrolCourse(course))
                            }} type="submit">Join team</button>
                        </div>

                    </form>
                </div>

            </div>

            {/* <!--first team--> */}

            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-flask"></i>
                    </div>
                    <h5 className=" text-center">chemistry</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                    </div>
                </div>

            </div>

            {/* <!--second team--> */}

            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-brain"></i>
                    </div>
                    <h5 className=" text-center">biology</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-magnet"></i>
                    </div>
                    <h5 className=" text-center">physics</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-etsy"></i>
                    </div>
                    <h5 className=" text-center">english</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-chart-column"></i>
                    </div>
                    <h5 className=" text-center">math</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="info-box py-5 px-4 h-100">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-a"></i>
                    </div>
                    <h5 className=" text-center">arabic</h5>
                    <p className="text-center mb-4">Public</p>
                    <div className=" d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Join team</button>
                        <div>
                            <form action="">

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</section>
</div>
  )
}

export default DiscoverComponent