import React, { useState } from 'react';
import Backdrop  from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import PrivateRoute from '../pages/Login/PrivateRoute/PrivateRoute';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Purchase  = ({openBooking,handleBookingClose,producet}) => {
 const{name,prices,img}=producet
 
//  const{producetId}=useParams();
 const{user}=useAuth();
 const initialInfo={patientName:user.displayName,email:user.email,phone:'',img:img,};
 const[bookingInfo,setBookingInfo]=useState(initialInfo);

 const handelOnBlur=e=>{
    const field=e.target.name;
    const value=e.target.value;
    const newInfo={...bookingInfo};
    newInfo[field]=value;
    console.log(newInfo)
    setBookingInfo(newInfo)
 }
 
    const handelBookingSubmit=e=>{
     const appointment={
          ...bookingInfo,
          serviceName: name,
          img:img
     }
     console.log(appointment)
     fetch('https://frozen-inlet-69668.herokuapp.com/appointments',{
       method:'POST',
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(appointment)
     })
     .then(res=>res.json())
     .then(data=>{
       if(data.insertedId){
        handleBookingClose();
       }
       

     })
      e.preventDefault();
    }
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout:500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>
          <form onSubmit={handelBookingSubmit}>
           <TextField
            
            sx={{width:'90%',m:1}}
            id="outlined-size-small"
            defaultValue={img}
            img="img"
            size="small"
             />
           <TextField
            
            sx={{width:'90%',m:1}}
            id="outlined-size-small"
            defaultValue={prices}
            name="prices"
            size="small"
             />
           <TextField
            
            sx={{width:'90%',m:1}}
            id="outlined-size-small"
            name="patientName"
            onBlur={handelOnBlur}
            defaultValue={user.displayName}
            size="small"
             />
           <TextField
           
            sx={{width:'90%',m:1}}
            id="outlined-size-small"
            name="email"
            onBlur={handelOnBlur}
            defaultValue={user.email}
            size="small"
             />
           <TextField
           
            sx={{width:'90%',m:1}}
            id="outlined-size-small"
            name="phone"
            onBlur={handelOnBlur}
            defaultValue="your phone number"
            size="small"
             />
            <PrivateRoute> <Button type="submit" variant="contained">Submit</Button></PrivateRoute>

          </form>
        </Box>
      </Modal>
    )
};

export default Purchase ;
