import { Nav,Navbar,NavLink } from "react-bootstrap";
import { Link } from "react-router";
import "./navbar.css";

const NavigationBar=()=>{
    return(
        <Navbar collapseOnSelect expand="sm" bg="white" >
             <a class="navbar-brand" href="#">PortFolio.</a>
               <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
               <Navbar.Collapse id="navbarScroll">
                    
                <Nav>
                
                    <NavLink className="nav-item" eventKey="1" as={Link} to="/">Home</NavLink>
                       <NavLink className="nav-item" eventKey="2" as={Link} to="/about">About</NavLink>
                          <NavLink className="nav-item"  eventKey="3" as={Link} to="/project">Project</NavLink>
                           <NavLink className="nav-item"  eventKey="4" as={Link} to="/Skills">Skills</NavLink>
                             <NavLink className="nav-item" eventKey="5" as={Link} to="/contact">Contact</NavLink>
                </Nav>
                </Navbar.Collapse> 


        </Navbar>
    );
}

export default NavigationBar;