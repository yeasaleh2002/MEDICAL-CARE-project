import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';




const Doctor = () => {
    return (
        <div className="container pt-5">
            
                          <h1 className=" text-center p-4"> <Link className="text-decoration-none text-info" to="/doctor"> Doctors Gallery</Link></h1>
              <div className="row ">

                  {/* child-1 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3" src="https://i.ibb.co/6PG52CM/child-1.jpg" alt="" />
                      </div>
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Fayez Karim</h5>
                          <h5  className="bg-primary text-white text-center p-2">Child Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>
                  
                  {/* child-2  */}
                  <div className="col-sm-12 col-md-6 col-lg-4  doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100  h-100 rounded-3"  src="https://i.ibb.co/M50HxQv/child-2.jpg" alt="" />
                      </div>

                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Shadath Hossain</h5>
                          <h5  className="bg-primary text-white text-center p-2">Child Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

                  {/* child-3 */}
                  <div className="col-sm-12 col-md-6 col-lg-4  doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/LpF0xBM/child-3.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Nazmul Houqe</h5>
                          <h5  className="bg-primary text-white text-center p-2">Child Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

               {/* dental-1 */}
                  <div className="col-sm-12 col-md-6 col-lg-4  doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/YZmcxb2/dental-1.jpg" alt="" />
                      </div>
                     
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Siam Ahmed</h5>
                          <h5  className="bg-primary text-white text-center p-2">Dental Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

                  {/* dental-2 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/hVqZtRB/dental-2.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Foysal Mahmud</h5>
                          <h5  className="bg-primary text-white text-center p-2">Dental Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

                   {/* eye-1 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/F4sZXt8/Portrait-of-handsome-eye-doctor-sitting-with-ophthalmologic-device-in-the-cabinet.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Motin Khan</h5>
                          <h5  className="bg-primary text-white text-center p-2">Eye Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>


                  {/* eye-2  */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/rsv4Zwj/eye-2.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Anamul Houqe</h5>
                          <h5  className="bg-primary text-white text-center p-2">Eye Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

               {/* medicin-3 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/rmHCr1t/medicin-1-jpg.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Junayed Yeafin</h5>
                          <h5  className="bg-primary text-white text-center p-2">Medicine Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>


               {/* medicin-2 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                     <div>
                     <img  className="w-100 h-100 rounded-3"  src="https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149__480.jpg" alt="" />
                     </div>
                     
                     <div>
                          <h5 className="bg-dark text-white text-center p-2">Naime Molla</h5>
                          <h5  className="bg-primary text-white text-center p-2">Medicine Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

               {/* medicin-3 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/TvD1C6T/medicin-3-jpg.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Rayhan ahmed</h5>
                          <h5  className="bg-primary text-white text-center p-2">Medicine Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

                   {/* urology-1 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                      <div>
                      <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/DGxvBcy/urology-1.jpg" alt="" />
                      </div>
                      
                      <div>
                          <h5 className="bg-dark text-white text-center p-2">Mahmudul Hasan</h5>
                          <h5  className="bg-primary text-white text-center p-2">Urology Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

                   {/* urology-2 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                     <div>
                     <img  className="w-100 h-100 rounded-3"  src="https://i.ibb.co/SxM4nhg/urology-2.jpg" alt="" />
                     </div>
                     
                     <div>
                          <h5 className="bg-dark text-white text-center  p-2">Arefin Hossain</h5>
                          <h5  className="bg-primary text-white text-center  p-2">Urology Specialist</h5>
                          <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

               {/* urology-3 */}
                  <div className="col-sm-12 col-md-6 col-lg-4 doctor mb-5 gx-3 p-3">
                     <div>
                     <img className="w-100 h-100 rounded-3" src="https://i.ibb.co/J56kYQ8/urology-3.jpg" alt="" />
                     </div>
                     
                     <div>
                          <h5 className="bg-dark text-white text-center p-2">Yasin Ali</h5>
                          <h5  className="bg-primary text-white text-center p-2">Urology Specialist</h5>
                         <span className=" d-flex justify-content-center align-items-center "> <button className="btn btn-danger">Appointment Please</button> </span>
                      </div>
                  </div>

              </div>
        </div>
    );
};

export default Doctor;