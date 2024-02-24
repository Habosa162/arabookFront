import React ,{useEffect} from 'react'
import { connect } from 'react-redux'
import calcimg from "../../assets/images/Lovepik_com-400254962-calculator.png"
import "../../styles/groups.css"
import { Link } from "react-router-dom";
import {getTeacherCourses} from "../../redux/actions/actionsCreator/teacherActionCreator" ;
import { useDispatch ,useSelector} from 'react-redux';
export const TcoursesComponent = (props) => {
    const dispatch  = useDispatch()
    // 
    const courses = useSelector(state => state.courseData.teacherCourses);

    useEffect(()=>{
        dispatch(getTeacherCourses())
    },[])
  return (
    <div>
    <div className="container my-5">
        <div className="row justify-content-center">

            <div className="col-md-12 my-5">
                <div className="d-flex justify-content-center">
                    <Link to={"/create/course"} className="btn btn-outline-light w-25">create new group</Link>
                </div>
            </div>

            {courses && courses.map((course) =>
                      <div className="col-lg-4 col-sm-6">
                        <div className="info-box py-4 px-4 bg-white">
                          <div className="icon-box d-flex align-items-center justify-content-center"><i
                            className="icon-book-open"></i></div>
                          <div className="link d-flex justify-contet-center align-items-center flex-column">
                              <h3>{course.title}</h3>
                              <Link className="btn btn-outline-success h3" to={`/course/${course.id}`}>Enter your course</Link>
                          </div>
                        </div>
                      </div>

                    )}





        </div>
    </div>
</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TcoursesComponent)