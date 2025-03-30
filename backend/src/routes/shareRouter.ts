import express, { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ShareLink } from '../model/shareLinkModel';
import { generateHash } from '../utils/generateHash';
import { User } from '../model/userModel';
import { Content } from '../model/contentModel';

const router = express.Router();

// @ts-ignore
router.get('/new', authMiddleware, async (req: Request, res: Response) => {
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

    const hash = generateHash(15);

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
router.delete('/', authMiddleware, async (req: Request, res: Response) => {
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

// @ts-ignore
router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const shareLink = await ShareLink.findOne({
      // @ts-ignore
      userId: req.userId,
    });

    if (!shareLink) {
      return res.status(200).json({
        success: false,
        message: 'Share link not available, Create one',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Share link fetched successfully',
      shareLink: shareLink.hash,
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// @ts-ignore
router.get("/:hash", async (req: Request, res: Response) => {
  try {
    const hash = req.params.hash;
    const shareLink = await ShareLink.findOne({
      hash: hash,
    });

    if (!shareLink) {
      return res.status(404).json({
        success: false,
        message: 'Share link not found',
      });
    }

    const content = await Content.find({
      userId: shareLink.userId,
    })

    const user = await User.findOne({
      _id: shareLink.userId,
    })

    res.status(200).json({
      success: true,
      message: 'Content fetched successfully',
      username: user?.username,   // we know that if the userID exists, the user exists too. but typescript doesn't know.
      content: content,
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default router;