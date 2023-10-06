import React from 'react';
import './QuoteWrapper.css'

class QuoteWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'Lorem Ipsum',
            author: 'Michael Bay'
        }
    }

    render() {
        return (
            <div id='quote-box' className='wrapper'>
                <div className='quote'>
                    <i className='fa fa-quote-left'></i><h1>hello</h1>
                </div>
            </div>
        )
    }
}

export default QuoteWrapper;