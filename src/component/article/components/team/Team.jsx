import React from 'react'
import './team.css'
import { danial, sanfole, cesforila, colleen, haldone, Nik } from '../../../../assets/imports'

const Box = ({ image, title, cases }) => (
    <>
        <div className="box-team">
            <div className='box-container'>
                <div className='profile-team'>
                    <img src={image} alt="" />
                </div>
                <div className='text'>
                    <p>{title}</p>
                    <p>{cases}</p>
                </div>
            </div>
        </div>
    </>
)

function Team() {
    const x = [
        {
            image: danial,
            title: "Danial Def",
            cases: "301 Cases",
        },
        {
            image: sanfole,
            title: "Sanfole",
            cases: "850 Cases",
        },
        {
            image: cesforila,
            title: "Cesforila",
            cases: "470 Cases",
        },
        {
            image: colleen,
            title: "Danial Def",
            cases: "180 Cases",
        },
        {
            image: haldone,
            title: "Haldone",
            cases: "212 Cases",
        },
        {
            image: Nik,
            title: "Nik Jeo",
            cases: "350 Cases",
        },
    ]

    return (
        <div className='team'>
            <div className="team-container">
                <p>Our Team</p>
                <div className="members">
                    {
                        x.map((item, index) => (
                            <>
                                <Box image={item.image} title={item.title} cases={item.cases} key={index + 1} />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Team