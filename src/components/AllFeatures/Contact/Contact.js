import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
             {/* contact banner part  */}
               <div className="contact-banner">
                  <h1 >CONTACT</h1>
              </div>
              
              


               <h1 className="text-secondary py-5 text-center">Get in touch with us</h1>

            <div className="container">
            

            {/* Get in touch with us form part  */}
                   <div className="border border-3 border-info rounded-3 p-4 mb-5">
                   <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control placeholder="Enter Your Full Name" /> <br />
                            <Form.Control placeholder="Enter Your Phone Number" /> <br />
                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    />
                            </FloatingLabel>
                        </Form.Group>
                     <span className=" d-flex align-items-end justify-content-end pe-3">  <Button className="button-style" variant="danger"> Message Us </Button> </span> 
                    </Form>
                   
                   </div>

            </div>


            <div className="row container">


            {/* Get in touch with us -- contact part  */}
                <div className="col-sm-12 col-md-12 col-lg-6  contact">
                            <h1 className="text-info text-center">Contact</h1>
                            <p className="fs-4 text-secondary mt-4"> <i className="fas fa-phone-square-alt bg-success text-white p-2 me-2"></i> 01757604381 </p> 
                            <hr />
                            <p className="fs-4 text-secondary mt-2"> <i className="far fa-envelope bg-warning text-white p-2 me-2"></i> yeasalehofficial2002@gmail.com </p>
                            <hr />
                            <p className="fs-4 text-secondary mt-2"> <i className="fas fa-map-marked-alt bg-danger text-white me-2 p-2"></i> 123, Pangsha Rajbari.</p>
                            <hr />


                            {/* social media icons */}
                            <div>
                            <i className="fab fa-facebook bg-primary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-skype bg-info text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-twitter-square bg-primary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-instagram bg-secondary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-whatsapp bg-success text-white fs-2 rounded m-1 p-2"></i>
                            </div>
                            <hr />
                </div>

     {/* Get in touch with us image part */}
                <div  className="col-sm-12 col-md-12 col-lg-6 image-style">
                     <img src="https://i.ibb.co/FnBxD6n/London-Google-Maps.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;