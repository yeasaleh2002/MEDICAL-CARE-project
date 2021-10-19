import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

   // useState declare
     const [services, setServices ] = useState([]);


     // data load
      useEffect(() => {
           fetch(`/medicalServices.json`)
           .then(response => response.json())
           .then(data => setServices(data))
      }, [])



    return (
        <div>
            <div className="container p-2">

            <h1 className=" text-center text-secondary mt-5 pb-4"> <Link className="text-decoration-none text-secondary" to="/services"> Our Services</Link></h1>
            

            {/* services all  data */}
                <Row xs={1} md={2} lg={3} className="g-4"  >
                    
                    {
                        services.map(medicalService => <Service
                        key = {medicalService._id}
                        service = {medicalService}
                        
                        >

                        </Service>) 
                    }

                </Row>


            </div>
        </div>
    );
};

export default Services;