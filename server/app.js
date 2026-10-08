import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL].filter(
  Boolean,
);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(helmet());

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
  });
});

app.use("/api/contact", contactRoutes);

app.use(errorHandler);

export default app;
