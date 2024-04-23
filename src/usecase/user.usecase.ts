// src/usecase/user.usecase.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../entities/user.models';
import dotenv from "dotenv";



dotenv.config();

export async function authenticateUser(email: string, password: string, user: User): Promise<string | null> {
  // Memeriksa apakah email cocok
  if (user.email !== email) return null;

  // Memeriksa kecocokan password
  const isMatch = await bcrypt.compare(password, user.pass);
  if (!isMatch) return null;

  // Membuat payload token
  const payload = {
    
    nama: user.bio.fullName,
    role: user.role,
    email: user.email,
    nim: user.nim
  };
  const expired = 60* 60* 1;
  const secret = process.env.JWT_SECRET;
  console.log(secret);

  // Membuat token JWT dengan payload yang sudah disiapkan
  return jwt.sign(payload, secret || 'ALBERTGAGALmoveon12322', { expiresIn: expired });
}
