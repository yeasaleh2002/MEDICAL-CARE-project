import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (

         /* ------ login full page start------ */

        <div className="login-page mt-5">
                       
                       {/* login cart part */}
            <Card className="bg-dark text-white w-100">


                     {/* login  part */}
                <Form className="m-5 p-4">
                    <div className="row">

                        {/* login form part */}
                    <div  className="col-sm-12 col-md-12 col-lg-5">
                        <h1>Login Page</h1>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="p-2 rounded-3 login-btn" >Please Login</Button>{' '}
                    <hr className="w-100" />
                          
                          
                          {/* social media icon and button */}
                        <div>
                            <Button className="icon-style text-danger fs-5 rounded-3"><i className="text-primary fab fa-google"></i> Google</Button>{' '}
                            <Button className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-github"></i> Github</Button>{' '}
                            <Button className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-facebook"></i> Facebook</Button>{' '}
                            </div> <hr  className="w-100"/>
                            <span className="fs-4">New Users ? <Link className="text-info text-decoration-none" to="/register">Register</Link></span>                       
                        </div>

                        {/* login-page image */}
                        <div className="col-sm-12 col-md-12 col-lg-7 ">
                           <img className="w-100 h-100 p-4 rounded" src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/03/one-click-gmail-login-for-wordpress-featured-image.jpg" alt="" />
                        </div>
                    </div>
                </Form>                                                          
            </Card>           
        </div>
        /* ------ login full page end------ */
    );
};

export default Login;