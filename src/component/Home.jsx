import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Plants from '../images/Plants.png';
import checkCircle from '../images/checkCircle.png';
import Grass from '../images/Grass.png';
import profile from '../images/profile.png';

const Home = () => {
  return (
    <div>
      <Container className='position-relative'>
        <Row>
          <Col sm={6} className='col1'>
            <h1 className='w-100'>Our Applications</h1>
            <h6 style={{ color: '#FFCA2C' }}>Global Operating System for Agtech</h6>
            <p className='mt-3 para'>The platform is targeted at supporting small farmers to record their farming activities, create and receive detailed.</p>
            <div className='mt-2 feature'>
              <span><img src={checkCircle} className='pe-2' />Setup in Seconds</span>
              <span className='ps-4'><img src={checkCircle} className='pe-2' />No Credit Card</span>
              <span className='ps-4'><img src={checkCircle} className='pe-2' />Cancel Anytime</span>
            </div>
            <div className='mt-4 w-100 d-flex'>
              <p className='p-2 px-4 viewmore1'>View More</p>
              <p className='p-2 px-4 viewmore2'>View More</p>
            </div>
            <div className='mt-2 d-flex align-items-center'>
              <img src={profile} alt='Profile' />
              <div className='ps-2'>
                <p className='m-0 fw-bold'>Anuj Chavan</p>
                <p className='m-0' style={{ color: '#FFCA2C' }}>Junior ReactJS Developer</p>
              </div>
            </div>
          </Col>
          <Col sm={6} className='col2'>
            <img src={Plants} alt="Plants" className='image' />
          </Col>
        </Row>
        <img src={Grass} alt="Grass" className='imagePosition' />
      </Container>
    </div>
  )
}

export default Home;
