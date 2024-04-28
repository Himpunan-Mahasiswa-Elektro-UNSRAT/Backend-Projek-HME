import { getPengumumanAllController, getPengumumanByIdController } from "../controllers/pengumuman.controller";

const express = require('express');

const router = express.Router();

router.get('/', getPengumumanAllController);
router.get('/:id', getPengumumanByIdController);

export default router;