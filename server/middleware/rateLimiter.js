import rateLimit from "express-rate-limit";

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many contact requests. Please try again after 15 minutes.",
  },
});

export default contactRateLimiter;
