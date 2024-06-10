import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { sendPasswordResetCode } from "./passwordRecoveryController.js";
import { sendEmail } from "./passwordRecoveryController.js";
import otpGenerator from "otp-generator";

const OTP_EXPIRATION_TIME = 60 * 1000; // OTP expiration time in milliseconds (e.g., 5 minutes)
export const getUsers = [
isAuthenticated,


async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
]

export const getUserById = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from isAuthenticated middleware
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record with hashed password
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    // Return success message and user details as JSON
    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming user ID is retrieved from JWT
    const updates = req.body; // Updated user data

    const user = await User.findByPk(userId);
    if (user) {
      await user.update(updates);
      // 'user' now contains the updated document
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully!', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUser = (req, res) => {
  // Implement logic to delete user
};

export const loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Find the user with the provided phone number
    const user = await User.findOne({ where: { phone } });

    // Check if user exists with the provided phone number
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // If the provided credentials are valid, generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7h',
    });



    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict"

    });

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }

};

export const getUserInfo = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error getting user info:", error);
    res.status(500).json({ message: "Server error" });
  }
};
 
export const logoutUser = async (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.clearCookie('accessToken'); // Clear the access token cookie
  res.json({ message: 'Logout successful' });
};

export const updatePassword = async (req, res) => {

  const { userId, newPassword } = req.body; // Access the userId and newPassword directly

  // Find the user by userId
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Hash the new password before updating the user
  const hashedPassword = await bcrypt.hash(newPassword, 10); // Adjust cost factor as needed
  console.log("Generated hashedPassword:", hashedPassword);

  // Update the user's password with the hashed value
  user.password = hashedPassword;
  try {
    await user.save();
    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};



let OTP_STATE = {};
let EMAIL="";
export async function generateOTP(req, res) {
  console.log('generateOTP function called');

  const { email } = req.body;
  const user = await User.findOne({ email });
  EMAIL= user.email;
  console.log('Current OTP state:', OTP_STATE);

  // Check if an OTP has been generated recently
  if (OTP_STATE.code && OTP_STATE.timestamp) {
    const currentTime = Date.now();
    const timeSinceLastOTP = currentTime - OTP_STATE.timestamp;

    console.log(`Current time: ${currentTime}`);
    console.log(`Last OTP timestamp: ${OTP_STATE.timestamp}`);
    console.log(`Time since last OTP: ${timeSinceLastOTP}ms`);

    if (timeSinceLastOTP < OTP_EXPIRATION_TIME) {
      const timeRemaining = Math.ceil((OTP_EXPIRATION_TIME - timeSinceLastOTP) / 1000);
      console.log(`Please wait ${timeRemaining} seconds before requesting a new OTP`);
      return res.status(429).json({ message: `Please wait ${timeRemaining} seconds before requesting a new OTP` });
    }
  }

  const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  // Store the OTP and the timestamp
  OTP_STATE = { code: otp, timestamp: Date.now() };

  console.log(`Generated OTP: ${otp}`);
  console.log(`OTP timestamp: ${OTP_STATE.timestamp}`);

  // Send the OTP to the user (e.g., via email)
  const sendingOtp = await sendPasswordResetCode(
    user.email,
    user.username,
    OTP_STATE.code
  );

  await sendEmail(sendingOtp);

  res.status(201).send({ msg: "A reset password code is sent to your email!" });
}

/** POST: http://localhost:5000/api/verifyOTP */
export async function verifyOTP(req, res) {
  const { code } = req.body;

  // Ensure OTP_STATE exists and is an object with code and timestamp
  if (OTP_STATE && OTP_STATE.code) {
    if (parseInt(OTP_STATE.code) === parseInt(code)) {
      OTP_STATE = {}; // reset the OTP_STATE
      req.app.locals.resetSession = true; // start session for reset password
      return res.status(201).send({ msg: "Verified Successfully!" });
    }
  }
  
  return res.status(400).send({ error: "Invalid OTP" });
}

/** GET: http://localhost:5000/api/createResetSession */
export async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    return res.status(201).send({ flag: req.app.locals.resetSession });
  }
  return res.status(440).send({ error: "Session expired!" });
}

/** PUT: http://localhost:5000/api/resetPassword */
export async function resetPassword(req, res) {
  const email= EMAIL;
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "Session expired!" });
    }

    const { password } = req.body;

    const user = await UserModel.findOne({ email: email});
    if (!user) {
      return res.status(404).send({ error: "Username not Found" });
    }
    const salt = await bcrypt.genSalt(10); // Generate a random salt

    const hashedPassword = await bcrypt.hash(password, salt);

    await UserModel.updateOne(
      { username: user.username },
      { password: hashedPassword }
    );

    req.app.locals.resetSession = false; // reset session
    EMAIL=null
    return res
      .status(201)
      .send({ msg: "You have successfully resetted your password...!" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
}