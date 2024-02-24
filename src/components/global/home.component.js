import React, { useEffect } from 'react'
import img from "../../assets/images/home.jpg"
import { getCountry } from "../../redux/actions/actionsCreator/userActionCreator";
import { useDispatch, useSelector } from "react-redux";
import{Link}from"react-router-dom"
import "../../styles/home&navbar.css"

function HomeComponent() {
  const countries = useSelector(state => state.userData.countries);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountry());
  }, [])
  return (
<>
<section id="first-section" class="text-white text-center d-flex justify-content-between align-items-center overlayer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h6>WELCOM TO OUR WORLD</h6>
                    <h1 class="my-4">AN EDUCATIONAL SERVICE THAT PROVIDES VIDEOS EXPLAINING <br /> SCHOOL CURRICULA IN A
                        SIMPLE AND FREE MANNAR.</h1>
                    <button class="btn btn-primary">Get Started</button>

                </div>
            </div>
        </div>
    </section>

    <div class="col-12">
        <h6>WELCOM TO OUR WORLD</h6>
        <h1 class="my-4">AN EDUCATIONAL SERVICE THAT PROVIDES VIDEOS EXPLAINING <br /> SCHOOL CURRICULA IN A
            SIMPLE AND FREE MANNAR.</h1>
        <button class="btn btn-primary">Get Started</button>

    </div>



    </>

)


      {/* <div className="vh-100">
        <header className="row justify-content-center vh-100 align-items-center layer">
          <div className="col-xl-6 col-lg-6 col-md-12  col-12 text-dark">
            <div className="item1  text-center">
              <h1 className="h5">An educational service that provides videos that explain school curricula in a simple and free manner</h1>
              <div className="d-grid gap-2 col-6 mx-auto p-3">
                <button className="btn btn-primary" type="button">subscribe now</button>
              </div>

            </div>
          </div>

          <div className=" col-xl-6 col-lg-6 col-md-12 col-12">

            <div className="ayhaga">

              <ul className="nav d-flex justify-content-center align-items-center">
             
                 {countries&&countries.map((country) =>
                      <li className="nav-item">
                      <Link className="nav-link" to={`/${country.name}/grades`}>{country.name}</Link>
                    </li>
                    )}

              </ul>
            </div>







          </div>

        </header>

      </div>*/}


}

export default HomeComponent