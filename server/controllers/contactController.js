import nodemailer from "nodemailer";

    export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const adminEmail = 'ytselote21@gmail.com';

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'Your Name <your_email_address@example.com>', // Sender information
    to: adminEmail,
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `, // Plain text email content
  };

  try {
    await nodemailer.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
};

