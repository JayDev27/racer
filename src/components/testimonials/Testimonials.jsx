import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='row' id='testimonials'>
        <div className='testimonials'>
            <h3>Testimonials</h3>
                <div className='testimonials-col'>
                    <img src="./assets/user1.jpg" alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat harum doloribus facere libero fugit sequi, tempore eos esse, repudiandae laborum expedita quos. Neque, reprehenderit!</p>
                        <h4>James Hill</h4>
                        <i class="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="far fa-star"></i>
                    </div>
                </div>

            <div className='testimonials-col'>
                <img src="./assets/user2.jpg" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat harum doloribus facere libero fugit sequi, tempore eos esse, repudiandae laborum expedita quos. Neque, reprehenderit!</p>
                    <h4>Cynthia Jane</h4>
                    <i class="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="far fa-star"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials