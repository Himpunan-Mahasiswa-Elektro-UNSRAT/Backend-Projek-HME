import { User } from "../entities/User";
import { getUserProfileByEmail, updateProfileById } from "../repositories/user.repository";
import { UpdateProfileInput } from "../interface/updateProfile";

export const updateProfileUseCase = async(email: string, updateData: UpdateProfileInput) => {
    try{
    const result = await updateProfileById(email, updateData);
    return result.value; // Return the updated user
} catch (error) {
    throw error;
  }
    
}

export const getUserProfileByEmailUseCase = async (email: string) => {

  const  userProfile = await getUserProfileByEmail(email);
  

  try {
      const result = await userProfile;
      if(!result){
          throw new Error('Email tidak ditemukan!');
      }
      return result;
  } catch (error: any) {
      throw error;
  }
}