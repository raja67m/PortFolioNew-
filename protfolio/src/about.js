import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile from './raja.jpg';
import { BsTwitterX } from "react-icons/bs";
import { SiGithub } from "react-icons/si";  
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import TabsBased from './tabs';

function About(){
    return<div class="container-fluid" id='about'>

                <div class="col" >
                    <div class="row">
                        {/* profile image with links  start*/}
                            <div class="col-lg-4" >
                               <img src={profile}   alt='Not Visible'/> 
                                {/* social links start */}
                                    <div class="row-lg-5" id="social-links">
                                         <ul>
                                            <li><a href="#"><BsTwitterX/></a></li>
                                             <li><a href="#"><SiGithub/></a></li>
                                             <li><a href="#"><FaLinkedin/></a></li>
                                             <li><a href="#"><FaInstagram/></a></li>
                                          </ul>
                                    </div>
                                {/* social links end */}


                            </div>

                        {/* profile image with links  end*/}

                        {/* About our exp start & resume start */}
                         <div class="col-lg-8" id="summary">
                              <h1>Hello welcome,<br></br>I'm Rajalingam</h1>
                                 <p>Lorem ipsum" is placeholder text commonly used in design and development to fill space and demonstrate layout without distracting from the visual presentation. While "lorem" itself is not a CSS property or value, it is frequently used within HTMLtags to generate this dummy text.</p> 
                                     {/* contact button start */}
                                         <div class="row-lg-12">
                                             <button type="button" class="btn btn-primary" id='contact'>My Project</button>         
                                             <button type="button" class="btn btn-primary" id='github'>Download CV</button>         
                                          </div> 
                                        {/* contact button end */}

                                        {/* About Skills & education start */}
                                        <TabsBased/>
                                        {/* About Skills & education end */}

                            </div>
                        
                        {/* About our exp start & resume end */}


                    </div>

                </div>
</div>
    
}
export default About;