import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            
            {/* about us banner part */}
            <div className="about-us-banner">
                 <h1>About Us</h1>
            </div>

            {/* about us first row part */}
            <div className="row container mt-5 pt-5">
             
                <div className="col-sm-12 col-md-7  pt-4">

                     {/* about us first row text part */}
                        <h3 className="text-center text-info">Medical Care</h3>
              
                   <p>Our Medical Care is a non profitable Private Medical Clinic</p>                   
                   <p>A medical clinic is a type of facility that's focused on outpatient services. Being an outpatient means that you can go home after you receive care. Medical clinics can be operated publicly, privately, or by the government.</p>                                     
                   <p>Medical care means the ordinary and usual professional services rendered by a Physician or other specified Provider during a professional visit for treatment of an illness or injury.</p>
                </div> <br />

                    {/* about us first row image part */}
                <div className="col-sm-12 col-md-5 ">
                     <img className="w-100 h-100" src="https://i.ibb.co/nkRXFBH/german-healthcare-system-1920x1080.jpg" alt="" />
                </div>
            </div> <br /> <br /> <br />


                 {/* about us second row part */}
            <div className="row container">
               
                          
                   {/* about us second row image  part */}
                <div className="col-sm-12 col-md-5">
                     <img className="w-100 h-100 rounded-3" src="https://i.ibb.co/QfkhzDX/LEMO-lead.jpg" alt="" />
                </div> <br /> 


                 {/* about us second row text part */}
                <div className="col-sm-12 col-md-7 ps-5 pt-4">
                   <h2 className="text-secondary">We look forward to exceeding your expectations.</h2> <br />
                   <p>Welcome to our Hospital. Whether you are a patient or a visitor at our hospital, you can expect that over 80 dedicated employees, physicians and volunteers will be working tirelessly to ensure that you receive excellent care in a safe and comfortable environment.</p>
                   <br /> 
                   <p>As a leading healthcare provider in US, Our Hospital provides quality, compassionate and cost-effective services that continually meet and exceed our patient needs. I hope you will consider the many quality healthcare services available to you at our hospital and off-site facilities and providers. We offer high quality health care, the most advanced technologies and skilled physicians and nurses who are passionate about what they do.</p>
                </div>
            </div> <br /> <br />
         


         {/* partners company part */}
         <div className="container mt-5">
             <h1 className="text-center text-primary pb-4">PARTNERS COMPANY</h1>

             <Carousel>

                 {/* carousel item 1 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.logodee.com/wp-content/uploads/2020/02/medical-company-logo-design.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>

            {/* carousel item 2 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.logodee.com/wp-content/uploads/2020/07/LD-C-5.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>

              {/* carousel item 3 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://magnolia-medical.com/wp-content/uploads/2019/08/News-MMT-Covers-500x350.jpg"
      alt="Third slide"
    />

  </Carousel.Item>

                {/* carousel item 4 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.verifiedmarketresearch.com/wp-content/uploads/2021/04/Medtronic-Logo.png"
      alt="four slide"
    />

  </Carousel.Item>

                {/* carousel item 5 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d1wnwqwep8qkqc.cloudfront.net/uploads/stage/stage_image/47896/optimized_large_thumb_stage.jpg"
      alt="five slide"
    />

  </Carousel.Item>

                {/* carousel item 6 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/120281773/original/1b4cab587efb25fcdf04cb1af818fcd93982d76a/do-creative-medical-or-healthcare-logo.jpg"
      alt="six slide"
    />

  </Carousel.Item>
</Carousel>

         </div>

        </div>
    );
};

export default AboutUs;