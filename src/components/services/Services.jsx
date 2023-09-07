import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services' id='services'>
        <h3 className='myheader'>Services</h3>
        <div className='service-content'>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>FrontEnd Web Development</p>
            </div>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>BackEnd Web Development</p>
            </div>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>Mobile App Development</p>
            </div>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>Machine Learning</p>
            </div>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>UI/UX Design</p>
            </div>
            <div className='service-box'>
                <img src="./assets/tab.png" alt="" className='service-img' />
                <p className='service-text'>DevOps</p>
            </div>
        </div>
    </div>
  )
}

export default Services