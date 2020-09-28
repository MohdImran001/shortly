import React from 'react';

function DesktopNav() {
    return (
        <nav className="flex flex-row" id="desktop-nav">
            <ul className="flex flex-row space-x-12" id="first-nav">
                <li className="logo -mt-3 font-bold">
                    <a href="#">Shortly</a>
                </li>
                <li className="nav-text-gray">
                    <a href="#">Features</a>
                </li>
                <li className="nav-text-gray">
                    <a href="#">Pricing</a>
                </li>
                <li className="nav-text-gray">
                    <a href="#">Resources</a>
                </li>
            </ul>
            <ul className="flex flex-row ml-auto space-x-12" id="second-nav">
                <li className="nav-text-gray">
                    <a href="#">Login</a>
                </li>
                <li className="btn sign-up rounded-full px-8 py-2 -mt-2">
                    <a href="#">Sign Up</a>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNav;