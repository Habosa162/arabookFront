import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCountry, getGrades, getTerms,getSubjects ,getChapters,getLessons} from "../../redux/actions/actionsCreator/userActionCreator";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/style11.css"
import { createLesson, deleteLesson } from '../../redux/actions/actionsCreator/masterActionCreator';

export const CreateLessonComponent = (props) => {

    const countries = useSelector(state => state.userData.countries);
    const grades = useSelector(state=>state.userData.grades);
    const terms = useSelector(state => state.userData.terms);
    const subjects = useSelector(state => state.userData.subjects);
    const chapters = useSelector(state => state.userData.chapters);
    const lessons = useSelector(state => state.userData.lessons);


    
    const dispatch = useDispatch();

    const [country, setCountry ] = useState();
    const [grade, setGrade ]= useState();
    const [term, setTerm ] = useState();
    const [subject , setSubject ] = useState();
    const [chapter, setChapter ] = useState();
    const [lesson, setLesson ] = useState();
    const [link, setLink ] = useState();

    

    useEffect(() => {
        dispatch(getCountry());
        dispatch(getGrades(country))
        dispatch(getTerms(grade));
        dispatch(getSubjects(term));
        dispatch(getChapters(subject));
        dispatch(getLessons(chapter));

    }, [country,grade,term,subject,chapter]);
    const handelForm = (e) => {
        switch (e.target.name) {
            case "country":
                setCountry(e.target.value);
                break;
            case "grade":
                setGrade(e.target.value);
                break;
            case "term":
                setTerm(e.target.value);
                break;
            case "subject":
                setSubject(e.target.value);
                break;
            case "chapter":
                setChapter(e.target.value);
                break;
            case "lesson":
                setLesson(e.target.value);
                break;
    
            case "link":
                setLink(e.target.value);
                break;


            default:
                break;
        }
    }


    const createLessonFunc = () => {
        dispatch(createLesson(chapter, lesson,link))
        dispatch(getLessons(chapter)) ;
    }

    return (
        <div>
     <section id="groups">
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-md-6">
                            <h2 className="">create subject</h2>
                        </div>
                        <div className="col-md-4">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                <button className="btnn btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="row g-4">


                        <div className="col-lg-3 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">country</label>
                            <select name="country" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select country</option>
                                {countries && countries.map((country) => {
                                    return (
                                        <option value={country.name}>{country.name}</option>
                                    )
                                })}
                            </select>
                        </div>





                        <div className="col-lg-3 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">grade</label>
                            <select name="grade" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select grade</option>
                                {grades && grades.map((grade) => {
                                    return (
                                        <option value={grade.id}>{grade.grade}</option>
                                    )
                                })}
                            </select>
                        </div>




                        <div className="col-lg-3 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">term</label>
                            <select name="term" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select term</option>
                                {terms && terms.map((term) => {
                                    return (
                                        <option value={term.id}>{term.name}</option>
                                    )
                                })}
                            </select>
                        </div>




                        <div className="col-lg-3 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">subject</label>
                            <select name="subject" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select term</option>
                                {subjects && subjects.map((subject) => {
                                    return (
                                        <option value={subject.id}>{subject.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                      
                      
                        <div className="col-lg-3 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">chapter</label>
                            <select name="chapter" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select chapter</option>
                                {chapters && chapters.map((chapter) => {
                                    return (
                                        <option value={chapter.id}>{chapter.name}</option>
                                    )
                                })}
                            </select>
                        </div>


                    </div>



                    <div className="row my-3 justify-content-center align-items-center">
                    
                    {lessons && lessons.map((lesson) =>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mx-1 bg-light text-dark my-2">
                            <div className="info-box py-5 px-4 h-100">
                                <div className="icon-box d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
                                <h3 className="mb-3 text-center">{lesson.name}</h3>
                                <div className="d-flex justify-content-center my-3">
                                    <button className="btn btn-outline-warning m-1" type="submit">Edit</button>
                                    <button className="btn btn-outline-danger m-1" onClick={() => {
                                        dispatch(deleteLesson(lesson.id, chapter))
                                        dispatch(getLessons(chapter))
                                    }} type="button">Delete</button>
                                </div>
                            </div>

                        </div>
                    )}

                    <div className="col-lg-12 col-md-12 col-sm-12 mx-auto text-dark">
                        <div className="mb-3">
                            <label htmlFor="countryInput" className="form-label">Name</label>
                            <input type="text" name='lesson' onChange={(e) => {
                                setLesson(e.target.value)
                            }} className="form-control" id="countryInput" placeholder='Enter lesson Name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="countryInput" className="form-label">Name</label>
                            <input type="text" name='link' onChange={(e) => {
                                setLink(e.target.value)
                            }} className="form-control" id="countryInput" placeholder='Enter Link' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className='btn btn-outline-success w-25' onClick={createLessonFunc}>Create</button>
                        </div>
                    </div>
                </div>

                </div>






                {/* <button className='btn btn-outline-success w-25' onClick={()=>{
                    console.log(`lesson is ${lesson} and chater is ${chapter}`)
                }}>Create</button> */}


            </section>


        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLessonComponent)