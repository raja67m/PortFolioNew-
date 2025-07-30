import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile from './raja.jpg';


function Home(){

return(
   <div class="container">
       
      <div class="row">
                 {/* profile intro start */}
            <div class="col-lg-8" id="intro">
                <h1>Hello welcome,<br></br>I'm Rajalingam</h1>
                 <p>Lorem ipsum" is placeholder text commonly used in design and development to fill space and demonstrate layout without distracting from the visual presentation. While "lorem" itself is not a CSS property or value, it is frequently used within HTMLtags to generate this dummy text.</p> 
               {/* contact button start */}
                <div class="row-lg-12">
                 <button type="button" class="btn btn-primary" id='contact'>Contact</button>         
                 <button type="button" class="btn btn-primary" id='github'>Git Hub</button>         
                 </div> 
                 {/* contact button end */}
            </div>
                 {/* profile intro end */}

                 {/* profile image  start*/}
                 <div class="col-lg-4 " id='profile'>
                  <img src={profile} class="img-thumbnail" alt='Not Visible'/>
                 </div>
                     {/* profile image  end*/}

      </div>



   </div>
);
}

export default Home;