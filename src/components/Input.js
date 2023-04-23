import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

const InputComponent = () => {
  const [urlInput, setUrlInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shortLink, setShortLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!urlInput) {
      toast.error('Missing task!');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput}`);
      const data = await response.json();
      setShortLink(data.result.full_short_link);
      setUrlInput('');
      toast.success('Link shortened successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Shorten a link here..."
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
        disabled={isLoading}
        size="large"
        style={{ marginRight: '10px' }}
      />
      <Button
        type="primary"
        htmlType="submit"
        disabled={isLoading}
        icon={<CopyOutlined />}
        size="large"
      >
        {isLoading ? 'Loading...' : 'Shorten It!'}
      </Button>
      {shortLink && (
        <div style={{ marginTop: '15px' }}>
          <strong>Shortened Link:</strong>
          <br />
          <a href={shortLink} target="_blank" rel="noreferrer">
            {shortLink}
          </a>
        </div>
      )}
    </form>
  );
};

export default InputComponent;
