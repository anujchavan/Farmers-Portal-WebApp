import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import serviceimage1 from '../images/serviceimage1.png';
import serviceimage2 from '../images/serviceimage2.png';
import serviceimage3 from '../images/serviceimage3.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import istockphoto3 from '../images/istockphoto3.jpg';
import istockphoto4 from '../images/istockphoto4.jpg';
import istockphoto5 from '../images/istockphoto5.jpg';
import istockphoto6 from '../images/istockphoto6.jpg';

const SpecialServices = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='py-5 specialServices'>
      <Container className='d-flex flex-column align-items-center'>

        <h3>Our Special Services</h3>
        <h6 className='textColor'>Working with Excellent</h6>
        <p className='mt-3 fw-light text-center px-5'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual, a small team, or a growing. Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual.</p>

        <Container className='mt-2'>
          <Row>
            <div className="slider-container">
              <Slider {...settings}>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={image11} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={istockphoto3} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={image12} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={istockphoto4} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={istockphoto5} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={istockphoto6} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={serviceimage1} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={serviceimage2} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='columnStyle'>
                  <Card className='cardStyle'>
                    <Card.Img variant="top" src={serviceimage3} className='servicesImage' />
                    <Card.Body>
                      <Card.Title className='textColor'>Whether an individual</Card.Title>
                      <Card.Text className='fw-light'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals</Card.Text>
                      <div className='mt-4 w-100 d-flex'>
                        <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
                        <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

              </Slider>
            </div>
          </Row>
        </Container>

      </Container>
    </div>
  )
}

export default SpecialServices;
