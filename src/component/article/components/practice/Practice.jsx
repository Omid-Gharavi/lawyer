import React from 'react'
import './practice.css'
import { pic1, pic2, pic3, pic4, pic5, pic6 } from '../../../../assets/imports'

function Practice() {
    const x = [
        {
            image: pic1,
            title: "BUSINESS LAW",
            class: "chert"
        },
        {
            image: pic2,
            title: "Partnership LAW",
        },
        {
            image: pic3,
            title: "REAL ESTATE LAW",
        },
        {
            image: pic4,
            title: "BUSINESS LAW",
        },
        {
            image: pic5,
            title: "LANDLORD DISPUTES",
        },
        {
            image: pic6,
            title: "ELDER ABUSE",
        },
    ]

    return (
        <div className='practice'>
            <p>Area of Practices</p>
            <div className='grid'>
                {
                    x.map((item, index) => (
                        <div className={item.class}>
                            <img src={item.image} key={index + 1} alt='Pics' />
                            <span key={index + 1}>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Practice