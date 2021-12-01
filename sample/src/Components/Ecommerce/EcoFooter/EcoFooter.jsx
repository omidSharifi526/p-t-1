import React from "react";
import './EcoFooter.scss';

const EcoFooter = () => {
    return (
        <div className='Fooetr-Container'>
            <div className="footerCol">
            <h5>Quick Links</h5>
                <p>Home</p>
                <p>Blog</p>
                <p>Carrer</p>
                <p>Aboute</p>

            </div>
            <div className="footerCol">
                <h5>Support</h5>
                <p>FAQ</p>
                <p>How it Works</p>
                <p>Feature</p>
                <p>Contact</p>
                
                </div>
                <div className="footerCol">
                <h5>Contact Us</h5>
                <p>+8801751978486</p>
                <p>sample@gmail.com</p>
                <p>137/B New Eskaton,Dhaka</p>
                
                </div>
                <div className="footerCol">
                <h5>Follow Us</h5>
                <p>FaceBook</p>
                <p>Instagram</p>
                <p>Linkedin</p>
                <p>Twitter</p>
                
                </div>

                <div className="footer-privacy">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, aliquam

                </div>
            
        </div>
    )
}

export default EcoFooter
