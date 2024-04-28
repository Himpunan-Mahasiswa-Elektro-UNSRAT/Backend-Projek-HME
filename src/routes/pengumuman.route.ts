import { createPengumumanController, getPengumumanAllController, getPengumumanByIdController } from "../controllers/pengumuman.controller";

const express = require('express');

const router = express.Router();

router.get('/', getPengumumanAllController);
router.post('/createPengumuman', createPengumumanController);
router.get('/:id', getPengumumanByIdController);
export default router;