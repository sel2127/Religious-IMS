import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const AdminChat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch chat history for a specific user
    fetchChatHistory();
  }, [userId]);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/chat/history?userId=${userId}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const handleMessageSubmit = async () => {
    try {
      await axios.post('/chat/send', { content: input, sender: 'admin' });
      setInput(''); // Clear input field
      fetchChatHistory(); // Refresh chat history
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Admin Chat</h1>
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

export default AdminChat;
