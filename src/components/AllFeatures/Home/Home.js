import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>

            <Services></Services>
            <hr className="mx-3"/>

            <Doctor></Doctor>
            <hr className="mx-3"/>

             <h1 className=" text-center p-5 "> <Link className="text-decoration-none text-info" to="/about"> About Us</Link> </h1>
            <AboutUs></AboutUs>

            <hr className="mx-3"/>

            <h1  className=" text-center p-5"> <Link className="text-decoration-none text-secondary" to="/contact">Contact</Link> </h1>
            <Contact></Contact>
        </div>
    );
};

export default Home;