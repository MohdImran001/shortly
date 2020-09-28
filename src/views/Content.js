import React from 'react'
import { ShortURL } from './'
import './styles/Content.css'

class Content extends React.Component {
    render() {
        return (
            <div className="content mt-48 flex flex-column">
                <ShortURL />
            </div>
        )
    }
}

export default Content