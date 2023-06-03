import React from 'react'
import './gifts.css'
import { gift } from '../../../../assets/imports'

function Gift({ title }) {
    return (
        <>
            <div className='gifts'>
                <div className="gift-image">
                    <img src={gift} alt="Gift" />
                </div>
                <p>{title}</p>
                <p>
                    Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.
                </p>
                <button type='button'>Read More</button>
            </div>
        </>
    )
}

function Gifts() {
    const x = [
        {
            title: "98% Success Rate",
        },
        {
            title: "100% Success Rate"
        },
        {
            title: "100% Success Rate"
        },
    ]
    return (
        <div className='gift'>
            <div className="gift-container">
                <p>Why Choose us?</p>
                <div className="gifts-container">
                    {
                        x.map((item, index) => (
                            <Gift title={item.title} key={index + 1} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gifts