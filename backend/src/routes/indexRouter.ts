import express from "express";
import authRouter from "./authRouter";
import contentRouter from "./contentRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/content", contentRouter);

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default router;
