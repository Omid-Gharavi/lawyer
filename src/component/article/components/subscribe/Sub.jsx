import React from 'react'
import './sub.css'

function Sub() {
    return (
        <div className='sub'>
            <div className="sub-container">
                <p>Subscribe Our Newsletter</p>
                <div className="form">
                    <input type="text" placeholder='Name:' />
                    <input type="text" placeholder='Enter your Email' />
                    <button type='button'>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Sub