// // import React from "react";
// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";

// const Doctorlogin=()=>{
//     const[email,setEmail]=useState('');
//     const[pass,setPass]=useState('');

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(email);
//         window.location.href='/viewappointmentbookings'

    

// }
// return(
//     <>
//     <Nav/>

//     <div className="doctor-login">
        
//             <h1>Doctor's Login Page</h1>
//             <form className="Dlogin-form "   onSubmit={handleSubmit}>
//                 <label htmlFor ="emailAddress">EmailAddress</label>
//                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="emailAddress" placeholder="Enter your Email" id="emailAddress" name="email"></input>
//                 <br></br>
//                 <br></br>
//                 <label htmlFor ="password">Password</label>
//                 <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"></input>
//                 <br></br>
//                 <br></br>
//                 <button type="submit" >Log In</button>
               

//             </form>
            
//             </div>
//             </>

// )}
// export default Doctorlogin