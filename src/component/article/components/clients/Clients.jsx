import React from 'react'
import './clients.css'
import { arrowLeft, arrowRight, devon, jane, robert, vector } from '../../../../assets/imports'
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper";

const Client = ({ image, name }) => (
    <>
        <div className="box">
            <img src={image} alt="Profile" />
            <p className='name'>{name}</p>
            <p className='job'>Ceo of Hunt</p>
            <p className='description'>
                Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer. sit
                aliqua dolor do amet sint. Velit officia
            </p>
            <div className='number'>
                <img src={vector} alt="99" />
            </div>
        </div>
    </>
)

function Clients() {
    const swiper = useSwiper();
    const x = [
        {
            image: jane,
            name: "Jane Cooper",
        },
        {
            image: devon,
            name: "Devon Lane",
        },
        {
            image: robert,
            name: "Robert Fox",
        },
        {
            image: jane,
            name: "Jane Cooper",
        },
        {
            image: devon,
            name: "Devon Lane",
        },
        {
            image: robert,
            name: "Robert Fox",
        },
    ]

    return (
        <div className='clients'>
            <div className="clients-container">
                <div className="clients-header">
                    <p>
                        What says our<br />
                        happy Clients
                    </p>
                    <div className='clients-button'>
                        <button type='button' id='left' aria-label='Left'>
                            <img src={arrowLeft} alt="Left" />
                        </button>
                        <button type='button' id='right' aria-label='Right'>
                            <img src={arrowRight} alt="Right" />
                        </button>
                    </div>
                </div>
                <div className="clients-slide">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={{ nextEl: '#right', prevEl: '#left', }}
                        modules={[Navigation]}
                        className='mySwiper'
                        breakpoints={{
                            1140: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            360: {
                                slidesPerView: 1,
                            }
                        }}>
                        {
                            x.map((item, index) => (
                                <SwiperSlide><Client image={item.image} name={item.name} key={index + 1} /></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Clients