import React from 'react';
import './styles/Footer.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer pt-20 pb-20 flex ">
                <h1 className="text-white  -mt-4">
                    Shortly
                </h1>
                <div className="footer-links  flex flex-wrap">

                    <div className="footer-col">
                        <h3 className="text-white  font-bold">Features</h3>
                        <ul className="mt-6">
                            <li>
                                Link Shortening
                        </li>
                            <li>
                                Branded Links
                        </li>
                            <li>
                                Analytics
                        </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-white font-bold">Resources</h3>
                        <ul className="mt-6">
                            <li>
                                Blog
                        </li>
                            <li>
                                Developers
                        </li>
                            <li>
                                Support
                        </li>
                        </ul>
                    </div>


                    <div className="footer-col">
                        <h3 className="text-white font-bold">Company</h3>
                        <ul className="mt-6">
                            <li>
                                About
                        </li>
                            <li>
                                Our Team
                        </li>
                            <li>
                                Careers
                        </li>
                            <li>
                                Contact
                        </li>
                        </ul>
                    </div>

                    <div className="footer-col -mt-3">
                        <ul className="flex flex-row space-x-8">
                            <li>
                                <img src="/images/icon-facebook.svg" alt="facebook" />
                            </li>
                            <li>
                                <img src="/images/icon-twitter.svg" alt="twitter" />
                            </li>
                            <li>
                                <img src="/images/icon-pinterest.svg" alt="pinterest" />
                            </li>
                            <li>
                                <img src="/images/icon-instagram.svg" alt="instagram" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;