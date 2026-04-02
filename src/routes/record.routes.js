
import { Router } from "express";
import { createRecord,getRecords,deleteRecord,getSingleRecord,updateRecord } from "../controllers/record.controller.js";
import {authorize} from '../middlewares/role.middleware.js'
import {protect} from '../middlewares/auth.middleware.js'


const router = Router();

router.post("/",protect,authorize("admin"),createRecord);
router.get("/",protect,getRecords);
router.get("/:id",protect,getSingleRecord);
router.put("/:id",protect,authorize("admin"),updateRecord)
router.delete("/:id",protect,authorize("admin"),deleteRecord);

export default router;
