import express from "express";
import {
  getSummary,
  getCategoryWise,
  getRecentTransactions,
  getMonthlyTrends,
} from "../controllers/dashboard.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/summary", protect, authorize("admin", "analyst"), getSummary);

router.get("/category",protect,authorize("admin", "analyst"),getCategoryWise);


router.get("/recent",protect,authorize("admin", "analyst"),getRecentTransactions);


router.get("/trends", protect, authorize("admin", "analyst"), getMonthlyTrends);

export default router;
