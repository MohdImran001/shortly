import React from 'react';

class UrlList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="urlList mt-32">
                <h1>URL's List</h1>
                {this.props.urls.map((obj, idx) => {
                    return (<p> {obj.shortURL} -- {obj.url} </p>)
                })}
            </div>
        )
    }
}

export default UrlList