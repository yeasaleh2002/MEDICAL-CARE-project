import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import './Footer.css';

 // footer part start 

const Footer = () => {
    return (


        <div>

   

              <div  className="footer"> 
                 <div className="row container">
                         
                          {/* footer contact info part  */}
                     <div className="col-sm-12 col-md-12 col-lg-4 content-margin pe-2">
                            <h2 className="text-light mb-5">Contact info</h2>
                            <p className="fs-4 text-white mt-4"> <i className="fas fa-phone-square-alt bg-success p-2 me-2"></i> 01757604381 </p>
                            <p className="fs-4 text-white mt-2"> <i className="far fa-envelope bg-warning p-2 me-2"></i> yeasalehofficial2002@gmail.com </p>
                            <p className="fs-4 text-white mt-2"> <i className="fas fa-map-marked-alt bg-danger me-2 p-2"></i> 123, Pangsha Rajbari.</p>
                            
                            {/* social media icons */}
                            <div>
                            <i className="fab fa-facebook bg-primary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-skype bg-info text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-twitter-square bg-primary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-instagram bg-secondary text-white fs-2 rounded m-1 p-2"></i>
                            <i className="fab fa-whatsapp bg-success text-white fs-2 rounded m-1 p-2"></i>
                            </div>

                     </div>
                     

                      {/* footer working hours part */}
                     <div className="col-sm-12 col-md-12 col-lg-4 p-2 bg-primary rounded-3 mt-4 ">
                     <h2  className="text-light mb-5">Working Hours</h2>

                                <div className="row ">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>Monday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>tuesday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>wednesday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>thursday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>friday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>Saturday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>9.00 AM To 5.00 PM</span>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className=" col-sm-6 col-md-6 text-white">
                                        <span>Sunday</span>
                                    </div>
                                    <div  className=" col-sm-6 col-md-6 text-white">
                                        <span>Closed</span>
                                    </div>
                                </div>
                                
                     </div>
                     

                    {/* footer any question part */}
                     <div className="col-sm-12 col-md-12 col-lg-4 ps-5 content-margin">
                            <h2  className="text-light mb-5">Any Questions ?</h2>


                           <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control placeholder="First name" /> <br />
                                    <Form.Control  type="email" placeholder="Enter email" /> <br />
                                    <Form.Control placeholder="Subject" /> <br />
                                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            />
                                    </FloatingLabel>
                                </Form.Group>
                                
                            </Form>
                            <Button variant="primary"> Learn more </Button>
                     </div>                  
                </div>
            </div>
            
            {/* footer copy right part */}
            <div className="bg-info p-5">
                 <h4 className="text-light">© 2021 Medical Care. All Rights Reserved</h4>
            </div>
        </div>
    
    );
};

export default Footer;

// footer part end