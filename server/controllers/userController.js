import Users from "../models/UserModel.js";


export const getUsers = async (req, res) => {
    try {
      const users = await Users.findAll();
      console.log(users)
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
export const getUserById = (req, res) => {
    
}
export const createUser = (req, res) => {
    
}
export const updateUser = (req, res) => {
    
}
export const deleteUser = (req, res) => {
    
}