// src/repositories/UserRepository.ts
import { User } from '../entities/user.models';

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}
