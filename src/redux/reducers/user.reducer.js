import {
   REGISTER,
   SIGN_IN,
   LOGGED_OUT,
   LOGGED_IN,
   GET_CURRENT_USER,
   LIST_COUNTRY,
   LIST_GRADE,
   LIST_TERMS,
   LIST_SUBJECTS,
   LIST_CHAPTERS,
   LIST_LESSONS,
   LIST_SECTIONS,
   LIST_ROLE,
   LIST_GENDER,
   LIST_STUDENT_COURSES,
   
} from '../actions/actionType/actionType';


const initState = {
   user:{
      id:0,
      name: '',
      email: '',
      password: '',
      dob: null,
      phone: null,
      gender: '',
      role: '',
      country: ''
   },
   message: "",
   isLoggedIn: false,
   countries:[],
   genders:[],
   roles:[],
   grades:[],
   terms:[],
   subjects:[],
   chapters:[],
   lessons:[],
   sections:[],
   studentCourses:[],
   videosections:[],
   theme:"light"
}

const userReducer = (state = initState, action) => {
   if (action.type === REGISTER) {
      return {
         ...state,
         message:action.resMassage
      }
   } else if (action.type === SIGN_IN) {
      return {
         ...state,
         message:action.message,
         isLoggedIn:action.isLoggedIn
      }
   } else if (action.type === LOGGED_IN) {
      return {
         ...state,
         isLoggedIn:action.isLogged
      }
   }else if (action.type === LOGGED_OUT) {
      return {
         ...state,
         isLoggedIn: action.isLogged
      }
   }

  else if (action.type === GET_CURRENT_USER) {
   return {
      ...state,
      user:action.payload.data
   }
}

else if (action.type === LIST_ROLE) {
   return {
      ...state,
      roles:action.payload
   }
}
else if (action.type === LIST_GENDER) {
   return {
      ...state,
      genders:action.payload
   }
}



   else if (action.type === LIST_COUNTRY) {
      return {
         ...state,
         countries: action.payload
      }
   }

   else if (action.type === LIST_GRADE) {
      return {
         ...state,
         grades: action.payload
      }
   }

   
   else if (action.type === LIST_TERMS) {
      return {
         ...state,
         terms: action.payload
      }
   }


   
   else if (action.type === LIST_SUBJECTS) {
      return {
         ...state,
         subjects: action.payload
      }
   }

   
  
   else if (action.type === LIST_CHAPTERS) {
      return {
         ...state,
         chapters: action.payload
      }
   }


  
   else if (action.type === LIST_LESSONS) {
      return {
         ...state,
         lessons: action.payload
      }
   }


   else if (action.type === LIST_SECTIONS) {
      return {
         ...state,
         sections: action.payload
      }
   }


   else if (action.type === LIST_STUDENT_COURSES) {
      return {
         ...state,
         studentCourses: action.payload
      }
   }







   
   else {
      return state;
   }
}




export default userReducer;