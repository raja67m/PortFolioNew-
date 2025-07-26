import './home.css';
import 'bootstrap/dist/css/bootstrap.css';


function Home(){

return(
   <div class="container">
       
      <div class="row">
                 {/* profile intro start */}
         <div class="column" id="intro">
          <h1>Hello welcome,<br></br>I'm Rajalingam</h1>
           <p>Lorem ipsum" is placeholder text commonly used in design and development <br></br>to fill space and demonstrate layout without distracting from the visual presentation.<br></br> While "lorem" itself is not a CSS property or value, it is frequently used within<br></br> HTMLtags to generate this dummy text.</p> 
            <button type="button" class="btn btn-primary">Contact</button>         
         </div>
                 {/* profile intro end */}

                 {/* profile image  start*/}
                 <div>
                  <img src="" alt='Not Visible'/>
                 </div>
                     {/* profile image  end*/}

      </div>



   </div>
);
}

export default Home;