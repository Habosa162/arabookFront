import React, { useEffect ,useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate, useMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSubjects, getTerms } from "../../redux/actions/actionsCreator/userActionCreator";
import "../../styles/subjects.css";
import "../../styles/icons.css"



export const SubjectsComponent = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [term,setTerm] =useState()

  const terms = useSelector(state => state.userData.terms);
  const subjects = useSelector(state => state.userData.subjects);

  useEffect(() => {
    dispatch(getTerms(id));
    getSubjects(term)
  },[terms,term,subjects])




  return (
    <div>
      <section id="semesters" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 intro mx-auto">
              <h1>First Primary</h1>
              <div className="divider"></div>
            </div>
          </div>

          <ul className="nav w-25 d-flex justify-content-around nav-pills  mb-3" id="pills-tab" role="tablist">

            {terms && terms.map((term) =>

              <li className="nav-item" role="presentation" key={term.id}>
                <button className="nav-link text-light" id={term.cssid2} data-bs-toggle="pill"
                  data-bs-target={`#${term.cssid}`} type="button" onClick={() => {
                    dispatch(getSubjects(term.id));
                    setTerm(term.id) ;
                  }} role="tab" aria-controls="pills-home"
                  aria-selected="false">{term.name}</button>
              </li>

            )}

          </ul>
          <div className="tab-content" id="pills-tabContent">

            {terms && terms.map((term) =>

              <div className="tab-pane fade" id={term.cssid} role="tabpanel"
                aria-labelledby={term.cssid2} >
                <div className="container">
                  <div className="row g-4">



                    {subjects && subjects.map((subject) =>
                      <div className="col-lg-4 col-sm-6 bg-dark">
                        <div className="info-box py-4 px-4 bg-white">
                          <div className="icon-box d-flex align-items-center justify-content-center"><i
                            className="icon-book-open"></i></div>
                          <div className="link">
                              <h3>{subject.name}</h3>
                              <Link className="btn btn-outline-success h3" to={`/subject/${subject.id}`}>Study</Link>
                          </div>
                        </div>
                      </div>

                    )}


                  </div>
                </div>

              </div>



                   )}


          </div>


        </div>
      </section>




    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsComponent)