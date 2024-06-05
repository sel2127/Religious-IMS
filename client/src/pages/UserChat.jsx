// UserChat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const UserChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('userChatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const newSocket = io('http://localhost:5000', {
      withCredentials: true,
    });

    newSocket.on('connect', () => {
      console.log('Connected to chat server');
    });

    newSocket.on('chat history', (messages) => {
      setMessages(messages);
      localStorage.setItem('userChatMessages', JSON.stringify(messages));
    });

    newSocket.on('new message', (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];
        localStorage.setItem('userChatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from chat server');
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (socket) {
      const message = { content: input, sender: 'user' };
      console.log('Sending message:', message);
      socket.emit('send message', message);
      setInput('');
    } else {
      console.error('Socket is not initialized');
    }
  };


  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-scroll bg-gray-100 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex my-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-blue-200' : 'bg-white'} shadow`}>
              <p className="text-gray-800">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border rounded p-2"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
