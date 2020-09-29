import React, { useState } from 'react'
import { ShortURL, UrlList } from './';
import './styles/Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { urls: [] };

        this.saveURLsToStorage = this.saveURLsToStorage.bind(this);
    }

    saveURLsToStorage(urlObj) {
        let urlsList = this.state.urls;
        urlsList.push(urlObj);
        console.log(urlsList);

        //check for duplicates
        //save to state and local storage
        this.setState({
            urls: urlsList
        })
    }

    render() {
        return (
            <div className="content mt-48 flex flex-column">
                <ShortURL saveURL={(urlObj) => this.saveURLsToStorage(urlObj)} />
                <UrlList urls={this.state.urls.length > 0 ? this.state.urls : []} />
            </div>
        )
    }
}

export default Content