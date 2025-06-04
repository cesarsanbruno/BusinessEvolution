import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import React, { useEffect } from 'react';

const AIChat = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://cesar-ai.app.n8n.cloud/webhook/fd8894bc-c4e0-43bc-82fc-d123174af023/chat',
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default AIChat; 