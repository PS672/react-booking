import React from "react";
import { Link } from 'react-router-dom';


import Nav from "./Nav";





function Homepage(){
    

   

const handleSubmit=(e)=>{
    e.preventDefault();
   
    // window.location.href='/login';

}




   

    return(
        <div className="nav-bar" onSubmit={handleSubmit}>
            <Nav/>

        
        <div id="sample-text-card" class="card col-4 bg-transparent border-0 d-flex align-items-center" >          
           

           
            <div class="card-body">
            
                <h1 class="mb-3">YOUR HEALTH</h1>
                
                <h3 class="card-title">IS OUR PRIORITY</h3>
            
                <h5 class="card-text">
                    In healthcare sector,service excellence is the
                    facility of the hospital as healthcare service provider
                    to consistently
                </h5>
                
             
                <div class="button--wrapper d-flex align-items-center">
                    {/* <a href="" class="btn btn-md register " role="button">Register</a> */}
                    {/* <a href="" class="btn btn-md login " role="button">Login</a> */}
                    {/* <button type="submit" onSubmit={handleSubmit} class="btn btn-primary" >Login</button> */}
                    <Link to = "/login">   <button type="submit"  class="btn btn-primary">Login</button></Link>
  <div class="dropdown-container">
    {/* <a href="/login">Patient </a>
    <a href="#">doctor</a> */}
   
  </div>
                  
                    
                    {/* <a href="/loginpage"><h4>Login</h4></a> */}
                </div>
            </div> 
            <div id="sample-list">
                <ul>
                    <h3 className="text-alin"><b>OUR SPECIALISTS</b></h3>                     
                    <br></br>
                   

                    <li>
                        Dr.Ramya - General 
                    </li>
                    <br/>
                    
                    <li>
                         Dr.Priya - Gynecologist
                    </li>
                    <br></br>
                    
                    <li>
                        Dr.Hariharan - Dermatologist
                    </li>
                    <br></br>
                    
                    <li>
                        Dr.Parikshit sharma - Dentist
                    </li>
                    <br></br>
                   
                    <li>
                        Dr.Raman - cardiologist
                    </li>
                </ul>


            </div>          
        </div>
        </div>

           





    )
}
export default Homepage