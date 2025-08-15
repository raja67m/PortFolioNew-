import 'bootstrap/dist/css/bootstrap.css';
import './tab.css';
import { useState } from 'react';

function TabsBased() {

const [active,setActive]=useState('tab-1');

const handleClick=(event)=>{
  setActive(event.target.id);
}


  return(
   <div class='container'>
         {/* tabs button start */}
      <div class='row-lg-12'>
         <button className={`tab-button ${active==='tab-1'? 'tab-button-active':''}`} id="tab-1" onClick={handleClick}>Skills</button>   
         <button className={`tab-button ${active==='tab-2'? 'tab-button-active':''}`} id="tab-2" onClick={handleClick}>Education</button>  
         <button className={`tab-button ${active==='tab-3'? 'tab-button-active':''}`} id="tab-3" onClick={handleClick}>Certification</button>    
      </div>
       {/* tabs button end */}

         {/* tab content is start */}
        <div class='col'>
            <div class={`row ${active === 'tab-1' ? 'active' : ''}`} id='tab-page'>
                <p>This is tab 1</p>

            </div>
             <div class={`row ${active === 'tab-2' ? 'active' : ''}`} id='tab-page'>
                   <p>This is tab 2</p> 

            </div>
             <div class={`row ${active === 'tab-3' ? 'active' : ''}`} id='tab-page'>
                   <p>This is tab 3</p> 

            </div>



         </div>
        {/* tab content is end */}

  </div>
  );
}

export default TabsBased;