import {
   APIURL
} from "../actionType/actionType"
import axios from "axios" ; 
import jwt_decode from "jwt-decode";
import {LIST_STUDENT_COURSES} from "../actionType/actionType" 
import { Collapse } from "react-bootstrap";


export const enrolCourse = (course_id,navigate)=>{
    const userToken = localStorage.getItem('userToken') ; 
    let student  = jwt_decode(localStorage.getItem("userToken")); 

    // console.log(`the country name is ${name} `)
    return function(dispatch){
       axios.post(`${APIURL}/enrolcourse`,
          {
          "course_id": course_id,
          "user_id": student.data.id
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
          if(res.data.inserted===true){
            //  navigate("/frontOffice/tasks");  //change to requested tasks  
          }
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }




 
 const getStudentCoursesAction = (courses)=>{
   return{
      type:LIST_STUDENT_COURSES ,
      payload:courses
   }
}


export const getStudentCourses = (id)=>{
   const userToken = localStorage.getItem('userToken') ; 
   let student  = jwt_decode(localStorage.getItem("userToken")); 
   console.log(student.data.id);  

   return function(dispatch){
      axios.post(`${APIURL}/get/courses`,
      {
      "id": student.data.id,
       },{
      headers: {
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         "token": userToken
      }
    })
      .then((res)=>{
         console.log(res.data.courses)
         dispatch(getStudentCoursesAction(res.data.courses)) ; 
      }).catch((err)=>{console.log(err)})
   }
}