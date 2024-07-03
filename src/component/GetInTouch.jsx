import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import getInTouch from '../images/getInTouch.svg'

const GetInTouch = () => {
  return (
    <div className='my-5'>
      <Container className='position-relative contact'>
        <Row>
          <Col sm={5}>
            <img src={getInTouch} alt="Get In Touch" className='call' />
            <h5 className='contactUs'>getintouch@gmail.com</h5>
          </Col>

          <Col sm={7} className='d-flex flex-column justify-content-center' style={{ minHeight: '500px' }}>
            <h3 className='m-0'>Get In Touch</h3>
            <h6 className='textColor pt-1'>123 Main Street, City, State, ZIP</h6>

            <p className='reachUs m-0 pt-3 fw-light'>Feel free to reach out to us anytime at 123 Main Street, City, State, ZIP or getintouch@gmail.com.  We're here to help with any questions or concerns!</p>

            <div className='mt-4'>
              <Form>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="First Name" className='inputText' />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Last Name" className='inputText' />
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col>
                    <Form.Control type="tel" placeholder="Contact Number" className='inputText' />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Email ID" className='inputText' />
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col>
                    <Form.Control as="textarea" rows={3} placeholder="Write Comments" className='inputText' />
                  </Col>
                </Row>
              </Form>
            </div>

            <div className='mt-4 w-100 d-flex'>
              <Button className='p-2 px-3 viewmorebutton1'>View More</Button>
              <Button className='p-2 px-3 viewmorebutton2'>View More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetInTouch;
