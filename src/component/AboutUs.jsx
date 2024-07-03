import { faCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import person from '../images/person.png';
import person2 from '../images/person2.png';

const AboutUs = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col className='imageContainer' sm={5}>
            <div className='collage'>
              <Row>
                <Col className='h-100'>
                  <Row className='rowSize collageText pb-3'>
                    <span><FontAwesomeIcon icon={faUsers} className='textColor' style={{ height: '30px', width: '30px' }} /></span>
                    <h1>100+</h1>
                    <p className='fw-light' style={{ fontSize: '14px' }}>The platform is targeted at supporting small farmers.</p>
                  </Row>
                  <Row className='rowSize pt-2'>
                    <img src={person} alt='Person' />
                  </Row>
                </Col>
                <Col className='ps-0'>
                  <img src={person2} alt="People" className='h-100' />
                </Col>
              </Row>
            </div>
          </Col>
          <Col className='aboutContainer ps-5' sm={7}>
            <h3>Our Applications</h3>
            <h6 className='textColor'>Global Operating System for Agtech</h6>
            <p className='mt-4'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual, a small team, or a growing. Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals.</p>
            <p className='mt-4 fw-lighter'>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual.</p>
            <div className='mt-4'>
              <p className='fw-bold textColor m-0'>
                <FontAwesomeIcon icon={faCheck} className='check' />
                Whether you're an individual
              </p>
              <p className='fw-bold textColor m-0'>
                <FontAwesomeIcon icon={faCheck} className='check' />
                Growing enterprise
              </p>
              <p className='fw-bold textColor m-0'>
                <FontAwesomeIcon icon={faCheck} className='check' />
                Plan that aligns perfectly
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs;
