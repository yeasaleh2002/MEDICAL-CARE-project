import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
 
   {/* Carousel item - 1  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://i.ibb.co/jzDrCHW/us-news-announcement-surgery.jpg"
      alt="First slide"
    />

      {/* Carousel item caption */}
    <Carousel.Caption>
      <span className="text-white bg-primary fs-1 p-2 mb-1 rounded">Modern Operating theater</span> <br /> <br />
      <span className="text-white bg-dark p-1 rounded">Historically, the term "operating theatre" referred to a non-sterile, tiered theater or amphitheater in which students and other spectators could watch surgeons.</span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 2 */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://i.ibb.co/d5xBC9d/A-doctor-listening-to-his-patient-s-heartbeat-with-a-stethoscope.jpg"
      alt="Second slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-primary fs-1 p-2 mb-1 rounded">Expert Doctor</span> <br /> <br />
      <span className="text-white bg-dark p-1 rounded">All Healthspring Doctors come with a wealth of experience in their respective domains. We have tied up with experts doctor in the field of family physician.</span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 2  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rx1bcWx/Artificial-lung-ventilation-monitor-intesive-care-unit-nurse.jpg"
      alt="Third slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-primary fs-1 p-2 mb-1 rounded">Modern Medical Laboratory</span> <br /> <br />
      <span className="text-white bg-dark p-1 rounded">Modern Medical Laboratory Journal. Review policy on Publons. Does not allow reviews to be publicly displayed.</span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;