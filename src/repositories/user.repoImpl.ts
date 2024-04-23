// src/infrastructure/MongoUserRepository.ts
import { User } from '../entities/user.models';
import { UserRepository } from './user.repo';
import UserModel from '../entities/user.models';

export class MongoUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    try {

      const user = await UserModel.findOne({ email }).lean().exec();
    
      return user;
    } catch (error) {
      console.error('Error finding user by email:', error);
      return null;
    }
  }
}

