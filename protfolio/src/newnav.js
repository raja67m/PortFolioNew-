import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router";

function Newnav(){

return(<div className="Home">

        {/* Header start & nav bar */}
        <header>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Profile.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
      <Link to="/">
        <li class="nav-item">
        <a class="nav-link active">Home</a>
        </li>
      </Link>
        
        <Link to="about">
         <li class="nav-item">
          <a class="nav-link">About</a>
        </li></Link>
        
        <Link to="Skills">
         <li class="nav-item">
          <a class="nav-link" eventKey="2" as={Link} to="/skills">Skills</a>
        </li></Link>
       
        
        <Link to="project">
        <li class="nav-item">
          <a class="nav-link" eventKey="3" as={Link} to="/project">Project</a>
        </li>
        </Link>
        
        <Link to="contact">
          <li class="nav-item">
          <a class="nav-link" eventKey="4" as={Link} to="/contact">Contact</a>
        </li>
        </Link>
      
      </ul>
     
    </div>
  </div>
</nav>
     </header>

   </div>
);
}

export default Newnav;