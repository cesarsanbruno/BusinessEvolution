import React, { useEffect } from 'react';
import { Chat } from '@n8n/chat';

const AIChat = () => {
  useEffect(() => {
    const chat = new Chat({
      url: 'https://cesar-ai.app.n8n.cloud/webhook/fd8894bc-c4e0-43bc-82fc-d123174af023/chat',
      container: document.getElementById('chat-container'),
    });

    chat.init();

    return () => {
      chat.destroy();
    };
  }, []);

  return <div id="chat-container" style={{ width: '100%', height: '500px' }} />;
};

export default AIChat; 