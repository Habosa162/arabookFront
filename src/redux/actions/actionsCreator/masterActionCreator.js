import { 
   APIURL
   } from "../actionType/actionType"



import axios from "axios" ; 
import jwt_decode from "jwt-decode";
import {getCountry,getGrades,getTerms,getSubjects,getChapters,getLessons}from "./userActionCreator" ;



export const createCountry = (country,navigate)=>{
    const userToken = localStorage.getItem('userToken') ; 
   //  console.log(`the country name is ${country} `)
    return function(dispatch){
       axios.post(`${APIURL}/post/country`,
          {
          "name": country,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
          if(res.data.inserted===true){
            dispatch(getCountry())
             navigate("/create/country");  //change to requested tasks  
          }
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }




 export const createGrade = (country_id,grade,country)=>{
    const userToken = localStorage.getItem('userToken') ; 
    return function(dispatch){
       axios.post(`${APIURL}/post/grade-level`,
          {
          "country_id":country_id,
          "level":grade,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
            dispatch(getGrades(country))
          
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }





 export const createTerm = (form,navigate)=>{
    const {grade_id,name} = form ; 
    const userToken = localStorage.getItem('userToken') ; 
    // console.log(`the country_id name is ${name} `)
    return function(dispatch){
       axios.post(`${APIURL}/post/term`,
          {
          "grade_id": grade_id,
          "name": name,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
          if(res.data.inserted===true){
            dispatch(getTerms(grade_id))
            //change to requested tasks  
          }
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }





 export const createSubject = (term_id,name)=>{
    
    const userToken = localStorage.getItem('userToken') ; 
    // console.log(`the country_id name is ${name} `)
    return function(dispatch){
       axios.post(`${APIURL}/post/subject`,
          {
          "term_id": term_id,
          "name": name,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
          if(res.data.inserted===true){
            dispatch(getSubjects(term_id))
            //  navigate("/frontOffice/tasks");  //change to requested tasks  
          }
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }





 export const createChapter = (subject_id,name)=>{
    const userToken = localStorage.getItem('userToken') ; 
    // console.log(`the country_id name is ${name} `)
    return function(dispatch){
       axios.post(`${APIURL}/post/chapter`,
          {
          "subject_id": subject_id,
          "name": name,
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
        dispatch(getChapters(subject_id))
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }



 
 export const createLesson = (chapter_id,name,link)=>{
    const userToken = localStorage.getItem('userToken') ; 
    // console.log(`the country_id name is ${name} `)
    return function(dispatch){
       axios.post(`${APIURL}/post/lesson`,
          {
          "chapter_id": chapter_id,
          "name": name,
          "link":link
       },{
          headers: {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             "token": userToken
          }
        }).then((res)=>{
         dispatch(getLessons(chapter_id))
       }).catch((err)=>{
          console.log(err) ; 
       })
    }
 
 }



 

 ///////////////////////////////////////////////////////////


   export const deleteCountry =(id)=>{
      const userToken = localStorage.getItem('userToken') ;
      return function(dispatch){
         axios.delete(`${APIURL}/delete/country/${id}`,{
            headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
            }
         })
         .then((res)=>{
            dispatch(getCountry()); 

         })
         .catch((err)=>{
            console.log(err) ; 
         })
      }
   }

//
   export const deleteGrade =(id,country)=>{

      const userToken = localStorage.getItem('userToken') ;
      return function(dispatch){
         axios.delete(`${APIURL}/delete/grade/${id}`,{
            headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
            }
         })
         .then((res)=>{
 
            dispatch(getGrades(country)); 

         })
         .catch((err)=>{
            console.log(err) ; 
         })
      }
   }
//
   export const deleteTerm =(id,grade)=>{
      const userToken = localStorage.getItem('userToken') ;
      return function(dispatch){
         axios.delete(`${APIURL}/delete/term/${id}`,{
            headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
            }
         })
         .then((res)=>{
            // console.log(res.data.deleted);
               dispatch(getTerms(grade)); 
            
         })
         .catch((err)=>{
            console.log(err) ; 
         })
      }
   }
//
   export const deleteSubject =(id,term)=>{
      const userToken = localStorage.getItem('userToken') ;
      return function(dispatch){
         axios.delete(`${APIURL}/delete/subject/${id}`,{
            headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "token": userToken
            }
         })
         .then((res)=>{
            console.log(res.data.deleted);
            if(res.data.deleted===true){
               dispatch(getSubjects(term)); 
            }
         })
         .catch((err)=>{
            console.log(err) ; 
         })
      }
   }
//
export const deleteChapter =(id,subject)=>{
   const userToken = localStorage.getItem('userToken') ;
   return function(dispatch){
      axios.delete(`${APIURL}/delete/chapter/${id}`,{
         headers:{
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         "token": userToken
         }
      })
      .then((res)=>{
       
            getChapters(subject)         
      })
      .catch((err)=>{
         console.log(err) ; 
      })
   }
}
//

export const deleteLesson=(id,chapter)=>{
   const userToken = localStorage.getItem('userToken') ;
   return function(dispatch){
      axios.delete(`${APIURL}/delete/lesson/${id}`,{
         headers:{
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         "token": userToken
         }
      })
      .then((res)=>{
         dispatch(getLessons(chapter)); 
      })
      .catch((err)=>{
         console.log(err) ; 
      })
   }
}
   



   // _______________________________________UPDATE_SHIPMENT_STATE______________________________
   
   
   // const updateCountryAction=(state)=>{
   //    return {
   //       // type:UPDATE_SHIPMENT_STATE,
   //       state:state
   //    }
   // }
   
   
   // export const updateCountry=(id,state)=>{
   //    const userToken = localStorage.getItem("userToken") ; 
   //       return function(dispatch){
   //          axios.post(`${APIURL}/api/update/shipmentState`,{
   //             shipmentState:state, 
   //             shipmentID:id
   //          }, 
   //          {
   //             headers:{
   //                'Access-Control-Allow-Origin' : '*',
   //                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
   //                "token": userToken
   //                }
   //             }
   
   //          ).then((res)=>{
   //             dispatch(updateCountryAction(state)) ; 
   //             console.log(res) ; 
   //          }).catch((err)=>{
   //             console.log(err)
   //          })
   //       }
   // }