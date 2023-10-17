import React, { useState } from 'react'
import './faq.css'

const Discription = ({ title }) => {
    const [open, setOpen] = useState(false);

    return (<>
        <div className='gray-line'></div>
        <div className="dis-container">
            <p>{title}</p>
            {
                open ?
                    (
                        <div type='button' className='moved' onClick={() => setOpen(!open)}></div>
                    ) :
                    (
                        <div type='button' onClick={() => setOpen(!open)}></div>
                    )
            }
        </div>
        {/* {
            open ?
                (
                    <div className="test-open">
                        <div className='explaination '>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </div>
                    </div>
                )
                :
                (
                    <div className="test-close">
                        <div className='explaination'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </div>
                    </div>
                )
        } */}
        <div className={open ? 'test-open' : 'test-close'}>
            <div className='explaination '>
                Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exer. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </div>
        </div>
    </>)
}

function Faq() {
    const x = [
        {
            title: "How much is my case worth?",
        },
        {
            title: "What should I do right after car accidect",
        },
        {
            title: "How much is my case worth?",
        },
    ]

    return (
        <div className='faq'>
            <div className="faq-container">
                <div className="left-side">
                    <p>FAQ</p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit<br className='real' />
                        aliqua dolor do amet sint.
                    </p>
                </div>
                <div className="right-side">
                    <p>
                        Do I need a personal injury report?
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit<br className='real' />
                        aliqua dolor do amet sint. Velit officia consequatduis<br className='real' />
                        enim velit mollit Exer. Amet minim mollit non deserunt<br className='real' />
                        ullamco est sit aliqua dolor do amet sint. Velit<br className='real' />
                        officia consequatduis enim velit mollit Exer.
                    </p>
                    <div className="discription">
                        {
                            x.map((item, index) => (
                                <>
                                    <Discription title={item.title} key={index + 1} />
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq