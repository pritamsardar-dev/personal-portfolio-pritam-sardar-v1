import Message from "../models/message.model.js";
import { sendAutoReplyEmail } from "../services/email.services.js";
import { extractClientIp, hashIp } from "../utils/ipHash.js";

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX ?? 3);
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 86400000);

// Throws a 429 error if the IP has exceeded the allowed message count within the window
const enforceRateLimit = async (ipHash) => {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  const count = await Message.countDocuments({
    ipHash,
    createdAt: { $gte: windowStart },
  });

  if (count >= RATE_LIMIT_MAX) {
    const err = new Error(
      `To prevent spam, a maximum of ${RATE_LIMIT_MAX} messages can be sent per 24 hours. Please try again later.`,
    );

    err.statusCode = 429;

    throw err;
  }
};

// Trims and normalizes contact form fields before processing
const sanitiseBody = ({ name, email, subject, message }) => ({
  name: String(name ?? "").trim(),

  email: String(email ?? "")
    .trim()
    .toLowerCase(),

  subject: String(subject ?? "").trim(),

  message: String(message ?? "").trim(),
});

export const createMessage = async (req, res) => {
  try {
    const rawIp = extractClientIp(req);
    const ipHash = hashIp(rawIp);

    await enforceRateLimit(ipHash);

    const { name, email, subject, message } = sanitiseBody(req.body);

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Please review the provided details and ensure all required fields are correctly filled before submitting again.",
      });
    }

    const saved = await Message.create({
      name,
      email,
      subject,
      message,

      isRead: false,
      isResponded: false,
      isSpam: false,

      ipHash,
    });

    // Fire and forget — auto-reply failure should not block the response
    sendAutoReplyEmail({ to: email, name, subject, message }).catch((emailErr) => {
      console.error("[message.controller] Auto-reply email failed:", emailErr?.message ?? emailErr);
    });

    return res.status(201).json({
      success: true,
      message:
        "Message received successfully. If the email address is reachable, I will get back to you as soon as possible. Thank you for reaching out.",

      data: {
        id: saved._id,
      },
    });
  } catch (err) {
    // Custom errors (e.g. rate limit)
    if (err.statusCode) {
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });
    }

    // Mongoose validation errors
    if (err.name === "ValidationError") {
      const first = Object.values(err.errors)[0]?.message ?? "Validation failed.";

      return res.status(400).json({
        success: false,
        message: first,
      });
    }

    console.error("[message.controller] Unexpected error:", err);

    return res.status(500).json({
      success: false,
      message:
        "We were unable to process your request at this time. Please try again later.",
    });
  }
};