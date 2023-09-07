import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='form'>
        <div className='image-d'>
            <img src="./assets/call.jpg" alt="" className='img-c' />
        </div>
        <div className='form-d'>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Message</label>
                <input type="email" className="form-control" id="exampleInputEmail2" required aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact