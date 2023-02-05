import express from 'express'
import {
    getUser,
    getUserFollow,
    addRemoveFollow,
} from '../controllers/users.js'

import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get("/:id",verifyToken,getUser);
router.get("/:id",verifyToken,getUserFollow);

router.patch("/:id/:followId",verifyToken,addRemoveFollow)

export default router;