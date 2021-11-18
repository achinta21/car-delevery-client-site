import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmine from './MakeAdmine/MakeAdmine';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrder from './MyOrder/MyOrder';
import Payment from './Payment/Payment';
import AddProducet from './AddProducet/AddProducet';
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const{admin}=useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <Link to="/"><Button sx={{ display: 'flex',fontWeight: 'bold',textDecoration: 'none' }} color="inherit">Home</Button></Link>
      <Link to={`${url}/myorder`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">Myorder</Button></Link>
      <Link to={`${url}/review`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">Review</Button></Link>
      <Link to={`${url}/payment`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">payment</Button></Link>
      <Box>{admin}<Link to={`${url}/allOrders`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">All Orders</Button></Link>
      <Link to={`${url}/addProduct`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">Add Product</Button></Link></Box>
      <Link to={`${url}/makeadmine`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">Admin</Button></Link>
      <Link to={`${url}/Manage Products`}><Button sx={{ display: 'flex',fontWeight: 'bold' }} color="inherit">Manage Products</Button></Link> 
      
      <Button sx={{ display: 'flex',fontWeight: 'bold' }}>LogOut</Button>
      </List>
      
  
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <h3>Dashboard</h3>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/makeadmine`}>
          <MakeAdmine></MakeAdmine>
        </AdminRoute>
        <Route path={`${path}/myorder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProducet></AddProducet>
        </AdminRoute>
      </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {

  window: PropTypes.func,
};

export default Dashboard;
