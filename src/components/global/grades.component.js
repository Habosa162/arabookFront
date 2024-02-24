import React,{useEffect,useState}  from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate ,useMatch ,Link} from "react-router-dom";
import { useDispatch  , useSelector} from 'react-redux';
import {getGrades} from "../../redux/actions/actionsCreator/userActionCreator" ;
import "../../styles/grades.css"
export const GradesComponent = (props) => {
    // let match = useMatch();
    const { country } = useParams();
    const dispatch  = useDispatch() ;
    

    const grades = useSelector(state=>state.userData.grades);
    
    useEffect(()=>{
        dispatch(getGrades(country))
    },[])
  return (
    <div>
    {/* <h1>GradesComponentss</h1> */}


    <ul className="nav d-flex justify-content-center align-items-center text-light">
             
            
          </ul>



        <section id="curriculum-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12  mx-auto">
                    <h1 className="text-center">Egyptian curriculum</h1>
                    <div className="divider "></div>
                    {/* <!-- Primary stage --> */}
                    <div className="section-title" id="g1">
                        <h3>Choose your stage</h3>
                    </div>


                    {grades &&  grades.map((grade) =>
                    <>
                      <div className="grade d-flex justify-content-between align-items-center text-dark">
                        
                        
                        <div className="p-container">
                            <p className="">{grade.grade}</p>
                        </div>
                        <div className="link-container d-flex">
                            <Link className="btn-grade" to={`/grade/${grade.id}`}>Study</Link>
                        </div>
                    </div>
                      
                        </>
                        )}



                </div>
            </div>

        </div>
    </section>

  

    {/* <button onClick={()=>{
        // console.log(country) ;
        console.log(grades)
        // dispatch(getGrades(country))

    }}>click</button> */}

      
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GradesComponent)