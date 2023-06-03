import React from 'react'
import './article.css'
import { Intro, Gifts, Practice, Clients, Team, Faq, Sub } from './components'

function Article() {
    return (
        <div className='article'>
            <Intro />
            <Gifts />
            <Practice />
            <Clients />
            <Team />
            <Faq />
            <Sub />
        </div>
    )
}

export default Article