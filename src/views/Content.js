import React from 'react'
import { ShortURL, UrlList, Features } from './';
import './styles/Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { urls: [] };

        this.saveURLsToStorage = this.saveURLsToStorage.bind(this);
    }

    componentDidMount() {
        //fetch urls from local storage and put them in state
        const urls = JSON.parse(localStorage.getItem('urls'));
        if (urls != null && urls.length > 0) {
            this.setState({
                urls: urls
            })
        }
    }

    saveURLsToStorage(urlObj) {
        let el = this.state.urls.find((url) => {
            return (urlObj.id === url.id);
        })
        if (!el) {
            let urlList = this.state.urls;
            urlList.unshift(urlObj);

            //save url in state
            this.setState({
                urls: urlList
            })

            //save url in localStorage
            localStorage.setItem('urls', JSON.stringify(urlList));
        }
    }

    render() {
        return (
            <div className="content mt-48 grid h-auto pb-48">
                <ShortURL saveURL={(urlObj) => this.saveURLsToStorage(urlObj)} />
                <UrlList urls={this.state.urls.length > 0 ? this.state.urls : []} />
                <Features />
            </div>
        )
    }
}

export default Content