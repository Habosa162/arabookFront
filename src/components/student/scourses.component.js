import React  ,{useEffect} from 'react'
import { connect } from 'react-redux'
import { useParams , Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {getStudentCourses} from "../../redux/actions/actionsCreator/studentActionCreator" ;
import calcimg from "../../assets/images/Lovepik_com-400254962-calculator.png"




export const ScoursesComponent = (props) => {
  const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(getStudentCourses())
},[])

const courses = useSelector(state => state.userData.studentCourses);



  return (
    <div> <div>
    <div className="container my-5">
        <div className="row">

            <div className="col-md-12 my-5">
                <div className="d-flex justify-content-center">
                    <Link to={"/create/course"} className="btn btn-outline-light w-25">create new group</Link>
                </div>
            </div>


            {courses&&courses.map((course) =>
                        <Link className="singleGroup col-md-2 bg-dark my-3 mx-3" to={`/course/${course.course_id}`}>
                         <div className="group bg-light">
                             <div className="row justify-content-center align-items-center text-center">
                             <div className="col-md-12">
                                 </div>
                                 <div className="col-md-12">
                                     <div className="img-fluid img">
                                         <img className="img-fluid" src={calcimg} />
                                     </div>
                                 </div>
                                 <div className="col-md-12">
                                     <p >{course.course_title}</p>
                                     <p >{course.course_description}</p>
                                 </div>
                             </div>
                         </div>
                     </Link>
         
                    )}

        </div>
    </div>
</div></div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ScoursesComponent)