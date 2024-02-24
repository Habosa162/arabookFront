import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { getChapters } from "../../redux/actions/actionsCreator/userActionCreator";
import { useDispatch , useSelector } from 'react-redux';
import { useParams, useNavigate, useMatch, Link } from "react-router-dom";
import "../../styles/chapters.css";

export const ChapterComponent = (props) => {
    
   const dispatch  = useDispatch() ; 
   const { id } = useParams();
   useEffect(() => {
    dispatch(getChapters(id));
  },[])

   const chapters = useSelector(state => state.userData.chapters);

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
                            <li className="section">
                                <h4>about me</h4>
                            </li>

                            {chapters && chapters.map((chapter) =>

                                <li className="lesson d-flex justify-content-between" key={chapter.id}>
                                <div>
                                    <p>{chapter.name}</p>
                                </div>
                                <div>
                                 <Link className="btn-grade link" to={`/chapter/${chapter.id}`}>Study the chapter</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChapterComponent)