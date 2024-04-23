import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repo';
import { authenticateUser } from '../usecase/user.usecase';
import { User } from '../entities/user.models';

export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const user: User | null = await this.userRepository.findByEmail(email);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      const token = await authenticateUser(email, password, user);
      if (!token) {
        // Ubah pesan menjadi "Password salah" jika token tidak tersedia
        res.status(401).json({ message: 'Password salah' });
        return;
      }
      res.json({ token });
      
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      // Dapatkan informasi pengguna dari middleware
      const user: User | undefined = (req as any).user; // Menggunakan any untuk menyingkirkan kesalahan

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      if(user.role == "anggota"){
        res.json(user);
      }else{
        res.json({
          nama: user.bio.fullName,
          nim : user.nim,
          email: user.email
  
        });
      }
     
      // Kirim respons dengan data pengguna
  
    } catch (error) {
      console.error('Error getting user profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
