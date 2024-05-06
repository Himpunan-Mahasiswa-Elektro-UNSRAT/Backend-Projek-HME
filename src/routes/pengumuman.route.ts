import { editPengumumanController, createPengumumanController, getPengumumanAllController, getPengumumanByIdController } from "../controllers/pengumuman.controller";

const express = require('express');

const router = express.Router();

router.get('/', getPengumumanAllController);
router.get('/:id', getPengumumanByIdController);
router.post('/createPengumuman', createPengumumanController);
router.patch('/editPengumuman', editPengumumanController);
export default router;