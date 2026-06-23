import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name must be 100 characters or fewer"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: [254, "Email must be 254 characters or fewer"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"],
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject must be 200 characters or fewer"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [5000, "Message must be 5000 characters or fewer"],
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    isResponded: {
      type: Boolean,
      default: false,
    },

    isSpam: {
      type: Boolean,
      default: false,
    },

    // Excluded from query results; used for rate limiting only
    ipHash: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

// Rate limit lookups
messageSchema.index({ ipHash: 1, createdAt: -1 });

// Inbox sorting
messageSchema.index({ createdAt: -1 });

// Inbox filters
messageSchema.index({ isRead: 1, createdAt: -1 });
messageSchema.index({ isSpam: 1, createdAt: -1 });
messageSchema.index({ isResponded: 1, createdAt: -1 });

export default model("Message", messageSchema);
