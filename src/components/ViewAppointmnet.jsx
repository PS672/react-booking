// import React from "react";
import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

const ViewAppointment=()=>{
    
    
    const {username}=useParams();
    const [users,setUsers]=useState([])
    
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:9192/api/ahospital/doctordetails/${username}`)
        setUsers(result.data);
    };


return(

    <div>
        <Nav/>

        <br></br>
        <div className="view">
        <h2>Appointment Details</h2>
      <br></br>
      <br></br>

        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">userEmail</th>
                <th scope="col">patientName</th>
                <th scope="col">patientAge</th>
                <th scope="col">patientGender</th>
                <th scope="col">appointmentDate</th>
                {/* <th scope="col">Experience</th>    */}
                <th scope="col">doctorName</th>   
                <th scope="col">appointmentSlot</th>   
                </tr>
                <br></br>
            </thead>
            <tbody>
                
                
                {
                        users.map((user,index)=>(
                        <tr>
                        {/* <th key={index}>{index + 1}</th> */}
                        <td>{user.userEmail}</td>
                        <td>{user.patientName}</td>
                        <td>{user.patientAge}</td>
                        <td>{user.patientGender}</td>
                        {/* <td>{user.experience}</td> */}
                        <td>{user.appointmentDate}</td>
                        <td>{user.doctorName}</td>
                        <td>{user.appointmentSlot}</td>

                        {/* <td><Link to="/bookappointment" className="btn btn-primary">Book an Appointment</Link> </td> */}
                    </tr> 
                        ))
                    }
            </tbody>
        </table>
                    

       
        
        
        </div>
        </div>
);
}


export default ViewAppointment;