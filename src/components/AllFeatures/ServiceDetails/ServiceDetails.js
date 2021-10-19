import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css';



const ServiceDetails = () => {
 
    const { serviceId } = useParams();

    const [servicesDetails, setServicesDetails] = useState([]);

    const [singleService, setSingleService] = useState({});

   // load data
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/yeasaleh2002/fakedata/main/fakedata.json`)
          .then(res => res.json())
        
          .then(data => setServicesDetails(data));
      }, []);


   // find data
    useEffect(() => {
        const foundService = servicesDetails.find(
       
          (service) => service._id === serviceId
        );
        setSingleService(foundService);
      }, [servicesDetails]);
 

    return (
        <div>
            <h2 className="text-center text-danger p-5"> Service Id:  {serviceId}</h2>


           <div className="container">


                {/* card from react bootstrap */}
             <Card>

                {/*  single service image dynamic */}
                <div >
                <Card.Img className=" h-100 w-100 " variant="top" src={singleService?.picture} />
                </div>


                {/*single service card body dynamic */}
                <Card.Body>


                    {/* service name */}
                <Card.Title><h3 className="text-primary">Service Name : {singleService?.service}</h3></Card.Title>


                {/* service email */}
                <Card.Title><h4 className="text-secondary">Email : {singleService?.email}</h4></Card.Title>


                {/* service Phone */}
                <Card.Title><h4 className="text-info">Phone : {singleService?.phone}</h4></Card.Title>


                {/* service address */}
                <Card.Title><h4 className="text-danger">Address : {singleService?.address}</h4></Card.Title>


                {/* single service small description dynamic */}

                <Card.Text className=" bg-dark text-white p-3">
                {singleService?.description2}
                </Card.Text>

                </Card.Body>
             </Card>
           </div>
        </div>
    );
};

export default ServiceDetails;