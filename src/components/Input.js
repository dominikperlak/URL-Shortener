import React from 'react';
import { shortenUrl } from '../utils';
import { addUrl } from '../firebase';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      shortUrl: ''
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    shortenUrl(this.state.url).then(shortUrl => {
      this.setState({ shortUrl });
      firebase
        .firestore()
        .collection('urls')
        .add({
          url: this.state.url,
          shortUrl: shortUrl,
          createdAt: new Date()
        })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch(error => {
          console.error('Error writing document: ', error);
        });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.url}
              onChange={this.handleUrlChange}
            />
          </label>
          <button type="submit">Shorten</button>
        </form>
        {this.state.shortUrl && (
          <p>
            Short URL:{' '}
            <a href={this.state.shortUrl} target="_blank" rel="noreferrer">
              {this.state.shortUrl}
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default Input;
