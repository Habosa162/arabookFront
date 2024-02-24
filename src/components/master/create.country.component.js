import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCountry } from "../../redux/actions/actionsCreator/userActionCreator";
import { useSelector, useDispatch } from "react-redux";
import {createCountry,deleteCountry} from "../../redux/actions/actionsCreator/masterActionCreator" ;
import "../../styles/style10.css"


export const CreateCountryComponent = (props) => {
    const countries = useSelector(state => state.userData.countries);
    const dispatch = useDispatch();
    const [country,setCountry] = useState()
    useEffect(() => {
        dispatch(getCountry());
    },[countries])

    const createCountryFunc = ()=>{
        dispatch(createCountry(country))
    }

    return (
        <div>
            <section id="groups">
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-md-6">
                            <h2 className="">create country</h2>
                        </div>
                        {/* <div className="col-md-4">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                <button className="btnn btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div> */}
                    </div>

                    <div className="row g-4">
                        {countries && countries.map((country) =>
                            <div className="col-lg-4 col-md-8 col-sm-12 mx-auto text-dark">
                                <div className="info-box py-5 px-4 h-100">
                                    <div className="icon-box d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
                                    <h3 className="mb-3 text-center">{country.name}</h3>
                                    <div className="d-flex justify-content-center my-3">
                                        <button className="btn btn-outline-warning m-1" type="submit">Edit</button>
                                        <button className="btn btn-outline-danger m-1" onClick={()=>{
                                            dispatch(deleteCountry(country.id))
                                        }} type="submit">Delete</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto text-dark">
                                <div className="mb-3">
                                    <label htmlFor="countryInput" className="form-label">Name</label>
                                    <input type="text" name='country' onChange={(e)=>{
                                        setCountry(e.target.value)
                                    }} className="form-control" id="countryInput" placeholder='Enter Country Name'/>
                                </div>     
                                    <div  className='d-flex justify-content-center align-items-center'>
                                          <button className='btn btn-outline-success w-25' onClick={createCountryFunc}>Create</button>                   
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCountryComponent)