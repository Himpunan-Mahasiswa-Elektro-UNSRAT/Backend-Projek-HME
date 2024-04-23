// src/models/User.ts
import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  nim: number;
  email: string;
  pass: string;
  role: 'anggota' | 'pengurus' | 'koordinator';
  bio: {
    fullName: string;
    year: number;
    birthData: Date;
    gender: 'laki-laki' | 'perempuan';
    address: string;
  };
  contact: {
    phoneNumber: string;
    instagram: string;
    linkdin: string;
    github?: string;
  };
  isActive: boolean;
}

const userSchema = new mongoose.Schema<User>({
  nim: { type: Number, required: true },
  email: { type: String, required: true },
  pass: { type: String, required: true },
  role: { type: String, enum: ['anggota', 'pengurus', 'koordinator'], required: true },
  bio: {
    fullName: { type: String, required: true },
    year: { type: Number, required: true },
    birthData: { type: Date, required: true },
    gender: { type: String, enum: ['laki-laki', 'perempuan'], required: true },
    address: { type: String, required: true }
  },
  contact: {
    phoneNumber: { type: String, required: true },
    instagram: { type: String, required: true },
    linkdin: { type: String, required: true },
    github: { type: String }
  },
  isActive: { type: Boolean, required: true }
},{ collection: 'HMR' });

export default mongoose.model<User>('User', userSchema);
