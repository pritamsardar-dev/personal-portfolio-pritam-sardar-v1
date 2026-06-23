import Message from "../../models/message.model.js";

const MESSAGES_PER_PAGE = 10;

// Builds a MongoDB query filter based on the active inbox tab
const buildFilter = (filter = "all") => {
  switch (filter) {
  case "unread":
    return { isRead: false, isSpam: false };
  case "read":
    return { isRead: true, isSpam: false };
  case "responded":
    return { isResponded: true, isSpam: false };
  case "spam":
    return { isSpam: true };
  case "all":
  default:
    return { isSpam: false };
  }
};

export const getMessages = async (req, res) => {
  try {
    const filter = req.query.filter ?? "all";
    const page = Math.max(1, parseInt(req.query.page ?? "1", 10));
    const limit = Math.max(1, parseInt(req.query.limit ?? `${MESSAGES_PER_PAGE}`, 10));
    const skip = (page - 1) * limit;

    const query = buildFilter(filter);

    const [messages, total] = await Promise.all([
      Message.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).select("-ipHash"),
      Message.countDocuments(query),
    ]);

    // Fetch per-tab counts for inbox badge display
    const [allCount, unreadCount, readCount, respondedCount, spamCount] = await Promise.all([
      Message.countDocuments({ isSpam: false }),
      Message.countDocuments({ isRead: false, isSpam: false }),
      Message.countDocuments({ isRead: true, isSpam: false }),
      Message.countDocuments({ isResponded: true, isSpam: false }),
      Message.countDocuments({ isSpam: true }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        messages,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasNextPage: skip + limit < total,
          hasPrevPage: page > 1,
        },
        counts: {
          all: allCount,
          unread: unreadCount,
          read: readCount,
          responded: respondedCount,
          spam: spamCount,
        },
      },
    });
  } catch (err) {
    console.error("[message.admin.controller] getMessages error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch messages. Please try again later.",
    });
  }
};

// Fetches a single message and automatically marks it as read on open
export const getMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Message.findByIdAndUpdate(
      id,
      { $set: { isRead: true } },
      { new: true, select: "-ipHash" },
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: message,
    });
  } catch (err) {
    console.error("[message.admin.controller] getMessage error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch the message. Please try again later.",
    });
  }
};

export const updateReadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isRead } = req.body;

    if (typeof isRead !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "`isRead` must be a boolean value.",
      });
    }

    const message = await Message.findByIdAndUpdate(
      id,
      { $set: { isRead } },
      { new: true, select: "-ipHash" },
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Message marked as ${isRead ? "read" : "unread"}.`,
      data: message,
    });
  } catch (err) {
    console.error("[message.admin.controller] updateReadStatus error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update read status. Please try again later.",
    });
  }
};

export const updateSpamStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isSpam } = req.body;

    if (typeof isSpam !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "`isSpam` must be a boolean value.",
      });
    }

    const message = await Message.findByIdAndUpdate(
      id,
      { $set: { isSpam } },
      { new: true, select: "-ipHash" },
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Message ${isSpam ? "marked as spam" : "removed from spam"}.`,
      data: message,
    });
  } catch (err) {
    console.error("[message.admin.controller] updateSpamStatus error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update spam status. Please try again later.",
    });
  }
};

export const updateRespondedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isResponded } = req.body;

    if (typeof isResponded !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "`isResponded` must be a boolean value.",
      });
    }

    const message = await Message.findByIdAndUpdate(
      id,
      { $set: { isResponded } },
      { new: true, select: "-ipHash" },
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Message marked as ${isResponded ? "responded" : "not responded"}.`,
      data: message,
    });
  } catch (err) {
    console.error("[message.admin.controller] updateRespondedStatus error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update responded status. Please try again later.",
    });
  }
};

// Permanently deletes a message by ID
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
    });
  } catch (err) {
    console.error("[message.admin.controller] deleteMessage error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to delete the message. Please try again later.",
    });
  }
};
