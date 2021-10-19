import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/AllFeatures/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/AllFeatures/Services/Services';
import Login from './components/LoginAndRegister/Login/Login';
import Doctor from './components/AllFeatures/Doctor/Doctor';
import Contact from './components/AllFeatures/Contact/Contact';
import AboutUs from './components/AllFeatures/AboutUs/AboutUs';
import Blogs from './components/AllFeatures/Blogs/Blogs';
import Register from './components/LoginAndRegister/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/AllFeatures/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div className="App">
        
     <AuthProvider>
        <BrowserRouter>
 
        <Header></Header>
         
          <Switch>

             <Route exact path="/">
               <Home></Home>
             </Route>

             <Route path="/home">
               <Home></Home>
             </Route>

             <Route path="/services">
               <Services></Services>
             </Route>

             <PrivateRoute path="/serviceDetails/:serviceId">
               <ServiceDetails></ServiceDetails>
             </PrivateRoute>

             <Route path="/doctor">
               <Doctor></Doctor>
             </Route>

             <Route path="/blogs">
               <Blogs></Blogs>
             </Route>
            
             <Route path="/about">
               <AboutUs></AboutUs>
             </Route>

             <Route path="/contact">
               <Contact></Contact>
             </Route>

             <Route path="/login">
               <Login></Login>
             </Route>

             <Route path="/register">
               <Register></Register>
             </Route>

             <Route path="*">
               <NotFound></NotFound>
             </Route>

          </Switch>

       <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;




