import {  BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Contract from './pages/Contract/Contract';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Mores from './pages/Mores/Mores';
import Register from './pages/Register/Register';
import Purchase from './Purchase/Purchase';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/purchase/:producetId">
        <Purchase></Purchase>
       </Route>
       <PrivateRoute path="/more">
         <Mores></Mores>
       </PrivateRoute>
       <Route path="/contract">
         <Contract></Contract>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/register">
         <Register></Register>
       </Route>
     </Switch>
     <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
