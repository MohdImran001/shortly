import React from 'react';
import './styles/Features.css';

function Features() {
    return (
        <div className="features text-center mt-20 flex flex-col">
            <h1>Advanced Statistics</h1>
            <p className="mt-4 px-8 text-gray-600 sub-heading">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
            <div className="features-boxes flex flex-row mt-32 justify-center">
                <div className="box">
                    <div className="bg-img">
                        <img src="/images/icon-brand-recognition.svg" />
                    </div>
                    <h1>Brand Recognition</h1>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="box">
                    <div className="bg-img">
                        <img src="/images/icon-detailed-records.svg" />
                    </div>
                    <h1>Detailed Records</h1>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.
                    </p>

                </div>
                <div className="box ">
                    <div className="bg-img">
                        <img src="/images/icon-fully-customizable.svg" />
                    </div>

                    <h1>Fully Customizable</h1>
                    <p>
                        Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features;