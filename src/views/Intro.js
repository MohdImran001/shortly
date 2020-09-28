import React from 'react'

function Intro() {
    return (
        <section className="intro flex flex-row">
            <div>
                <h1 className="title dark-violet">
                    More than just
                    shorter links
                </h1>
                <p className="sub-title gray-text mt-3">
                    Build your brand’s recognition and get detailed
                    insights on how your links are performing.
                </p>
                <button className="btn py-3 px-8 rounded-full get-started mt-6">
                    Get Started
                </button>
            </div>

            <div className="ml-auto w-full">
                <img src="./images/illustration-working.svg" className="" alt="Boost Desktop Image" />
            </div>
        </section>
    )
}

export default Intro