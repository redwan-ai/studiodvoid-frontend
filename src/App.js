import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import About from './Components/About/About';
import ContactPage from './Components/ContactPage/ContactPage';
import Blogs from './Components/Blogs/Blogs';
import Services from './Components/Services/Services';
import Architecture from './Components/Architecture/Architecture';
import InteriorWork from './Components/InteriorWork/InteriorWork';
import Planning from './Components/Planning/Planning';
import BlogDetailsPage from './Components/BlogDetailsPage/BlogDetailsPage';
import Button from './Components/Button/Button';
import MainTopBanner from './Components/MainTopBanner/MainTopBanner';
import ProjectDetailsMain from './Components/ProjectDetailsMain/ProjectDetailsMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/architecture-page' element={<Architecture></Architecture>}></Route>
        <Route path='/interiorWork-page' element={<InteriorWork></InteriorWork>}></Route>
        <Route path='/planning-page' element={<Planning></Planning>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projectsD' element={<ProjectDetailsMain></ProjectDetailsMain>}></Route>
        <Route path='/projectsDs' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/blogD' element={<BlogDetailsPage></BlogDetailsPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact-us' element={<ContactPage></ContactPage>}></Route>
        {/* <Route path='/but' element={<Button></Button>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
