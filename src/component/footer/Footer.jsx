import React from 'react'
import './footer.css'
import { icon, facebook, instagram, pinsstrit, twitter } from '../../assets/imports'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className='footer-top'>
                    <div>
                        <img src={icon} alt="Logo" />
                    </div>
                    <div className="lists">
                        <ul>
                            <li className='active'>Home</li>
                            <li>Attorneys</li>
                            <li>Practice Areas</li>
                            <li>About Us</li>
                        </ul>

                        <div className="images">
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                            <img src={twitter} alt="Twitter" />
                            <img src={pinsstrit} alt="Pinstrit" />
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer