const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies with a size limit of 10MB
app.use(bodyParser.json({ limit: '10mb' }));

// Route to handle email sending
app.post('/send-email', (req, res) => {
    const { email, image } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service provider
        auth: {
            user: 'jyang174@go.pasadena.edu', // Replace with your email
            pass: 'Dzyhl2105@'   // Replace with your email password
        }
    });

    // Define email options
    const mailOptions = {
        from: 'jyang174@go.pasadena.edu',      // Replace with your email
        to: email,
        subject: 'Your Canvas Snapshot',
        text: 'Here is your canvas snapshot.',
        attachments: [
            {
                filename: 'canvas-snapshot.png',
                content: image.split('base64,')[1], // Extract the base64 part of the data URL
                encoding: 'base64'
            }
        ]
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent:', info.response);
        res.send('Email sent successfully!');
    });
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
