export interface UpdateProfileInput{
    // pass: string;
    // confirm_pass: string;
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
}