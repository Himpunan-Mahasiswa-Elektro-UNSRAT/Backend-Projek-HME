// src/middleware/auth.middleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/user.models';
import { UserRepository } from '../repositories/user.repo';
import { MongoUserRepository } from '../repositories/user.repoImpl';
import dotenv from "dotenv";
import { successResponse, errorResponse } from "../utils/response";

dotenv.config();

const userRepository: UserRepository = new MongoUserRepository(); // Instansiasi repository MongoDB

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // Dapatkan token dari header Authorization
  const token = req.headers.authorization;
  console.log(token);

  // Periksa apakah token tersedia
  if (!token) {

    return errorResponse(res, 401, 'Token tidak tersedia');

  }

  try {
    const secret = process.env.JWT_SECRET || '';
    // Verifikasi token
    const decoded = jwt.verify(token.replace('Bearer ', ''), secret) as { email: string };

    const user = await userRepository.findByEmail(decoded.email); 


    if (!user) {
    
      return errorResponse(res, 404, 'Pengguna tidak ditemukan');
    }

    // Menambahkan informasi pengguna ke dalam objek permintaan
    (req as any).user = user;

    // Lanjutkan ke middleware atau pengendali berikutnya
    next();
  } catch (error: any) {
    console.error('Error verifying token:', error, );
    return errorResponse(res, 401, error.message);
  }
};

export default authMiddleware;
