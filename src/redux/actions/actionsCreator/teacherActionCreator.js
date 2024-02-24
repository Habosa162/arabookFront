import {
   APIURL,
     LIST_COURSE_ENROLL_REQUEST,
     LIST_TEACHER_COURSES
} from "../actionType/actionType"
import axios from "axios" ; 
import jwt_decode from "jwt-decode";




export const createCourse = (form,navigate)=>{
    const {title,description,country,grade,term,subject} = form ; 
    const userToken = localStorage.getItem('userToken') ; 
    let user  = jwt_decode(localStorage.getItem("userToken")); 

    return function(dispatch){
       axios.post(`${APIURL}/post/course`,
          {
          "title": title,
          "description": description,
          "teacher_id": user.data.id,
          "country_id": country,
          "grade_id": grade,
          "term_id": term,
          "subject_id": subject,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
           console.log(res)
          if(res.data.inserted===true){
             navigate("/tcourses");  //change to requested tasks  
          }
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }






 
 const getTeacherCoursesAction = (courses)=>{
   return{
      type:LIST_TEACHER_COURSES ,
      payload:courses
   }
}


export const getTeacherCourses = (id)=>{
   const userToken = localStorage.getItem('userToken') ; 

   return function(dispatch){
      axios.get(`${APIURL}/get/teacher/courses`,{
         headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
         }
       })
      .then((res)=>{
         console.log(res.data.courses)
         dispatch(getTeacherCoursesAction(res.data.courses)) ; 
      }).catch((err)=>{console.log(err)})
   }
}



 const getCourseEnrollRequestAction = (requests)=>{
    return{
       type:LIST_COURSE_ENROLL_REQUEST ,
       payload:requests
    }
 }
 
 
 export const getCourseEnrollRequest = (id)=>{
 
    return function(dispatch){
       axios.get(`${APIURL}/get/enrolRequests/${id}`)
       .then((res)=>{
          console.log()
          if(res.data.response){
          dispatch(getCourseEnrollRequestAction(res.data.requests)) ; 
          }
       }).catch((err)=>{console.log(err)})
    }
 }
 







 export const accepteCourseEnrollRequest = (id,navigate)=>{
    const userToken = localStorage.getItem('userToken') ; 
    // let teacher  = jwt_decode(localStorage.getItem("userToken")); 

    // console.log(`the country name is ${name} `)
    return function(dispatch){
       axios.put(`${APIURL}/put/acceptStudentRequest`,
          {
          "id": id,
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








 export const refuseStudentRequest = (id,course_id)=>{
    const userToken = localStorage.getItem('userToken') ; 
    let teacher  = jwt_decode(localStorage.getItem("userToken")); 

    // console.log(`the country name is ${name} `)
    return function(dispatch){
       axios.delete(`${APIURL}/delete/refuseStudentRequest`,
          {
          "id": id,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
          dispatch(getCourseEnrollRequest(course_id))
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }
