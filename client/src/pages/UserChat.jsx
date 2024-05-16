import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const UserChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch chat history from the backend on component mount
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/chat/history');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const handleMessageSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/chat/send', { content: input, sender: 'user' });
      setInput(''); // Clear input field
      fetchChatHistory(); // Refresh chat history
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>User Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleMessageSubmit}>Send</button>
    </div>
  );
};

export default UserChat;
