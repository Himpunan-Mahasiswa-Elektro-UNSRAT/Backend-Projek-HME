// src/routes/auth.route.ts
import express from 'express';
import { json } from 'body-parser';
import { AuthController, UserController } from '../controller/user.controller';
import { MongoUserRepository } from '../repositories/user.repoImpl';
import authMiddleware from '../middleware/auth.Middleware';
import dotenv from "dotenv";

const userRepository = new MongoUserRepository();
const authController = new AuthController(userRepository);
const userController = new UserController(userRepository);

const app = express();

app.use(json());

// Route untuk login
app.post('/login', authController.login.bind(authController));

// Route suntuk mendapatkan profil pengguna
app.get('/profile',  authMiddleware,userController.getUserProfile.bind(userController));



export default app;
