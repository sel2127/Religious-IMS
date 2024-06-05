import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Box, Button, TextField, Typography } from '@mui/material';

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('adminChatMessages');
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
      localStorage.setItem('adminChatMessages', JSON.stringify(messages));
    });

    newSocket.on('new message', (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];
        localStorage.setItem('adminChatMessages', JSON.stringify(updatedMessages));
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
      const message = { content: input, sender: 'admin' };
      console.log('Sending message:', message);
      socket.emit('send message', message);
      setInput('');
    } else {
      console.error('Socket is not initialized');
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={1} overflow="auto" bgcolor="gray.100" p={2}>
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={message.sender === 'admin' ? 'flex-end' : 'flex-start'}
            my={1}
          >
            <Box
              bgcolor={message.sender === 'admin' ? 'blue.200' : 'white'}
              p={2}
              borderRadius={8}
              boxShadow={2}
            >
              <Typography>{message.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box p={2} bgcolor="white" display="flex">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          variant="outlined"
          fullWidth
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default AdminChat;
