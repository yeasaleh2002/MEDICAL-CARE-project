import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>

            <Doctor></Doctor>

             <h1 className="text-info text-center p-5">About Us</h1>
            <AboutUs></AboutUs>
            <hr className="mx-3"/>
            <h1  className="text-secondary text-center p-5">Contact</h1>
            <Contact></Contact>
        </div>
    );
};

export default Home;