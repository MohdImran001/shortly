import React from 'react'

class MobileNav extends React.Component {
    state = {
        isNavOpen: false
    }

    toggleNavBar = () => {
        if (this.state.isNavOpen) {
            this.setState({
                isNavOpen: false
            })
        }
        else {
            this.setState({
                isNavOpen: true
            })
        }
    }

    render() {
        return (
            <nav id="mobile-nav">
                <div className="flex flex-row">
                    <h1 className="logo -mt-3 font-bold">
                        Shortly
                </h1>
                    <p className="ml-auto">
                        <i className="fa fa-bars" aria-hidden="true" id="bar" onClick={this.toggleNavBar}></i>
                    </p>
                </div>

                { this.state.isNavOpen ? <div id="mobile-nav-links" className="text-white text-center ">
                    <ul className="mb-10">
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Resources</a>
                        </li>
                        <li>
                            <hr className="text-gray-200 w-full" />
                        </li>
                        <li>
                            <a href="" id="mobile-login">Login</a>
                        </li>
                        <li className="w-full">
                            <a href="" className="sign-up rounded-full w-full px-24 py-3">Sign Up</a>
                        </li>
                    </ul>
                </div> : null}


            </nav>
        )
    }
}

export default MobileNav;