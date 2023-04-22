import { useState } from 'react';
import { shortenUrl } from '../components/tinyurlapi';

const Input = ({ onUrlShorten, shortenedUrl }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await shortenUrl(url);
      onUrlShorten(result);
      setError('');
    } catch (error) {
      setError('Something went wrong, please try again.');
    }
    setIsLoading(false);
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter a URL to shorten:</label>
        <div className="input-group mb-3">
          <input
            type="url"
            className="form-control"
            id="url"
            aria-describedby="button-addon2"
            placeholder="https://example.com"
            value={url}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-primary"
            type="submit"
            id="button-addon2"
            disabled={isLoading || url === ''}
          >
            {isLoading ? 'Loading...' : 'Shorten'}
          </button>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {shortenedUrl && (
          <div className="alert alert-success">
            Your shortened URL is:{' '}
            <a href={shortenedUrl} target="_blank" rel="noreferrer">
              {shortenedUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default Input;
