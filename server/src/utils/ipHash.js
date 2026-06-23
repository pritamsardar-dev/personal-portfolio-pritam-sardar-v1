import crypto from "crypto";

// Extracts the real client IP, accounting for proxies via x-forwarded-for
export const extractClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return req.socket?.remoteAddress ?? "unknown";
};

// Hashes the IP with HMAC before storing, so raw addresses are never persisted
export const hashIp = (ip) => {
  const salt = process.env.IP_HASH_SALT ?? "123dq456wfwqf";

  return crypto.createHmac("sha256", salt).update(ip).digest("hex");
};