// import React, {useState} from "react";
// import Nav from "./Nav";
// import {  useLocation, useNavigate } from 'react-router-dom';

// import { Navigate } from "react-router-dom";

// // import Popup from 'reactjs-popup';
// // import { Link } from "react-router-dom";
// const Paymentpage=(props)=>{



//   let navigate =useNavigate();
//     const [paymentSuccessful, setPaymentSuccessful] = useState(false);
//   const [pdfGenerated, setPdfGenerated] = useState(false);

//   // let  location = useLocation();
//   // console.log(location.state);
 

//   const handlePayNowClick = () => {

   
//       setPaymentSuccessful(true);
   
//   };

  
 

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Here you would typically submit the form data to your server to process the payment
//     // Once the payment has been successfully processed, set pdfGenerated to true to allow PDF generation
//     setPdfGenerated(true);
//     setPaymentSuccessful(true)
//     window.location.href='/PatientViewDetails';
//   };

//   return (
//     <div  className="payment-form">
//       <Nav/>
     
//       <h1 className="payment-h">Payment Form</h1>
      
//       <form  className="payment-input"  onSubmit={handleFormSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" required />
        
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />
    
//         <label htmlFor="amount">Amount:</label>
//         <input type="number" id="amount" name="amount" required />
//         <br />
//         <button type="submit">Submit</button>
        
//       </form>
//       <button onClick={handlePayNowClick}>Pay Now</button>
//       <button> </button>
//       {/* <button type="submit">Submit</button> */}
//       {paymentSuccessful ? (
//         <p>Payment was successful!</p>
//       ) : (
//         <p>Payment was unsuccessful.Please pay the Amount</p>
//       )}
//     </div>
//   );

// }

// export default Paymentpage;