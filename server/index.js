/*require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  message: "Too many requests from this IP, please try again later",
});

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "https://yourportfolio.com"], // Add your production URL
    methods: ["POST"],
  })
);
app.use(express.json());
app.use("/send", limiter); // Apply rate limiting only to email endpoint

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "running",
    service: "portfolio-backend",
    version: "1.0.0",
  });
});

// Email endpoint with Gmail-specific settings
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Enhanced validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      error: "All fields are required and cannot be empty",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2563eb;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
            ${message.replace(/\n/g, "<br>")}
          </p>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    res.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);

    // Special handling for Gmail errors
    let errorMessage = "Failed to send message";
    if (error.code === "EAUTH") {
      errorMessage = "Authentication failed. Please check email configuration.";
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Connection to email server failed.";
    }

    res.status(500).json({
      error: errorMessage,
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service configured for: ${process.env.EMAIL_USER}`);
  console.log(
    `CORS allowed for: ${process.env.FRONTEND_URL || "http://localhost:3000"}`
  );
}); */
