import 'bootstrap/dist/css/bootstrap.css';
import './tab.css';

function TabsBased() {
  return(
   <div class='container'>
         {/* tabs button start */}
      <div class='row-lg-12'>
         <button className='tab-button-active'>Skills</button>   
         <button className='tab-button'>Education</button>  
         <button className='tab-button'>Certification</button>    

       </div>
       {/* tabs button end */}

         {/* tab content is start */}
        <div class='col'>
            <div class='row' id='tab-page-active'>
                <p>This is tab 1</p>

            </div>
             <div class='row' id='tab-page'>
                   <p>This is tab 2</p> 

            </div>
             <div class='row' id='tab-page'>
                   <p>This is tab 3</p> 

            </div>



         </div>
        {/* tab content is end */}

  </div>
  );
}

export default TabsBased;