import React from 'react'
import { Container } from 'react-bootstrap'
import work1 from '../images/work1.svg'
import work2 from '../images/work2.svg'
import work3 from '../images/work3.svg'
import work4 from '../images/work4.svg'
import curveLine from '../images/curveline.svg'

const Work = () => {
  return (
    <div>
      <Container className='my-5 d-flex flex-column align-items-center'>
        <h3 className='m-0'>How It Works</h3>
        <span className='textColor'>Our Working Process</span>
        <p className='mt-4 fw-light' style={{ fontSize: '14px', textAlign: 'center', padding: '0px 100px' }}>Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals. Whether you're an individual, a small team, or a growing. Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals.</p>

        <div className='mt-1 d-flex justify-content-center align-items-center z-1 '>
          <img src={curveLine} alt='Curve Line' className='curveLine' />
          <div className='workTitle'>
            <img src={work1} alt='Work' className='workImage' />
            <h3 className='m-0 imageNumber'>1</h3>
          </div>
          <div className='workTitle'>
            <img src={work2} alt='Work' className='workImage' />
            <h3 className='m-0 imageNumber'>2</h3>
          </div>
          <div className='workTitle'>
            <img src={work3} alt='Work' className='workImage3 workImage' />
            <h3 className='m-0 imageNumber'>3</h3>
          </div>
          <div className='workTitle'>
            <img src={work4} alt='Work' className='workImage' />
            <h3 className='m-0 imageNumber'>4</h3>
          </div>
        </div>

        <div className='d-flex'>
          <div className='workDescription text-center'>
            <h3 className='textColor m-0'>Planting</h3>
            <span className='fw-light spanText'>Aligns perfectly with your goals.</span>
          </div>
          <div className='workDescription text-center'>
            <h3 className='textColor m-0'>Fertilizing</h3>
            <span className='fw-light spanText'>Aligns perfectly with your goals.</span>
          </div>
          <div className='workDescription text-center'>
            <h3 className='textColor m-0'>Harvesting</h3>
            <span className='fw-light spanText'>Aligns perfectly with your goals.</span>
          </div>
          <div className='workDescription text-center'>
            <h3 className='textColor m-0'>Watering</h3>
            <span className='fw-light spanText'>Aligns perfectly with your goals.</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work;
