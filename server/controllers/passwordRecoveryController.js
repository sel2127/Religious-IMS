import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const createMailTransporter = async () => {
  console.log("Creating mail transporter...");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true, // Enable logging
    debug: true,  // Enable debug output
  });

  // Verify the connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.error("SMTP configuration error:", error);
    } else {
      console.log("SMTP configuration is correct:", success);
    }
  });

  return transporter;
};


export const sendPasswordResetCode = async (email, username, otp) => {
  const mailOptions = {
    from: '"RSMS" <' + process.env.SMTP_USER + '>',
    to: email,
    subject: "Here is the reset code verify it!",
    html: `<p>Hello ${username},</p>
         <p>Your reset code is: <strong>${otp}</strong></p>
         <p>Please verify your code by clicking this link: <a href="http://${process.env.CLIENT_URL}/account/confirm">http://${process.env.CLIENT_URL}/account/confirm</a></p>`,
  };
  return mailOptions;
};


export const sendEmail = async (email) => {
  const transporter = await createMailTransporter();
  try {
    await transporter.sendMail(email);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};