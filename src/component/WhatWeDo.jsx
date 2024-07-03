import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import farming from '../images/farming.png';
import tractor from '../images/tractor.png';
import Tractor1 from '../images/Tractor1.svg';
import labour from '../images/labour.svg';
import plant from '../images/plant.svg';
import trophy from '../images/trophy.svg';
import platform from '../images/platform.svg';
import project1 from '../images/project1.svg';
import customerSatisfaction1 from '../images/customerSatisfaction1.svg';

const WhatWeDo = () => {
  return (
    <div className='whatWeDo mt-3'>
      <Container className='pb-5 whatWeDoContainer'>
        <Row>
          <Col sm={5} className='d-flex align-items-start'>
            <img src={farming} alt='Farming' className='farmingImage' />
            <h5 className='paragraph p-3'>25 Years of Experience</h5>
          </Col>
          <Col sm={7} className='col-2'>
            <h3 className='m-0'>What We Do</h3>
            <span className='textColor fw-semibold'>Currently we are selling organic food</span>
            <p className='fw-light mt-3' style={{ fontSize: '14px' }}>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals.</p>
            <div>
              <Row className='d-flex align-items-center mt-2'>
                <Col className='d-flex align-items-center'>
                  <img src={tractor} alt='Tractor' className='icon' />
                  <div className='ps-3'>
                    <h5 className='m-0 textColor'>Material Supplies</h5>
                    <p className='m-0 fw-light specialServices'>Aligns perfectly with your goals.</p>
                  </div>
                </Col>
                <Col className='d-flex align-items-center'>
                  <img src={Tractor1} alt='Tractor' className='icon' />
                  <div className='ps-3'>
                    <h5 className='m-0 textColor'>Material Supplies</h5>
                    <p className='m-0 fw-light specialServices'>Aligns perfectly with your goals.</p>
                  </div>
                </Col>
              </Row>
              <Row className='d-flex align-items-center mt-3'>
                <Col className='d-flex align-items-center'>
                  <img src={labour} alt='Tractor' className='icon' />
                  <div className='ps-3'>
                    <h5 className='m-0 textColor'>Agri Consumables</h5>
                    <p className='m-0 fw-light specialServices'>Aligns perfectly with your goals.</p>
                  </div>
                </Col>
                <Col className='d-flex align-items-center'>
                  <img src={plant} alt='Tractor' className='icon' />
                  <div className='ps-3'>
                    <h5 className='m-0 textColor'>Agri Consumables</h5>
                    <p className='m-0 fw-light specialServices'>Aligns perfectly with your goals.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className='numbers'>
          <Col className='goodies me-3'>
            <div className='d-flex'>
              <img src={customerSatisfaction1} alt='Happy Customers' className='achievements' />
              <h1 className='ps-1 m-0'>250</h1>
            </div>
            <p className='m-0'>Happy Customers</p>
          </Col>

          <Col className='goodies me-3'>
            <div className='d-flex'>
              <img src={project1} alt='Happy Customers' className='achievements' />
              <h1 className='ps-1 m-0'>350</h1>
            </div>
            <p className='m-0'>Projects Done</p>
          </Col>
          <Col className='goodies me-3'>
            <div className='d-flex'>
              <img src={platform} alt='Happy Customers' className='achievements' />
              <h1 className='ps-1 m-0'>250</h1>
            </div>
            <p className='m-0'>Technology Types</p>
          </Col>

          <Col className='goodies'>
            <div className='d-flex'>
              <img src={trophy} alt='Happy Customers' className='achievements' />
              <h1 className='ps-1 m-0'>350</h1>
            </div>
            <p className='m-0'>Awards & Features</p>
          </Col>
        </Row>

      </Container>
    </div >
  )
}

export default WhatWeDo;
