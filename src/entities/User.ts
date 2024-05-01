import { v4 } from "uuid";

export interface User {
    id: string;
    nim: number;
    email: string;
    pass: string;
    role: string;
    bio: {
      fullName: string;
      year: number;
      birthData: Date;
      gender: string;
      address: string;
    };
    contact: {
      phoneNumber: string;
      instagram: string;
      linkedin: string;
      github?: string;
    };
    isActive: boolean;
  }
  
