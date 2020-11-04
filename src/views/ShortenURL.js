import React from 'react'
import './styles/ShortURL.css'

const baseURL = 'https://api-ssl.bitly.com/v4/shorten';

class ShortURL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            error: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.shortURL = this.shortURL.bind(this);
    }

    handleChange(e) {
        this.setState({
            url: e.target.value,
            error: false,
            errorMsg: '',
            shortening: false
        })
    }

    async shortURL() {
        if (this.state.url.length > 0) {
            this.setState({
                shortening: true
            })
            try {
                const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer 69fec662f3c2734f7bb33f924bb660c804ff01ed"
                    },
                    body: JSON.stringify({
                        "long_url": this.state.url,
                        "domain": "bit.ly",
                    })
                });
                if ([201, 200].includes(res.status)) {
                    const { id, link, long_url } = await res.json();
                    const urlObj = {
                        id: id.split('/')[1],
                        shortURL: link,
                        url: long_url
                    }
                    this.setState({
                        shortening: false
                    })
                    this.props.saveURL(urlObj);
                }
            }
            catch (err) {
                console.log(err);
                this.setState({
                    error: true,
                    errorMsg: 'An error occurred, make sure that the url is correct !'
                })
            }
        }
        else {
            this.setState({
                error: true,
                errorMsg: 'Please enter a url !'
            })
        }
    }

    render() {
        return (
            <div className="short-url text-center rounded-lg flex flex-row pt-10 lg:space-x-8  pl-6 pr-6">
                <div className="w-3/4 input-box">
                    <input type="text" placeholder="Shorten a link here..." className={`w-full p-4 rounded-lg ${this.state.error ? "error" : ""} `} onChange={this.handleChange} />
                    <br />
                    {this.state.error ? <p className="error-text text-sm italic text-left mt-2"> {this.state.errorMsg} </p> : null}

                </div>
                <div className="w-1/4 btn-box">
                    <button className="w-full text-white btn py-4 rounded-lg" onClick={this.shortURL}>{this.state.shortening ? 'Shortening...' : 'Shorten It!'}</button>
                </div>
            </div>
        )
    }
}

export default ShortURL