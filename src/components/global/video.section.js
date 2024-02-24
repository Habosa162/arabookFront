import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate, useMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSubjects, getTerms ,getSections} from "../../redux/actions/actionsCreator/userActionCreator";
import "../../styles/subjects.css";
import "../../styles/icons.css"



export const VideoSectionComponent = (props) => {
        const { id } = useParams();
        const dispatch = useDispatch();


    const sections = useSelector(state => state.userData.sections);

    useEffect(() => {
        dispatch(getSections(id));
    }, [])


    return (
        <div>


            <section id="lesson-content" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto intro">
                            <h1 class="text-center">Unit 1 : Hello!</h1>
                            <div class="divider"></div>
                        </div>
                    </div>

                    <div class="row g-5 bg-danger">


                        {sections && sections.map((section) =>

                            <div class="col-lg-4 col-sm-6">
                                <div class="info-box">
                                    <div class="item">
                                        <img class="img-fluid w-100" src="images/mqdefault.jpg" alt="" />
                                            <a href="">
                                                <div class="item-layer d-flex justify-content-center align-items-center">
                                                    <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                                                </div>
                                            </a>
                                    </div>

                                    <div class="d-flex py-3 px-2">
                                        <div class="icon-box d-flex justify-content-center align-items-center"><i
                                            class="fa-solid fa-user"></i></div>
                                        <div class="py-1">
                                            <span>Lesson prepared by:</span>
                                            <h6>
                                                <a href="">Arabook School Team</a>
                                            </h6>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        )}


                       <div class="col-lg-4 col-sm-6 bg-light">
                                <div class="info-box">
                                    <div class="item">
                                        <img class="img-fluid w-100" src="images/mqdefault.jpg" alt="" />
                                            <a href="">
                                                <div class="item-layer d-flex justify-content-center align-items-center">
                                                    <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                                                </div>
                                            </a>
                                    </div>

                                    <div class="d-flex py-3 px-2">
                                        <div class="icon-box d-flex justify-content-center align-items-center"><i
                                            class="fa-solid fa-user"></i></div>
                                        <div class="py-1">
                                            <span>Lesson prepared by:</span>
                                            <h6>
                                                <a href="">Arabook School Team</a>
                                            </h6>

                                        </div>

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>


      

    </section >

  


    </div >
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VideoSectionComponent)