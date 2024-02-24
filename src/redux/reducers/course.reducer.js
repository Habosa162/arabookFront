import {
   LIST_COURSE_ENROLL_REQUEST,
   LIST_TEACHER_COURSES,
   LIST_MESSAGES,
   GET_COURSE
} from '../actions/actionType/actionType';


const initState = {

      courseID:0,
      title:"",
      description:"",
      teacher_id:0 ,
      teacher_name:"",
      country:"",
      gradelevel:"",
      term:"",
      subject:"",
      course:{},


   courseEnrollRequests: [],
   teacherCourses:[],
   courseMessages:[]


}  

const courseReducer = (state = initState, action) => {
   if (action.type === LIST_COURSE_ENROLL_REQUEST) {
      return {
         ...state,
         courseEnrollRequests: action.payload
      }  
   }else if (action.type === LIST_TEACHER_COURSES) {
      return {
         ...state,
         teacherCourses: action.payload
      }  
   }else if (action.type === LIST_MESSAGES) {
      return {
         ...state,
         courseMessages: action.payload
      }  
   }else if (action.type === GET_COURSE) {
      return {
         ...state,
         course: action.payload
      }  
   }

   


     else {
      return state;
   }
}


export default courseReducer; 