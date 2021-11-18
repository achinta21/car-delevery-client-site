import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrder = () => {
    const{user}=useAuth();
    const[appoinments,setAppoinments]=useState([]);
    useEffect(()=>{
        const url=(`https://frozen-inlet-69668.herokuapp.com/appointments?email=${user.email}`)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppoinments(data))
    },[])

    const handelDelete = id => {
      const url=(`https://frozen-inlet-69668.herokuapp.com/users/${id}`);
      fetch(url,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
      
    }
    return (
        <div>
            <h2>My Order: {appoinments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">images</TableCell>
            <TableCell align="right">serviceName&nbsp;</TableCell>
            <TableCell align="right">Delete&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.img}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right"><Button onClick={()=> handelDelete(row._id)} sx={{fontWeight: 'bold'}} variant="contained">Delete</Button>{row.Delete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrder;