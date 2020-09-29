import React from 'react'
import './styles/ShortURL.css'

const baseURL = 'https://rel.ink/';

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
            error: false
        })
    }

    async shortURL() {
        if (this.state.url.length > 0) {

            const res = await fetch(`${baseURL}api/links/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: this.state.url
                })
            });

            if ([201, 200].includes(res.status)) {
                const { hashid, url } = await res.json();
                const urlObj = {
                    shortURL: `${baseURL}${hashid}`,
                    url: url
                }
                this.props.saveURL(urlObj);
            }

        }
        else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
            <div className="short-url text-center rounded-lg flex flex-row pt-10 lg:space-x-8  pl-6 pr-6">
                <div className="w-3/4 input-box">
                    <input type="text" placeholder="Shorten a link here..." className={`w-full p-4 rounded-lg ${this.state.error ? "error" : ""} `} onChange={this.handleChange} />
                    <br />
                    {this.state.error ? <p className="error-text text-sm italic text-left mt-2">Please add a link</p> : null}

                </div>
                <div className="w-1/4 btn-box">
                    <button className="w-full text-white btn py-4 rounded-lg" onClick={this.shortURL}>Shorten It!</button>
                </div>
            </div>
        )
    }
}

export default ShortURL