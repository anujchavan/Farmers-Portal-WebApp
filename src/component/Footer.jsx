import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='py-3'>
        <Row>
          <Col className='d-flex justify-content-between'>
            <p className='mb-0 fw-light'>&copy; Copyright 2024. All Rights Reserved by -  ESDS Software Solution Ltd.</p>
            <div className='fw-light'>
              <span className='pe-5'>Terms</span>
              <span className='pe-5'>Privacy</span>
              <span>Support</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer