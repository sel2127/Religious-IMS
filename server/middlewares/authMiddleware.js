import Jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.session.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const deocded = jwt.verify(token, "vTm32V7a8G4jS6mNpR5sU8xZ2cV5mT8j");
        req.adminId = deocded.id;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid tolen" });
    }
};