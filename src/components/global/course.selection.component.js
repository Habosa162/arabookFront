import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "../../styles/course.selection.css";
// import {postMessage} from "../../redux/actions/actionsCreator/userActionCreator"
import { useDispatch, useSelector } from 'react-redux';
import { getCourseEnrollRequest, accepteCourseEnrollRequest ,refuseStudentRequest} from "../../redux/actions/actionsCreator/teacherActionCreator"
import { useParams, useNavigate, Link } from "react-router-dom";
import io from "socket.io-client"
import jwt_decode from "jwt-decode";
import { getMessages,getCourse } from "../../redux/actions/actionsCreator/userActionCreator";
import moment from "moment";

import imgsrc from "../../assets/images/149071.png"

export const CourseSelectionComponent = (props) => {
    const { id } = useParams();

    const requests = useSelector(state => state.courseData.courseEnrollRequests);
    const messages = useSelector(state => state.courseData.courseMessages);

    const course = useSelector(state => state.courseData.course);


    const user = jwt_decode(localStorage.getItem("userToken"));


    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        // call messages api
        dispatch(getMessages(id))
        dispatch(getCourseEnrollRequest(id));
        dispatch(getCourse(id));

        socket.on('receive_message', (data) => {
            console.log(data)

            // call messages api
            dispatch(getMessages(id))

        });
        return () => {
            socket.off('receive_message');

        };
    }, [])




    // 

    const socket = io.connect("http://localhost:6500");

    const time = moment().format("YYYY:MM:DD hh:mm:ss");

    const sendMessage = () => {
        socket.emit("input_message", {
            "message": message,
            "course_id": id,
            "user_id": user.data.id,
            "time": time
        });

        setMessage("")
    }

    return (
        <section className="content">
            <div className="container p-0">

                <div className="row justify-content-center align-itesm-center">


                    {/* <!-- ////groups --> */}
                    {user.data.role==="teacher" && <div className="col-12 col-lg-5 col-xl-3 border-right  text-center  flex-row  align-items-center justify-content-center ">

                        <h3 className="mygroupsheader text-uppercase font-weight-bold border-bottom">Course Requests</h3>

                        <div className="px-4 d-md-block">
                            <div className="d-flex align-items-center justify-content-around ">
                                <div className="">
                                    <input type="text" className="form-control my-3" placeholder="Search..." />
                                </div>
                                <div className="searchbtn">
                                    <button className="btn btn-outline-primary">
                                        search
                                    </button>
                                </div>
                            </div>
                        </div>


                        {requests && requests.map((request) =>
                            <div className="list-group-item list-group-item-action border-0 ">

                                <div className="row justify-content-center align-items-center">

                                    <div className="col-md-6 ">
                                        <img src="https://miuc.org/wp-content/uploads/2020/08/6-Reasons-why-you-should-learn-Programming-737x366.png"
                                            className=" img-fluid" alt="Vanessa Tucker" />

                                        {/* <!-- <i className="fa-solid fa-book img-fluid h2"></i> --> */}

                                    </div>

                                    <div className="col-md-6">
                                        <h6>{request.student_name}</h6>
                                        <h6>{request.student_email}</h6>
                                        <h6>{request.country}</h6>
                                        <button classNameName='btn btn-outline-success' onClick={() => {
                                            dispatch(accepteCourseEnrollRequest(request.id,id))
                                            dispatch(getCourseEnrollRequest(id))
                                        }
                                        }>Accept</button>
                                        <button classNameName='btn btn-outline-danger' onClick={() => {
                                            dispatch(refuseStudentRequest(request.id,id))
                                            dispatch(getCourseEnrollRequest(id))
                                        }
                                        }>Delete</button>
                                    </div>

                                </div>

                            </div>
                        )}


                        <hr className="d-block d-lg-none mt-1 mb-0" />
                    </div>}

                    {/* <!-- //current chat --> */}
                    <div className="col-12 col-lg-7 col-xl-9 text-cente">
                        <div className=" border-bottom  d-lg-block ">



                            <div className="row justify-content-between align-items-center ">

                                <div className="col-md-3 position-relative">
                                    <img src="https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution-600x312.jpg" className="img-fluid w-50" />
                                </div>


                                <div className="col-md-3 flex-grow-1 p-3  h3">
                                    <strong>{course.subject}</strong>
                                </div>
                                <div className="col-md-3 flex-grow-1 p-3  h3">
                                    <strong>mr.{course.teacher_name}</strong>
                                </div>

                                <div className="col-md-3 d-flex justify-content-center mb-2">

                                    <Link to={`/video/chat/${id}`}

                                        className="btn btn-outline-info btn-lg mr-1 px-3  d-md-inline-block mx-2 w-50"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-video feather-lg">
                                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                        </svg> </Link>
                           
                                </div>


                            </div>

                        </div>



                        {/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////// --> */}



                        <div className="position-relative">
                            <div className="chat-messages p-5">
                                {messages && messages.map((message) =>
                                    <>
                                        {(user.data.id != message.user_id) && <div className="chat-message-left pb-4">

                                            <div className='row justify-content-start align-items-center mb-3'>
                                                <div className='col-md-1'>
                                                    <img src={imgsrc} width="40" height="40" alt={message.username} />
                                                </div>
                                                <div className='col-md-2'>
                                                    <div className="font-weight-bold username">{message.username}</div>
                                                </div>

                                            </div>

                                            <div className='row justify-content-start align-items-center'>
                                                <div className="flex-shrink-1 col-md-6 bg-light text-dark rounded py-3 mx-5"><div>{message.message}</div></div>


                                                <div className=" text-muted small text-nowrap ">{moment(message.datetime).format("YYYY/MM/DD hh:mm")}</div>
                                            </div>




                                        </div>

                                        }


                                        {(user.data.id === message.user_id) && <div className="chat-message-right" >
                                            <div className='row justify-content-end align-items-center mb-3'>
                                                
                                                <div className='col-md-6 '>
                                                    <div className="font-weight-bold username">{message.username}</div>
                                                </div>
                                                <div className='col-md-2'>
                                                    <img src={imgsrc}  width="40" height="40" alt={message.username} />
                                                </div>
                                            </div>

                                            <div className='row justify-content-end align-items-center'>
                                                <div className="flex-shrink-1 col-md-6 bg-light text-dark rounded py-3 mx-5"><div>{message.message}</div></div>


                                                <div className="col-md-6 text-muted small text-nowrap ">{moment(message.datetime).format("YYYY/MM/DD hh:mm")}</div>
                                            </div>




                                        </div>

                                        }


                                    </>

                                )}




                            </div>
                        </div>

                        <div className="flex-grow-0 py-3 px-4 border-top">
                            <div className="input-group d-flex justify-content-between">
                                <input type="text" value={message} className="form-control" onChange={(e) => {
                                    setMessage(e.target.value)
                                }} placeholder="Type your message" />
                                <button className="btn btn-outline-light" onClick={sendMessage}>Send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>

    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSelectionComponent)