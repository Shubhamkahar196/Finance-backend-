import { Router } from "express";
import { getAllUsers,updateUserStatus,updateUserRole } from "../controllers/user.controller.js";
import {protect} from '../middlewares/auth.middleware.js'
import {authorize} from '../middlewares/role.middleware.js' 

const router = Router();

router.get("/", protect, authorize("admin"), getAllUsers);

router.put("/:id/role", protect, authorize("admin"), updateUserRole);

router.put("/:id/status", protect, authorize("admin"), updateUserStatus);

export default router;