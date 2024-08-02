import React from 'react'
import './newslatter.css'
const NewsLatter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Offer In Your Email</h1>
        <p>Subscribe to our newlatter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>SubScribe</button>
        </div>
    </div>
  )
}

export default NewsLatter