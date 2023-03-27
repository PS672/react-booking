import axios from "axios";
import Nav from "./Nav";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PatientViewDetails=()=>{

    const{userEmail}=useParams();

    const{id}=useParams();

    const onSubmit =async(e) =>{
        e.preventDefault();
        window.print();
    }

    const [users,setUsers]=useState({
        userEmail:"",
        patientName:"",
        patientAge:"",
        patientGender:"",
        appointmentDate:"",
        doctorName:"",
        appointmentSlot:"",


    })
    

    
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:9192/api/ahospital/details/${userEmail}`)
        setUsers(result.data);
    };
const deleteusers=async(id)=>{
    const deleteid=await axios.delete(`http://localhost:9192/api/ahospital/${id}`)
    loadUsers();

}

    return(
        <div>
            <Nav/>
            <br></br>
        <div className="view">
        <h2>Patients Scheduled details</h2>
      <br></br>
      <br></br>

      <ol className="list-group list-group-numbered">
      <li className="list-group-item">ID: {users.id}</li>
        <li className="list-group-item">userEmail: {users.userEmail}</li>
        <li className="list-group-item">patientName: {users.patientName}</li>
        <li className="list-group-item">patientAge: {users.patientAge}</li>
        <li className="list-group-item">patientGender: {users.patientGender}</li>
        <li className="list-group-item">appointmentDate: {users.appointmentDate}</li>
        <li className="list-group-item">doctorName: {users.doctorName}</li>
        <li className="list-group-item">appointmentSlot: {users.appointmentSlot}</li>
        </ol>

        <Link className="btn btn-primary"
        to={`/editpatient/${users.id}`}>  Edit</Link>

        <button  className="btn btn-secondary"onClick={(e)=>onSubmit(e)}>Print</button>
        <button className="btn btn-danger"
        onClick={()=>deleteusers(users.id)}>Delete</button>

        </div>

        </div>

    )
}
export default PatientViewDetails