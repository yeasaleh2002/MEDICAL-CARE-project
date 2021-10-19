import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {


     const [services, setServices ] = useState([]);


      useEffect(() => {
           fetch(`/medicalServices.json`)
           .then(response => response.json())
           .then(data => setServices(data))
      }, [])

    return (
        <div>
            <div className="container p-2">
            <h1 className="text-center text-info mt-5 pb-4"> Our Services </h1>


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