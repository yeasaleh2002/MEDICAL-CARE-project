import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    // destructring   
  const  {_id, picture, service, description} = props?.service || {}

    

    return (
        <Col>
        
         {/*services in card from react bootstrap */}

         <Card className="service-card">

                {/* our medical care service image dynamic */}
                <div className=" d-flex align-items-center justify-content-center ">
                <Card.Img className="service-img w-100 " variant="top" src={picture} />
                </div>

                {/*our medical care service Name dynamic */}
                <Card.Body>
                <Card.Title><h3>{service}</h3></Card.Title>
                

                {/*our medical care service small description dynamic */}
                
                <Card.Text>
                {description.slice(0 , 236)}
                </Card.Text>
                

                            
                <span className=" d-flex align-items-center justify-content-center">
                {/* checking single service details  */}
                <Link  to={`/service/${_id}`}>
                <button className="btn btn-secondary call-us-button fs-5"> Call Us </button>
                </Link>
                </span>


                </Card.Body>
                </Card>
                        
        </Col>
    );
};

export default Service;