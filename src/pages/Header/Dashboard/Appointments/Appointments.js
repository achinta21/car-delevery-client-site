// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../../hooks/useAuth';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const Appointments = () => {
//     const{user}=useAuth();
//     const[appoinments,setAppoinments]=useState([]);
//     useEffect(()=>{
//         const url=(`http://localhost:5000/appointments?email=${user.email}`)
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>setAppoinments(data))
//     },[])
//     return (
//         <div>
//             <h2>hello appointments: {appoinments.length}</h2>
            
//             <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>name</TableCell>
//             <TableCell align="right">img</TableCell>
//             <TableCell align="right">serviceName&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {appoinments.map((row) => (
//             <TableRow
//               key={row._id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.patientName}
//               </TableCell>
//               <TableCell align="right">{row.img}</TableCell>
//               <TableCell align="right">{row.serviceName}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//         </div>
//     );
// };

// export default Appointments;