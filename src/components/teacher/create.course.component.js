import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import { getGrades, getTerms, getCountry, getSubjects } from "../../redux/actions/actionsCreator/userActionCreator";
import {createCourse}  from "../../redux/actions/actionsCreator/teacherActionCreator";
import img from "../../assets/images/open.jpeg";
import {useNavigate} from "react-router-dom" ;


export const CreateCourseComponent = (props) => {
  // const [user,setUser] = useState({name:"",title:"",password:"",term:0,grade:0,country:0})


  const navigate = useNavigate();


  const [country, setCountry] = useState();
  const [grade, setGrade] = useState();
  const [term, setTerm] = useState();
  const [subject, setSubject] = useState();
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();

  ////////////////////////////////////////////////////////
  const [descriptionError, setdescriptionErr] = useState(false);
  const [titleError, setTitleErr] = useState(false);
  const [GradeError, setGradeErr] = useState(false);
  const [SubjectError, setSubjectErr] = useState(false);
  const [TermError, setTermErr] = useState(false);
  const [countryError, setCountryErr] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountry());
    dispatch(getGrades(country));
    dispatch(getTerms(grade))
    dispatch(getSubjects(term))
  }, [country, grade, term, subject]);


  const countries = useSelector(state => state.userData.countries);
  const grades = useSelector(state => state.userData.grades);
  const terms = useSelector(state => state.userData.terms);
  const subjects = useSelector(state => state.userData.subjects);


  const handelForm = (e) => {
    
    switch (e.target.name) {
      case "country":
        setCountry(e.target.value);
        setCountryErr(false);
        break;
      case "grade":
        setGrade(e.target.value);
        setGradeErr(false);
        break;
      case "term":
        setTerm(e.target.value);
        setTermErr(false);
        break;

      case "subject":
        setSubject(e.target.value);
        setSubjectErr(false);
        break;
      case "title":
        setTitle(e.target.value);
        setTitleErr(false);
        break;

      case "description":
        setdescription(e.target.value);
        setdescriptionErr(false);
        break;

      default:
        break;
    }
  }


  const onCreateGroup=()=>{
      // setUser({name,title,password,term,grade,country}) ;
      dispatch(createCourse({title,description,country,grade,term,subject},navigate));
  }

  return (
    <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12">
          <div className="item">
            {/* <img className="img-fluid" src={img} alt="Site image" /> */}
          </div>
          <form className="form-container p-5">


            <div className="form-group my-3 col-md-12 position-relative">
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




            <div className="form-group my-3 col-md-12 position-relative">
              <label htmlFor="gradeInput">grade level</label>
              <select name="grade" onChange={(e) => {
                handelForm(e);
              }} className="form-select form-control" id="gradeInput" aria-label="Default select example">
                <option value="" disabled selected>Select grade</option>
                {grades && grades.map((grade) => {
                  return (
                    <option value={grade.id}>{grade.level}</option>
                  )
                })}
              </select>
            </div>



            <div className="form-group my-3 col-md-12 position-relative">
              <label htmlFor="termInput">term</label>
              <select name="term" onChange={(e) => {
                handelForm(e);
              }} className="form-select form-control" id="termInput" aria-label="Default select example">
                <option value="" disabled selected>Select term</option>
                {terms && terms.map((term) => {
                  return (
                    <option value={term.id}>{term.name}</option>
                  )
                })}
              </select>
            </div>



            <div className="form-group my-3 col-md-12 position-relative">
              <label htmlFor="subjectInput">subject</label>
              <select name="subject" onChange={(e) => {
                handelForm(e);
              }} className="form-select form-control" id="subjectInput" aria-label="Default select example">
                <option value="" disabled selected>Select subject</option>
                {subjects && subjects.map((subject) => {
                  return (
                    <option value={subject.id}>{subject.name}</option>
                  )
                })}
              </select>
            </div>





            <div className="mb-3">
              <label htmlFor="exampleInputtitle1" className="form-label">title</label>
              <input type="title" name='title' onChange={handelForm} className="form-control" id="exampleInputtitle1" aria-describedby="titleHelp" placeholder='Enter your title' />

            </div>


            <div className="mb-3">
              <label htmlFor="descriptionInput" className="form-label">description</label>
              <textarea  type="name" name='description' onChange={handelForm} className="form-control" id="descriptionInput" placeholder='Enter your Description' />

            </div>


            {/* <button type='button' onClick={()=>{
            dispatch(getCountry())
          }}>get terms</button> */}

            <div className="d-flex justify-content-center">
              <button type="button" onClick={onCreateGroup} className="btn btn-outline-success w-50">Create</button>

            </div>

          </form>



          <button onClick={
            () => {
              // dispatch(getGrades(country))
              dispatch(getSubjects(term))

              // console.log(country)
            }
          }>sssssssssssss</button>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseComponent)