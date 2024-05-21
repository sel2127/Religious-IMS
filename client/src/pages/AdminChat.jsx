// // AdminChat.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';

// const AdminChat = ({ userId }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     const socket = io('http://localhost:5000', {
//       withCredentials: true, // Ensure cookies are sent with the socket connection
//     });

//     socket.on('connect', () => {
//       console.log('Connected to chat server');
//     });

//     socket.on('chat history', (history) => {
//       setMessages(history);
//     });

//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [userId]);

//   const handleMessageSubmit = async () => {
//     try {
//       await axios.post('http://localhost:5000/chat/send', {
//         content: input,
//         sender: 'admin',
//       });
//       setInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-grow overflow-y-scroll bg-gray-100">
//         {messages.map((message, index) => (
//           <div key={index} className="flex flex-col items-start my-2">
//             <div className="rounded-lg px-4 py-2 bg-white shadow">
//               <p className="text-gray-800">{message.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 bg-white">
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow h-10 px-4 border border-gray-300 rounded-full focus:outline-none"
//           />
//           <button
//             onClick={handleMessageSubmit}
//             className="ml-4 px-6 py-2 font-semibold text-white bg-blue-500 rounded-full focus:outline-none"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminChat;
