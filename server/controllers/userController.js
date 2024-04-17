import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
// import { User } from "../models/UserModel.js"

export const userLogin = async (req, res) => {
    const { phone, password } = req.body;

    try {
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(401).json({ message: "Invalid phone number or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid phone number or password" });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" }); // Generate a JWT token
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}