import express, { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../model/userModel";
import zod from "zod";

dotenv.config();

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().min(3).max(20),
  email: zod.string().email().min(6).max(30),
  password: zod.string().min(8).max(100),
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.error.errors[0].message,
      });
      return;
    }

    const existingUserByEmail = await User.findOne({
      email: body.email,
    });

    if (existingUserByEmail) {
      res.status(400).json({
        success: false,
        message: "Email is already registered",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await User.create({
      username: body.username,
      email: body.email.toLowerCase(),
      password: hashedPassword,
    });
    const userId = newUser._id;

    const token = jwt.sign({
      userId
    }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while creating account",
      error: "Internal Server Error",
    });
  }
});

const signinSchema = zod.object({
  email: zod.string().email().min(6).max(30),
  password: zod.string().min(8).max(100),
});

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = signinSchema.safeParse(body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.error.errors[0].message,
      });
      return;
    }

    const existingUserByEmail = await User.findOne({
      email: body.email,
    });

    if (!existingUserByEmail) {
      res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const validPassword = await bcrypt.compare(body.password, existingUserByEmail.password);

    if (!validPassword) {
      res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const userId = existingUserByEmail._id;

    const token = jwt.sign({
      userId
    }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",

      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while logging in",
      error: "Internal Server Error",
    });
  }
});

export default router;
