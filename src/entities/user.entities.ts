// src/domain/User.ts
export interface User {
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
  