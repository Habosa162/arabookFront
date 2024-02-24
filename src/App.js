import logo from './logo.svg';
import './App.css';
import { useParams, useNavigate ,useMatch ,Link} from "react-router-dom";

import { Routes, Route } from 'react-router-dom';
import LoginComponent from "./components/global/login.component" ;
import { NavbarComponent } from './components/global/navbar.component';
import FooterComponent from './components/global/footer.component' ;
import HomeComponent from './components/global/home.component';
import ScoursesComponent from './components/student/scourses.component';
import TcoursesComponent from './components/teacher/tcourses.component';
import CourseSelectionComponent from "./components/global/course.selection.component" ; 
import RegisterComponent from "./components/global/register.component" ;
import GradesComponent from "./components/global/grades.component";
import SubjectsComponent from "./components/global/subjects.component"
import CreateCourseComponent from "./components/teacher/create.course.component" ;
import DiscoverComponent from "./components/student/discover.component";
import ChapterComponent from "./components/global/chapters.component" ;
import VideoCallComponent from "./components/global/video.call.component";
import CreateCountryComponent from "./components/master/create.country.component" ;
import CreateGradeComponent from "./components/master/create.grade.component"
import CreateTermComponent from "./components/master/create.term.component"
import CreateSubjectComponent from "./components/master/create.subject.component"
import CreateChapterComponent from "./components/master/create.chapters.component"
import CreateLessonComponent from "./components/master/create.lesson.component"
import LessonComponent from "./components/global/lesson.component"
import VideoSectionComponent from "./components/global/video.section";
import SingleLessonComponent from "./components/global/single.lesson.component"
function App() {
  // const match  = useMatch()
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <NavbarComponent />
    <div className='bg-dark'>
      <Routes>
            <Route path="/" exact element={<HomeComponent/>}/>
            <Route path="/login" exact element={<LoginComponent/>}/>
            <Route path="/register" exact element={<RegisterComponent/>}/>

            <Route path="/scourses" exact element={<ScoursesComponent/>}/>
            <Route path="/tcourses" exact element={<TcoursesComponent/>}/>
            <Route path="/discover" exact element={<DiscoverComponent/>}/>
            
            <Route path="/course/:id" exact element={<CourseSelectionComponent/>}/>

            <Route path="/:country/grades" exact element={<GradesComponent/>}/>
            
            <Route path={`/grade/:id`} exact element={<SubjectsComponent/>}/>

            <Route path={`/subject/:id`} exact element={<ChapterComponent/>}/>

            <Route path={`/chapter/:id`} exact element={<LessonComponent/>}/>

            <Route path={`/lesson/:id`} exact element={<VideoSectionComponent/>}/>


            <Route path={`/singellesson/:id`} exact element={<SingleLessonComponent/>}/>

            
            
            


            <Route path={`/create/course`} exact element={<CreateCourseComponent/>}/>

            <Route path={`/video/chat/:id`} exact element={<VideoCallComponent/>}/>
            <Route path={`/create/country`} exact element={<CreateCountryComponent/>}/>
            <Route path={`/create/grade`} exact element={<CreateGradeComponent/>}/>

            <Route path={`/create/term`} exact element={<CreateTermComponent/>}/>


            <Route path={`/create/subject`} exact element={<CreateSubjectComponent/>}/>


            <Route path={`/create/chapter`} exact element={<CreateChapterComponent/>}/>
            <Route path={`/create/lesson`} exact element={<CreateLessonComponent/>}/>
            


            

            
            




            
  
            
            
     </Routes>
    
    </div>
    </>
  );
}

export default App;
