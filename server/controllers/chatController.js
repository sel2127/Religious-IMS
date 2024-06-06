import Chat from '../models/Chat.js';

export const sendMessage = async (req, res) => {
  const userId = req.userId;
  const adminId = req.admin?.id || null;
  const { content, sender } = req.body;

  console.log('userId:', userId); 
  console.log('adminId:', adminId); 

  try {
    const chatMessage = await Chat.create({ userId, adminId, content, sender });
    res.status(201).json(chatMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getChatMessages = async (req, res) => {
  const { userId, adminId } = req.params;

  try {
    const chatMessages = await Chat.findAll({
      where: {
        userId,
        adminId,
      },
      order: [['timestamp', 'ASC']],
    });
    res.status(200).json(chatMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
