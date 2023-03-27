
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";
import { useParams } from 'react-router-dom';


const Bookappointment=(props)=> {


    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const navigate=useNavigate();
    const { name } = useParams();

    const currentDate=new Date().toISOString().slice(0,10);

    const [user, setUser] = useState({
        
        userEmail:"",
        patientName:"",
        patientAge:"",
        patientGender:"",
        doctorName: name,
        appointmentDate:"",
        appointmentSlot:"",
    });

    const { userEmail, patientName, patientAge,patientGender,doctorName,appointmentDate,appointmentSlot} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };



    const handlePayNowClick = (e) => {
        e.preventDefault();
        setPaymentSuccessful(true);
     
    };
    


    const onSubmit=async(e)=>{
        e.preventDefault();
      
        await axios.post("http://localhost:9192/api/ahospital",user);
        navigate(`/patientviewdetails/${userEmail}`);

        // const doctorName = props.doctorName;
        // console.log(navigate(`/paymentpage/${doctorName}`));
        // navigate(`/paymentpage/${doctorName}`);
       
//   };


        
    }

    return(
        <div className="book-process">
              <h1>Booking Process</h1>
              <form className="book-form" >
                <label htmlFor ="emailAddress">UserEmail</label>
                <input className="input-book"       
                        value={userEmail} 
                        onChange={(e) => onInputChange(e)}
                        type={"email"}
                        placeholder="Enter your Email" 
                        id="emailAddress" 
                        name="userEmail"  ></input>
            
                
                <label htmlFor ="patientName">PatientName</label>
                <input value={patientName} 
               onChange={(e) => onInputChange(e)}
               type={"text"} placeholder="Enter your name" id="patientName" name="patientName"></input>
                
            
                <label htmlFor ="patientAge">PatientAge</label>
                <input value={patientAge} 
               onChange={(e) => onInputChange(e)}
                type={"text"} placeholder="enter the age" id="patientAge" name="patientAge"></input>
                
               
                
                <label htmlFor ="patientGender">PatientGender</label>
                <input value={patientGender} onChange={(e) => onInputChange(e)}
                type={"text"} placeholder="enter the gender" id="patientGender" name="patientGender"></input>
                

                 <label htmlFor ="doctorName">DoctorName</label>
                 <input type="text" value={doctorName} readOnly />
                {/* <input value={doctorName} onChange={(e) => onInputChange(e)}
                type={"text"} placeholder="enter the doctorName" id="doctorName" name="doctorName"></input> */}






             
               
                <label htmlFor ="appointmentDate">AppointmentDate</label>
                <input   value={appointmentDate} 
                onChange={(e) => onInputChange(e)} type="date" min={currentDate}
                placeholder="select the date"  id="appointmentDate" name="appointmentDate"></input>
                
                
                <label htmlFor ="appointmentSlot">AppointmentSlot</label>
                <select name="appointmentSlot" id="aappointmentSlot" value={appointmentSlot} 
               onChange={(e) => onInputChange(e)}><br></br>
                    <br></br>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="10:00Am-11:00Am">10:00Am-11:00Am</option>
                    <option value="11:00Am-12:00Pm">11:00Am-12:00Pm</option>
                    <option value="1:00Pm-3:00Pm">1:00Pm-3:00Pm</option>
                </select><br></br>  
                <button className="payment-btn" type="submit"  onClick={(e)=>onSubmit(e)}>Submit</button><br></br>
                <button className="payment-btn" type="submit" onClick={handlePayNowClick} >Pay Now</button>
                    {paymentSuccessful ? (
                            <p>Payment was successful!</p>
                        ) : (
                            <p>Payment was unsuccessful.Please pay the Amount</p>
                        )}
                </form>


        </div>
      

    );
};

export default Bookappointment;








