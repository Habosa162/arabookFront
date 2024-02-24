import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { createGrade, deleteGrade } from "../../redux/actions/actionsCreator/masterActionCreator";
import { getCountry, getTerms, getGrades } from "../../redux/actions/actionsCreator/userActionCreator";

export const CreateGradeComponent = (props) => {

    const countries = useSelector(state => state.userData.countries);
    const grades = useSelector(state => state.userData.grades);

    const dispatch = useDispatch();

    const [country, setCountry] = useState();
    const [country_id, setCountry_id] = useState();
    const [grade, setGrade] = useState();


    const handelForm = (e) => {
        switch (e.target.name) {
            case "country":
                setCountry(e.target.value);
                //    setNameErr(false);
                break;
            case "country_id":
                setCountry_id(e.target.value);
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
    }, [country, grade])



    const createGradeFunc = () => {
        dispatch(createGrade(country_id, grade,country))
    }
    return (
        <div>
            <section id="groups">
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-md-6">
                            <h2 className="">create level</h2>
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
                            <label htmlFor="countryInput">country</label>
                            <select name="country_id" onChange={(e) => {
                                handelForm(e);
                            }} className="form-select form-control" id="countryInput" aria-label="Default select example">
                                <option value="" disabled selected>Select country</option>
                                {countries && countries.map((country) => {
                                    return (
                                        <option value={country.id}>{country.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>



                    <div className="row g-4 my-3">
                        {grades && grades.map((grade) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mx-auto bg-light text-dark">
                                <div className="info-box py-5 px-4 h-100">
                                    <div className="icon-box d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
                                    <h3 className="mb-3 text-center">{grade.grade}</h3>
                                    <div className="d-flex justify-content-center my-3">
                                        <button className="btn btn-outline-warning m-1" type="submit">Edit</button>
                                        <button className="btn btn-outline-danger m-1" onClick={() => {
                                            dispatch(deleteGrade(grade.id,country ))
                                            getGrades(country)
                                        }} type="submit">Delete</button>
                                    </div>
                                </div>

                            </div>
                        )}
                        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto text-dark">
                            <div className="mb-3">
                                <label htmlFor="countryInput" className="form-label">Name</label>
                                <input type="text" name='grade' onChange={(e) => {
                                    setGrade(e.target.value)
                                }} className="form-control" id="countryInput" placeholder='Enter Grade Name' />
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-outline-success w-25' onClick={createGradeFunc}>Create</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <button onClick={()=>{
    console.log(country) 

}
}>cliccccc</button> */}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGradeComponent)