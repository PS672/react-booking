import React from "react";


const Nav = () => {
    return (
        <>
        {/* <div className="nav ">
            
        <nav className="navbar navbar-expand-md navbar navbar-dark bg-primary ">
                <div class="container-fluid">
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                      
                            <a  href="/staffHomePage" class="nav-link active" aria-current="page">Home</a> 
                            <a  class="nav-link" href="/login">Login</a> 
                            
                            <a  class="nav-link" href="/register">Signup</a> 
                            <a  class="nav-link" href="/bookingappointment">Booking page</a> 
                            <a  class="nav-link" href="/detailspage">Logout</a> 
                        </div>
                    </div>
                </div>
            </nav>
           
     
        </div> */}



<div class="navbar">
  <a href="/">Home</a>
  <div class="dropdown">
    {/* <button class="dropbtn">Login
      <i class="fa fa-caret-down"></i>
    </button> */}
    <div class="dropdown-content">
      <a href="/login">Login</a>
      {/* <a href="/doctorlogin">Doctor</a> */}
     
      
    </div>
    
  </div>
  
  <a href="/register">Sign up</a>
  
  <a href="/">Logout</a>
  <a href="/contactus">Contact us</a>
</div>
        
        </>
        )
}

 export default Nav;