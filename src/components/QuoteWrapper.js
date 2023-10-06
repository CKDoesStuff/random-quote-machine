import React from 'react';
import './QuoteWrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class QuoteWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'Life isn’t about getting and having, it’s about giving and being.',
            author: 'Kevin Kruse'
        }
        this.parseURI = this.parseURI.bind(this);
    }
    
    parseURI(quote) {
        return encodeURIComponent(quote)
    }
    render() {
        return (
            <div id='quote-box' className='wrapper'>
                <div id='text' className='quote'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='fa' /> {this.state.quote}
                </div>
                <div id='author' className='author'>
                    { '\u2013 ' + this.state.author}
                </div>
                <div className='buttons'>
                    <div id='tweet-quote' className='tweet'>
                        <a href={`https://www.twitter.com/intent/tweet?text=%22${this.parseURI(this.state.quote)}%22`} target='_blank'><div className='link'>Tweet</div></a>
                    </div>
                    <div id='new-quote' className='new-quote'>

                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteWrapper;