import React from 'react';
import './styles/urls.css';

class UrlList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }

        this.copyLink = this.copyLink.bind(this);
    }

    copyLink(url, id) {
        navigator.clipboard.writeText(url)
            .then(() => {

                this.setState({
                    id: id
                })

            }, function () {
                alert("Your browser is not giving us permission to copy the url, Go Ahead and copy it manually");
            });
    }

    render() {
        return (
            <div className="urlList mt-32">
                <ul>
                    {this.props.urls.map((obj) => {
                        return (
                            <li key={obj.id} className="flex flex-row bg-white px-8 pt-4 pb-4 rounded-md mt-4">
                                <p className="link mt-1">
                                    {obj.url}
                                </p>
                                <p className="flex flex-row mt-1 short-link">
                                    <p>
                                        <a className="text-cyan" href="{obj.shortURL}"> {obj.shortURL} </a>
                                    </p>
                                    <button className={`text-white -mt-2 text-small copy-btn py-2 px-4 rounded-md ml-4 ${this.state.id === obj.id ? 'bg-violet' : ''}`} onClick={() => this.copyLink(obj.shortURL, obj.id)}>
                                        {this.state.id === obj.id ? 'Copied !' : 'Copy'}
                                    </button>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}

export default UrlList