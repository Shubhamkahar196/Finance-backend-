
import { Router } from "express";
import { createRecord,filterRecords,deleteRecord,getSingleRecord,updateRecord } from "../controllers/record.controller.js";
import {authorize} from '../middlewares/role.middleware.js'
import {protect} from '../middlewares/auth.middleware.js'


const router = Router();

router.post("/",protect,authorize,createRecord);
router.get("/filter",protect,filterRecords);
router.get("/:id",protect,getSingleRecord);
router.put("/:id",protect,authorize("admin"),updateRecord)
router.delete("/:id",protect,authorize("admin"),deleteRecord);

export default router;
