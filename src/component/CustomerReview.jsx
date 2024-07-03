import { faQuoteLeft, faQuoteRight, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import person from '../images/person.png'
import person2 from '../images/person2.png'
import profile from '../images/profile.png'

const CustomerReview = () => {
  return (
    <div className='my-5'>
      <Container>
        <Row>

          <Col sm={7} className='pe-5 d-flex flex-column justify-content-center'>
            <h3 className='mb-1'>Our Customer's Review</h3>
            <h6 className='textColor'>What Our Customers Are Saying About Us</h6>

            <div className='mt-4 fw-light' style={{ lineHeight: '2' }}>
              <FontAwesomeIcon icon={faQuoteLeft} className='pe-2 quote' />
              I recently started using the Farmers Portal and it has been a game-changer for me. The interface is user-friendly and provides all the information I need in one place. I can easily access weather updates, market prices, and expert advice. The community forum is also great for connecting with other farmers and sharing tips. Overall, the portal has made managing my farm much more efficient and less stressful. I highly recommend it to any farmer looking to stay informed and connected.
              <FontAwesomeIcon icon={faQuoteRight} className='ps-2 quote' />
            </div>

            <div className='mt-4 d-flex align-items-center'>
              <img src={profile} alt='Profile' />
              <div className='ps-2'>
                <p className='m-0 fw-bold'>Mahesh Salunke</p>
                <p className='m-0' style={{ color: '#FFCA2C' }}>Team Lead</p>
              </div>
            </div>
          </Col>

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

        </Row>
      </Container>
    </div>
  )
}

export default CustomerReview;
