import { getUserProfileByEmailController, updateProfileController } from "../controller/user.controller";

const express = require('express');

const router = express.Router();

router.patch('/', updateProfileController);
router.get('/', getUserProfileByEmailController); //masih error
export default router;
