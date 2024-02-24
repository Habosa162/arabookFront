import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCountry, getGrades, getTerms } from "../../redux/actions/actionsCreator/userActionCreator";
import { useSelector, useDispatch } from "react-redux";
import { createTerm ,deleteTerm} from '../../redux/actions/actionsCreator/masterActionCreator';
import "../../styles/style10.css"

export const CreateTermComponent = (props) => {

    const countries = useSelector(state => state.userData.countries);
    const grades = useSelector(state => state.userData.grades);
    const terms = useSelector(state => state.userData.terms);

    const dispatch = useDispatch();

    const [country, setCountry] = useState();
    const [grade, setGrade] = useState("");
    const [term, setTerm] = useState("");



    const handelForm = (e) => {
        switch (e.target.name) {
            case "country":
                setCountry(e.target.value);
                //    setNameErr(false);
                break;
            case "grade":
                setGrade(e.target.value);
                //    setgradeErr(false);
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        dispatch(getCountry());
        dispatch(getGrades(country))
        dispatch(getTerms(grade))
    }, [country, grade])

    const createTermFunc = ()=>{
        dispatch(createTerm({grade_id:grade,name:term} ))
        dispatch(getTerms(grade))

    }
    return (
        <div>
            <section id="groups">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-6">
                            <h2 className="">create term</h2>
                        </div>
                        <div className="col-md-4">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                <button className="btnn btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
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




                        <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                            <label htmlFor="countryInput">grade</label>
                            <select name="grade" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select country</option>
                                {grades && grades.map((grade) => {
                                    return (
                                        <option value={grade.id}>{grade.grade}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="row my-3 jsutify-content-center">
                        {terms && terms.map((term) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mx-auto bg-light text-dark my-2">
                                <div className="info-box py-5 px-4 h-100">
                                    <div className="icon-box d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
                                    <h3 className="mb-3 text-center">{term.name}</h3>
                                    <div className="d-flex justify-content-center my-3">
                                        <button className="btn btn-outline-warning m-1" type="submit">Edit</button>
                                        <button className="btn btn-outline-danger m-1" onClick={() => {
                                            dispatch(deleteTerm(term.id,grade))
                                            dispatch(getTerms(grade))
                                        }} type="button">Delete</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto text-dark">
                            <div className="mb-3">
                                <label htmlFor="countryInput" className="form-label">Name</label>
                                <input type="text" name='term' onChange={(e) => {
                                    setTerm(e.target.value)
                                }} className="form-control" id="countryInput" placeholder='Enter Term Name' />
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-outline-success w-25' onClick={createTermFunc}>Create</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTermComponent)