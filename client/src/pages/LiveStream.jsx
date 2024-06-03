import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import ReactPlayer from 'react-player';

function App() {
  const videoRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Connect to the WebSocket server
    socketRef.current = io('http://localhost:5000/live');
    console.log('WebSocket connection established');

    socketRef.current.on('connect', () => {
        console.log('WebSocket connected');
      });

    // Handle the live stream data
    socketRef.current.on('stream', (data) => {
      console.log('Received stream data');
      if (videoRef.current) {
        videoRef.current.src = `data:video/x-matroska;base64,${data.toString('base64')}`;
        videoRef.current.play();
      }
    });

    return () => {
      // Clean up the WebSocket connection
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <ReactPlayer
        ref={videoRef}
        url=""
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;