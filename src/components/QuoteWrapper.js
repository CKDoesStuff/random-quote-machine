import React from 'react';
import './QuoteWrapper.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const Quote = (props) => {
    return (
        <div id='text' className='quote'>
            <FontAwesomeIcon icon={faQuoteLeft} className='fa' /> {props.quote}
        </div>
    );
}

const Author = (props) => {
    return (
        <div id='author' className='author'>
            {'\u2013 ' + props.author}
        </div>
    );
}

const ButtonsContainer = (props) => {

}

class QuoteWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'This is a quote.',
            author: 'Kevin Kruse'
        }
        this.parseURI = this.parseURI.bind(this);
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        let quoteData;
        $.ajax({
            async: false,
            type: 'GET',
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            dataType: 'json',
            success: function(data) {
                quoteData = data.quotes[Math.floor(Math.random() * data.quotes.length)]
            }
        })
        this.setState({
            quote: quoteData.quote,
            author: quoteData.author
        })
    }
    
    parseURI(quote) {
        return encodeURIComponent(quote)
    }
    render() {
        return (
            <div id='quote-box' className='wrapper'>
                <Quote quote={this.state.quote} />
                <Author author={this.state.author} />
                <div className='buttons'>
                    <div className='tweet'>
                        <a id='tweet-quote' rel='noreferrer' href={`https://www.twitter.com/intent/tweet?text=%22${this.parseURI(this.state.quote)}%22%20%2D${this.parseURI(this.state.author)}`} target='_blank'>
                            <div className='link'>Tweet</div>
                        </a>
                    </div>
                    <div id='new-quote' className='new-quote' onClick={this.getQuote}>
                        <p>New Quote</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteWrapper;