import express from "express";
import authRouter from "./authRouter";
import contentRouter from "./contentRouter";
import shareRouter from "./shareRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/content", contentRouter);
router.use("/share", shareRouter);

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default router;
