import Home from "./home";
import About from "./about";
import Project from "./project";
import Contact from "./contact";
import NavigationBar from "./navbar";


import { Routes,Route} from "react-router";




function App() {
  return (
   <div>
<NavigationBar/>
 
    <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
   </div>
  );
}

export default App;
