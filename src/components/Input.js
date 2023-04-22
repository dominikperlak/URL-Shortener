import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaRegCopy } from 'react-icons/fa';
import { shortenUrl } from './bitlyurlapi';

const Input = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const link = await shortenUrl(url);
      setShortenedUrl(link);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className='my-3'>
        <Form.Group controlId='formUrl'>
          <Form.Control
            type='text'
            placeholder='Enter URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!url || isLoading}>
          {isLoading ? 'Shortening...' : 'Shorten'}
        </Button>
      </Form>

      {shortenedUrl && (
        <div className='result-container'>
          <a href={shortenedUrl} target='_blank' rel='noreferrer'>
            {shortenedUrl}
          </a>
          <Button variant='outline-secondary' onClick={handleCopy}>
            <FaRegCopy />
          </Button>
        </div>
      )}
    </>
  );
};

export default Input;
