// import React from "react";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";



const Doctorpage=()=> {
    // const handleBookAppointmentclick=(Name)=>{
    //     // window.location.herf=`/bookappointment?doctor=${Name}`;
    //     window.location.href='/bookappointment?DoctorName=${Name}';
    // };
    
    const [users,setUsers]=useState([])
    
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:9192/api/dhospital")
        setUsers(result.data);
    };



    return(
        <div> 
             <Nav/>
            
        <h2 className="doctor-space"  > DOCTOR DETAILS</h2>
        <br></br>
        <br></br>
            <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">EmailAddress</th>
            {/* <th scope="col">Experience</th>    */}
            <th scope="col">Avalibility</th>   
            </tr>
            <br></br>
        </thead>
        <tbody>
            
             
            {
                    users.map((user,index)=>(
                    <tr>
                    {/* <th key={index}>{index + 1}</th> */}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.specialization}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.emailAddress}</td>
                    {/* <td>{user.experience}</td> */}
                    <td>{user.avalibility}</td>

                    {/* <td><Link to="/bookappointment/${name}" className="btn btn-primary">Book an Appointment</Link> </td> */}
                    <td><Link to={`/bookappointment/${user.name}`} className="btn btn-primary">Book an appointment</Link></td>
                </tr> 
                    ))
                }
        </tbody>
    </table>
            
        </div>
    );
};
export default Doctorpage;