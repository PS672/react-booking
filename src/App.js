import React,{useState} from "react";
import Homepage from './components/Homepage';
import './App.css';
import './css/default.css';
import  Loginp  from "./components/Loginp";
import  Registerr  from "./components/Registerr";


import Bookappointment from "./components/Bookappointment";
import Paymentpage from "./components/Paymentpage";
import Patientcontroller from "./components/Patientconnect/Patientcontroller";

import Doctorpage from "./components/Doctorpage";

import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
// import DetailsPage from "./components/DetailsPage";
import Doctorlogin from "./components/Doctorlogin";
import ViewAppointment from "./components/ViewAppointmnet";

import PatientViewDetails from "./components/PatientViewDetails";
import EditPatient from "./components/EditPatient";
import Contact from "./components/Contact";




function App() {
  
  return (
    <div className='app'>
      
      <Router>
        
      
     
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        {/* <Route exact path="/login" element={<Login/> }/> */}
        <Route  path="/register" element={<Registerr/>}/>

        <Route  path="/login" element={<Loginp/>}/>
        <Route  path="/doctorlogin" element={<Doctorlogin/>}/>
        <Route path ="/doctorpage" Component={Doctorpage}></Route>
        <Route path ="/bookappointment/:name" element={<Bookappointment/>}></Route>
        {/* <Route exact path="/doctorpage" component={doctorpage}></Route>
        <Route path="/bookappointment/:doctorName" component={Bookappointment}></Route> */}
        <Route path ="/viewappointment/:username" Component={ViewAppointment}></Route>

        <Route path ="/paymentpage"  Component={Paymentpage}></Route>

        <Route path ="/Patientcontroller"  Component={Patientcontroller}></Route>
        
        <Route path ="/patientviewdetails"  Component={PatientViewDetails}></Route>
        <Route  path ="/patientviewdetails/:userEmail"  Component={PatientViewDetails}></Route>

        <Route path="/editpatient/:id" element={<EditPatient/>}></Route>
        <Route path ="/contactus"  Component={Contact}></Route>


        

        
       
        


      
      </Routes>
    </Router>
    </div>

  );
}

export default App;
