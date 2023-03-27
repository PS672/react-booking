import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Patientservice from "./Patientconnect/Patientservice";
import Nav from "./Nav";

import axios from "axios"

export default function Registerr() {
    // const[emailAddress,setEmail]=useState('');
    // const[password,setPass]=useState('');
    // const[firstName,setFirstName]=useState('');
    // const[lastName,setLastName]=useState('');
    // const[phoneNumber,setPhoneNumber]=useState('');


    
    const navigate= useNavigate();

const [user,setUser]= useState({
    emailAddress: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
})



const{emailAddress, password, firstName, lastName, phoneNumber}=user;

const onInputChange =(e) => {
setUser({...user, [e.target.name]:e.target.value });
};

const onSubmit =async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:9192/api/phospital/signup",user);
    navigate('/login');
    // window.location.href='/login';
};

   


   
    return (
        <div>
            <Nav/>
        
            <div className="register-page">
       
            <h1>Register</h1>
            <form onSubmit= {(e) => onSubmit(e)}>
                        <div className="form-group mb-2" s>
                            <label className="form-label">firstName</label>
                            <input type={"text"} 
                                   placeholder="Enter your name" 
                                   name="firstName"
                                   value={firstName} 
                                   onChange={(e) => onInputChange(e)}
                                    />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">lastName</label>
                            <input type={"text"} 
                                   placeholder="Enter your lastName" 
                                   name="lastName"
                                   value={lastName} 
                                   onChange={(e) => onInputChange(e)}
                                   />
                        </div>
    
                        <div className="form-group mb-2">
                            <label className="form-label">emailAddress</label>
                            <input type={"email"} 
                                   placeholder="Enter your emailAddress" 
                                   name="emailAddress"
                                   value={emailAddress} 
                                   onChange={(e) => onInputChange(e)}
                                   />
                        </div>
    
                        <div className="form-group mb-2">
                            <label className="form-label">password</label>
                            <input type={"password"} 
                                   placeholder="Enter your password" 
                                   name="password"
                                   value={password} 
                                   onChange={(e) => onInputChange(e)}
                                   />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">phoneNumber</label>
                            <input type={"number"} 
                                   placeholder="Enter your phoneNumber" 
                                   name="phoneNumber"
                                   value={phoneNumber} 
                                   onChange={(e) => onInputChange(e)}
                                   />
                        </div>
                        
                        {/* <button className="btn btn-success"  >Reset</button> */}
                        {/* <button className="btn btn-success"   type="submit" >Submit</button> */}
                        <button type="submit" onClick={(e)=>onSubmit(e)}>Submit</button>
    
                      
                    </form>  
            </div>
            </div>
          




        

    )
}
