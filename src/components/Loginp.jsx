import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

const Loginp=()=>{
    // const[email,setEmail]=useState('');
    // const[pass,setPass]=useState('');

    const navigate=useNavigate();

    const [user,setUser]= useState({
        username: "",
        password: "",
        role:"",
           
    });


    const{username,password,role}=user;
    const onInputChange =(e) => {
        setUser({...user, [e.target.name]:e.target.value });
        };

       
        

    const onSubmit =async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/api/usecase/login",user);
        if(role=='DOCTOR'){
        navigate(`/viewappointment/${username}`);     

        }else{
            navigate('/doctorpage');
        }
        

    };



    return(
        <div>
            <Nav></Nav>
        
        <div className="auth-form-container">
            
            
            <h1>Login</h1>
            <form className="login-form " >
            <label className="form-label">username</label>
                            <input type={"text"} 
                                   placeholder="Enter your name" 
                                   name="username"
                                   value={username} 
                                   onChange={(e) => onInputChange(e)}
                                    />
              
              
                <label htmlFor ="password">Password</label>
                
               
                            <input type={"password"} 
                                   placeholder="Enter the password" 
                                   name="password"
                                   value={password} 
                                   onChange={(e) => onInputChange(e)}
                                    />

                
            <label className="form-label">Role</label>
                            <input type={"text"} 
                                   placeholder="Enter your role" 
                                   name="role"
                                   value={role}
                                   onChange={(e) => onInputChange(e)}
                                    />







                                    
                <br></br>
                <br></br>
                <button type="submit"  onClick={(e)=>onSubmit(e)}>Log In</button>
               
                <p>Don't have an account?</p><Link to ="/register"> Register</Link>
                <br></br>
                <br></br>

            </form>
            {/* <button className="link-btn"  onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button> */}
            </div>

            </div>

    );

};
export default Loginp;
