import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { getChapters, getLessons } from "../../redux/actions/actionsCreator/userActionCreator";
import { useDispatch , useSelector } from 'react-redux';
import { useParams, useNavigate, useMatch, Link } from "react-router-dom";
import "../../styles/chapters.css";

export const LessonComponent = (props) => {
    
   const dispatch  = useDispatch() ; 
   const { id } = useParams();

   useEffect(() => {
    dispatch(getLessons(id));
  },[])


   const lessons = useSelector(state => state.userData.lessons);



    return (
        <div>



        <section id="lessons-section" className="my-5 bg-dark">
        <div className="container">
            <div className="row justify-content-between mb-5">
                <div className="col-md-4">
                    <h2 className="">english</h2>
                </div>
        
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="conatainer-box">
                        <ul>
                            {/* <li className="section">
                                <h4>about me</h4>
                            </li> */}

                            {lessons && lessons.map((lesson) =>

                                <li className="lesson d-flex justify-content-between" key={lesson.id}>
                                <div>
                                    <p>{lesson.name}</p>
                                </div>
                                <div>
                                 <Link className="btn-grade link" to={`/singellesson/${lesson.id}`}>Study the lesson</Link>
                                </div>
                                </li>
                            )}

                         
                        </ul>
                    </div>

                </div>
      

            </div>

        </div>
    </section>



        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LessonComponent)