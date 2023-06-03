import React, { useRef, useState } from 'react'
import './header.css'
import './dashboard.css'
import { lawyer, icon, message } from '../../assets/imports'

function Header() {
    const [lines, setLines] = useState(false);
    const inputRef = useRef();
    const Nav = () => (
        <>
            <li><a href='#home'>Home</a></li>
            <li><a href="#attorney">Attorneys</a></li>
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#about">About Us</a></li>
        </>
    )

    return (
        <>
            <header>
                <div className='header'>
                    <div className="header-container">
                        <div className='icon'>
                            <img src={icon} alt="Icon" />
                        </div>
                        <div className="nav">
                            <ul>
                                <Nav />
                            </ul>
                        </div>
                        <div className="contact">
                            <button type='button'>Contact Now</button>
                        </div>
                        <div className="menu" aria-label='Menu' onClick={() => (setLines(!lines))}>
                            {
                                lines ? (
                                    <>
                                        <div className='top'></div>
                                        <div className='middle'></div>
                                        <div className='bottom'></div>
                                    </>
                                ) : (
                                    <>
                                        <div className='top-sec'></div>
                                        <div></div>
                                        <div></div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="header-section">
                        <div className='left'>
                            <div className='paragraph'>
                                <p>You don’t have to</p>
                                <p>Fight them Alone.</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                            </p>
                            <div className='sign-in' onClick={() => {
                                inputRef.current.focus();
                            }}>
                                <input type="text" placeholder='Enter your email address' ref={inputRef} />
                                <img src={message} alt="Email" />
                                <button type='button'>Let's Talk</button>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={lawyer} alt="Lawyer" />
                        </div>
                    </div>
                </div>
            </header>
            {
                lines ?
                    (<>
                        <div className="close" onClick={() => setLines(!lines)}>
                        </div>
                    </>)
                    :
                    (<>
                        <div className="open"></div>
                    </>)
            }
            {
                lines ? (
                    <>
                        <div className='dashboard'>
                            <div className='dashboard-header'>
                                <img src={icon} alt="Logo" />
                            </div>
                            <div className='dashboard-container'>
                                <ul>
                                    <Nav />
                                </ul>
                                <div className="contact-nav">
                                    <button type='button'>Contact Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='dashboard-opened' id='dashboard-close'>
                            <div className='dashboard-header'>
                                <img src={icon} alt="Logo" />
                            </div>
                            <div className='dashboard-container'>
                                <ul>
                                    <Nav />
                                </ul>
                                <div className="contact-nav">
                                    <button type='button'>Contact Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Header