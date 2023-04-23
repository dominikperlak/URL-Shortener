import React, { useState } from 'react';
import { Input as AntInput, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { shortenUrl } from './api';


const Input = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (url === '') {
      setError('Please enter a link to shorten.');
    } else {
      try {
        const response = await shortenUrl(url);
        setShortenedUrl(response.result.short_link);
        onShorten(response.result.short_link);
        setUrl('');
        setError('');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className='input-form'>
      <AntInput
        type='text'
        placeholder='Shorten a link here...'
        value={url}
        onChange={handleChange}
        size='large'
        className='input-field'
        prefix={<LinkOutlined />}
      />
      {error && <p className='error-message'>{error}</p>}
      <Button type='primary' size='large' htmlType='submit'>
        Shorten It!
      </Button>
      {shortenedUrl && (
        <p>
          Shortened URL:{' '}
          <a href={shortenedUrl} target='_blank' rel='noreferrer'>
            {shortenedUrl}
          </a>
        </p>
      )}
      <ToastContainer />
    </form>
  );
};

export default Input;
