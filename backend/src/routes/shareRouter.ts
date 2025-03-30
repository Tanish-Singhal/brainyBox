import express, { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ShareLink } from '../model/shareLinkModel';
import { generateHash } from '../utils/generateHash';

const router = express.Router();

// @ts-ignore
router.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const existingShareLink = await ShareLink.findOne({
      // @ts-ignore
      userId: req.userId,
    })

    if (existingShareLink) {
      res.status(200).json({
        success: true,
        message: 'Link already exists',
        shareLink: existingShareLink.hash,
      })
      return;
    }

    const hash = generateHash(10);

    const newShareLink = await ShareLink.create({
      hash: hash,
      // @ts-ignore
      userId: req.userId,
    })

    res.status(200).json({
      success: true,
      message: 'Link created successfully',
      shareLink: newShareLink.hash,
    })
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
    return;
  }
})

// @ts-ignore
router.delete('/delete', authMiddleware, async (req: Request, res: Response) => {
  try {
    const deletedLink = await ShareLink.findOneAndDelete({
      // @ts-ignore
      userId: req.userId,
    });

    if (!deletedLink) {
      res.status(404).json({
        success: false,
        message: 'Sharable link not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Sharable link deleted successfully',
    });
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
    return;
  }
});

export default router;