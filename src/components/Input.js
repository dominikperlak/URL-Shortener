import React, { useState } from 'react';
import { Form, Button, Input as AntInput, Row, Col, message } from 'antd';
import { FaRegCopy } from 'react-icons/fa';
import { shortenUrl } from './bitlyurlapi';
import '../antd.css';

const { Search } = AntInput;

const Input = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault(); // dodajemy sprawdzenie, czy e istnieje i posiada metodę preventDefault
    }
    setIsLoading(true);
    try {
      const res = await shortenUrl(url);
      const shortUrl = res;
      setShortenedUrl(shortUrl);
      onShorten(shortUrl); // przekazanie skróconego URL do App.js
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      message.error('There was an error shortening the URL');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    message.success('Copied to clipboard');
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className='my-3'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={18}>
            <Search
              placeholder='Enter URL'
              enterButton='Shorten'
              size='large'
              onSearch={handleSubmit}
              loading={isLoading}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={6}>
            <Button block type='primary' size='large' disabled={!shortenedUrl}>
              <a href={shortenedUrl} target='_blank' rel='noreferrer'>
                {shortenedUrl && 'Go to shortened URL'}
              </a>
            </Button>
          </Col>
        </Row>
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
