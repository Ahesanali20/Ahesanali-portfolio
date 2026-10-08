import { Router } from "express";

import { submitContact } from "../controllers/contactController.js";
import contactValidation from "../middleware/contactValidation.js";
import contactRateLimiter from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", contactRateLimiter, contactValidation, submitContact);

export default router;
