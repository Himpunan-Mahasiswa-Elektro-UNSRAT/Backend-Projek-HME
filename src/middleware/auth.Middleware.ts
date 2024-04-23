// src/middleware/auth.middleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/user.models';
import { UserRepository } from '../repositories/user.repo';
import { MongoUserRepository } from '../repositories/user.repoImpl';
import dotenv from "dotenv";

dotenv.config();

const userRepository: UserRepository = new MongoUserRepository(); // Instansiasi repository MongoDB

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // Dapatkan token dari header Authorization
  const token = req.headers.authorization;
  console.log(token);

  // Periksa apakah token tersedia
  if (!token) {
    return res.status(401).json({ message: 'Token tidak tersedia' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'ALBERTGAGALmoveon12322';
    // Verifikasi token
    const decoded = jwt.verify(token.replace('Bearer ', ''), secret) as { email: string };

    const user = await userRepository.findByEmail(decoded.email); 


    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    // Menambahkan informasi pengguna ke dalam objek permintaan
    (req as any).user = user;

    // Lanjutkan ke middleware atau pengendali berikutnya
    next();
  } catch (error) {
    console.error('Error verifying token:', error, );
    return res.status(401).json({ message: 'Token tidak valid' });
  }
};

export default authMiddleware;
