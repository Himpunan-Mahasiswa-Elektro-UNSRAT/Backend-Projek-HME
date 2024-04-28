import { getAllPengumumanController, getPengumumanByIdController } from "../controllers/pengumuman.controller";

const express = require('express');

const router = express.Router();

router.get('/', getAllPengumumanController);
router.get('/:id', getPengumumanByIdController);

export default router;