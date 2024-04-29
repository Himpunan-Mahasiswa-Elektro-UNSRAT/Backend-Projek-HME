import { User } from '../entities/user.models'; 
import { Request } from 'express';// Pastikan pathnya sesuai dengan struktur proyek Anda

declare module 'express' {
    interface Request {
      user?: User; // Properti user dengan tipe User atau undefined
    }
  }