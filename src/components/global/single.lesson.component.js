import React , { useEffect, useState }  from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate, useMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import axios from "axios";
import { APIURL } from '../../redux/actions/actionType/actionType';
import {getCurrentUser}from"../../redux/actions/actionsCreator/userActionCreator" ;

export const SingleLessonComponent = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [isLoggedIn, setLoggedIn] = useState(false);  
    const user = useSelector(state => state.userData.user);




    const opts = {
        height: '588',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  const [lesson,setLesson]  = useState()

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn"))
   
    if (localStorage.getItem("isLoggedIn")) {
      dispatch(getCurrentUser());
    }

    axios.get(`${APIURL}/get/single/lesson/${id}`)
    .then((res) => {
       setLesson(res.data.lesson) ; 
    }).catch((err) => { console.log(err) })},[localStorage,isLoggedIn])


  return (
    <div>
    <section class="">
        <div class="container-fluid">
            {lesson&&<div class="row justify-content-center align-items-center bg-dark text-center">
                <h2 className='col-md-12 my-2'>{lesson.name}</h2>
                <YouTube videoId={`${lesson.link}`} className='col-md-12' opts={opts} onReady={_onReady} />
            </div>}

        </div>
    </section>

    <section className="bg-dark">
        <div className="container">
            <input className='form-control' />
            <button className='btn btn-success w-100' >add note</button>
        </div>
    </section>

</div>
  )
}



const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleLessonComponent)