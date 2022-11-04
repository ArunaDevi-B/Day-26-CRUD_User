import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';




export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          onClick={()=> window.location.replace('/')}
          className='Nav_home'>
            Home
          </Typography>
          <Button color="inherit"
          onClick={()=> window.location.replace('/add-user')}
          >Add User</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                 <div className="container">
//                     <div className="collapse navbar-collapse">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-bold text-light fs-5" aria-current="page" to="/">Home</Link>
//                             </li>
//                         </ul>

//                     </div>
//                     <Link className="btn btn-outline-light" to="/create-user">Add User</Link>
//                 </div>
//             </nav>
//         </div>
//     )
// }