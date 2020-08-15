import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-item">
                <h2>Game Shop</h2>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/shop"><h4>Shop</h4></Link>
                    <Link to="/contact"><h4>Contact</h4></Link>
                </div>
            </div>
            <div className="footer-item">
                <h2>About</h2>
                <div>
                    <a href="https://cesaracer.github.io"><h4>Meet the Founder</h4></a>
                    <Link to="#"><h4>Careers</h4></Link>
                    <Link to="#"><h4>Terms of Service</h4></Link>
                    <Link to="#"><h4>Legal Resources</h4></Link>
                </div>
            </div>
            <div className="footer-item">
                <h2>Our Partners</h2>
                <div>
                    <a href="https://sony.com"><h4>Sony</h4></a>
                    <a href="https://microsoft.com"><h4>Microsoft</h4></a>
                    <a href="https://nintendo.com"><h4>Nintendo</h4></a>
                    <a href="https://amd.com"><h4>AMD</h4></a>
                </div>
                
            </div>
        </div>
    )
}

export default Footer