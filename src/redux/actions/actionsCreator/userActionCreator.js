import {
   APIURL,
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
   LIST_MESSAGES,
   GET_COURSE
} from "../actionType/actionType"
import axios from "axios";
import jwt_decode from "jwt-decode";





// ______________________________________________SIGN_IN____________________________________________________
const signInUser = (message, isLoggedIn) => {
   return {
      type: SIGN_IN,
      message: message,
      isLoggedIn: isLoggedIn
   }
}



export const signIn = (form, navigate) => {
   const { email, password } = form;

   return function (dispatch) {
      axios.post(`${APIURL}/signin`, {
         "email": email,
         "password": password
      }).then((res) => {
         console.log(res);
         if (res.data.auth === true) {
            localStorage.setItem('userToken', res.data.token);
            localStorage.setItem("isLoggedIn", true);
            dispatch(signInUser(res.data.message, true));
            navigate("/");
         } else {
            dispatch(signInUser(res.data.message, false));
         }
      })
   }
}

// ____________________________________(((((((__________change to create user______)))))))______________________________________________


export const register = (form, navigate) => {
   const { email, name, password, role, country, gender } = form;
   const userToken = localStorage.getItem('userToken');
   return function (dispatch) {
      axios.post(`${APIURL}/signup`,
         {
            "email": email,
            "password": password,
            "name": name,
            "role_id": role,
            "country_id": country,
            "gender_id": gender

         }, {
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
         }
      }).then((res) => {
            navigate("/login");
      }).catch((err) => {
         console.log(err);
      })
   }

}
// _____________________________________________LOG_OUT_______________________________________________________

export const loggedOutAction = () => {
   return {
      type: LOGGED_OUT,
      isLogged: false
   }
}

export const loggedOut = (navigate) => {
   return function (dispatch) {
      localStorage.clear();
      dispatch(loggedOutAction());
      dispatch(getCurrentUserAction({
         id: 0,
         name: '',
         email: '',
         password: '',
         dob: null,
         phone: null,
         gender: '',
         role: '',
         country: ''
      }));
      navigate("/");


   }
}
// _____________________________________________Logged_IN_______________________________________________________


export const loggedInAction = () => {
   return {
      type: LOGGED_IN,
      isLogged: true
   }
}

// _____________________________________________((((((((list all department for user creation usage and create task usage ))))))))_______________________________________________________





// _____________________________________________GET_CURRENT_USER_______________________________________________________

const getCurrentUserAction = (user) => {
   return {
      type: GET_CURRENT_USER,
      payload: user
   }
}


export const getCurrentUser = () => {
   return function (dispatch) {
      let user = jwt_decode(localStorage.getItem("userToken"));
      console.log("_____________________________");
      console.log(user);
      console.log("_____________________________");
      dispatch(getCurrentUserAction(user));
   }
}









/////////////////////////////////////////////////////////////////////////














const getCountryAction = (countries) => {
   return {
      type: LIST_COUNTRY,
      payload: countries
   }
}


export const getCountry = () => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/country`)
         .then((res) => {
            // console.log(res.data)
            dispatch(getCountryAction(res.data.country));
         }).catch((err) => { console.log(err) })
   }
}










//////////////////////////////////////////////////////////////

const getGradesAction = (grades) => {
   return {
      type: LIST_GRADE,
      payload: grades
   }
}


export const getGrades = (country) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/grade/${country}`)
         .then((res) => {
            // console.log(res.data.grade)
            dispatch(getGradesAction(res.data.grade));
         }).catch((err) => { console.log(err) })
   }
}



/////////////////////////////////////////////////////////////




const getTermsAction = (terms) => {
   return {
      type: LIST_TERMS,
      payload:terms
   }
}


export const getTerms = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/term/${id}`)
         .then((res) => {
            // console.log(res.data.term)
            dispatch(getTermsAction(res.data.term)) ; 
         }).catch((err) => { console.log(err) })
   }
}

/////////////////////////////////////////////////////////////

const getSubjectsAction = (subjects) => {
   return {
      type: LIST_SUBJECTS,
      payload: subjects
   }
}


export const getSubjects = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/subject/${id}`)
         .then((res) => {
            // console.log(res.data.subject)
            dispatch(getSubjectsAction(res.data.subject)) ; 
         }).catch((err) => { console.log(err) })
   }
}

/////////////////////////////////////////////////////////////


const getChaptersAction = (chapters) => {
   return {
      type: LIST_CHAPTERS,
      payload:chapters
   }
}


export const getChapters = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/chapter/${id}`)
         .then((res) => {
            console.log(res.data.chapter);
            dispatch(getChaptersAction(res.data.chapter)) ; 
         }).catch((err) => { console.log(err) })
   }
}



/////////////////////////////////////////////////////////////

const getLessonsAction = (LESSONS) => {
   return {
      type: LIST_LESSONS,
      payload: LESSONS
   }
}


export const getLessons = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/lesson/${id}`)
         .then((res) => {
            // console.log(res)
            dispatch(getLessonsAction(res.data.lesson)) ; 
         }).catch((err) => { console.log(err) })
   }
}



/////////////////////////////////////////////////////////////




const getSectionsAction = (sectons) => {
   return {
      type: LIST_SECTIONS,
      payload: sectons
   }
}


export const getSections = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/section/${id}`)
         .then((res) => {
            // console.log(res)
            dispatch(getSectionsAction(res.data.sections)) ; 
         }).catch((err) => { console.log(err) })
   }
}






/////////////////////////////////////////////////////////////



const getGenderAction = (genders) => {
   return {
      type: LIST_GENDER,
      payload: genders
   }
}


export const getGender = () => {
   return function (dispatch) {
      axios.get(`${APIURL}/get/gender`)
         .then((res) => {
            // console.log(res.data.gender)
            dispatch(getGenderAction(res.data.gender));
         }).catch((err) => { console.log(err) })
   }
}


/////////////////////////////////////////////////////////////
const getRoleAction = (roles) => {
   return {
      type: LIST_ROLE,
      payload: roles
   }
}


export const getRole = () => {
   return function (dispatch) {
      axios.get(`${APIURL}/get/role`)
         .then((res) => {
            console.log(res.data.role)
            dispatch(getRoleAction(res.data.role));
         }).catch((err) => { console.log(err) })
   }
}




// /get/messages/:




const getMessagesAction = (messages) => {
   return {
      type: LIST_MESSAGES,
      payload: messages
   }
}


export const getMessages = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/get/messages/${id}`)
         .then((res) => {
            // console.log(res.data.messages)
            dispatch(getMessagesAction(res.data.messages)) ; 
         }).catch((err) => { console.log(err) })
   }
}








const getCourseAction = (messages) => {
   return {
      type: GET_COURSE,
      payload: messages
   }
}


export const getCourse = (id) => {

   return function (dispatch) {
      axios.get(`${APIURL}/course/${id}`)
         .then((res) => {
            // console.log(res.data.course)
            dispatch(getCourseAction(res.data.course)) ; 
         }).catch((err) => { console.log(err) })
   }
}


