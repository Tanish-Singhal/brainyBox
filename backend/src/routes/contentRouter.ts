import express, { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { Content } from '../model/contentModel';
import zod from 'zod';

const router = express.Router();

const contentSchema = zod.object({
  title: zod.string().min(3).max(100),
  link: zod.string().url(),
  tags: zod.array(zod.string().min(1).max(20)).optional(),
  description: zod.string().max(500).optional(),
});

// @ts-ignore
router.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = contentSchema.safeParse(body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.error.errors[0].message,
      });
      return;
    }

    const newContent = await Content.create({
      link: body.link,
      title: body.title,
      description: body.description,
      tags: body.tags,
      // @ts-ignore
      userId: req.userId,
    })

    res.status(200).json({
      success: true,
      message: 'Content saved successfully',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while saving content',
      error: 'Internal Server Error',
    });
    return;
  }
});

// @ts-ignore
router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const contents = await Content.find({
      // @ts-ignore
      userId: req.userId
    }).populate("userId", "name email");

    res.status(200).json({
      success: true,
      contents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while fetching contents',
      error: 'Internal Server Error',
    });
  }
});

// @ts-ignore
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const contentId = req.params.id;

    const deletedContent = await Content.findOneAndDelete({
      _id: contentId,
      // @ts-ignore
      userId: req.userId,
    });

    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        message: 'Content not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Content deleted successfully',
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while deleting content',
      error: 'Internal Server Error',
    });
  }
});

const updatedContentSchema = zod.object({
  title: zod.string().min(3).max(100).optional(),
  link: zod.string().url().optional(),
  tags: zod.array(zod.string().min(1).max(20)).optional(),
  description: zod.string().max(500).optional(),
});

// @ts-ignore
router.put('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const contentId = req.params.id;
    const body = req.body;
    const result = updatedContentSchema.safeParse(body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.error.errors[0].message,
      });
      return;
    }

    const updatedContent = await Content.findOneAndUpdate(
      // @ts-ignore
      { _id: contentId, userId: req.userId },
      { ...body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Content updated successfully',
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while updating content',
      error: 'Internal Server Error',
    });
  }
});

export default router;
