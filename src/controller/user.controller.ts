import { UpdateProfileInput } from "../interface/updateProfile";
import { getUserProfileByEmailUseCase, updateProfileUseCase } from "../use-cases/user.use-case";
import { successResponse, errorResponse } from "../utils/response";
import { Request, Response } from "express";

export async function getUserProfileByEmailController(res: Response){

    const email = "namasatu@student.unsrat.ac.id";

    if(!email){
        return errorResponse(res, 400, 'Email tidak diberikan!')
    }

    try {
        const result = await getUserProfileByEmailUseCase(email);
        return successResponse(res, 'berhasil cok', result)
        
    }
    catch(error: any){
        return errorResponse(res, 400, "masih belum")
        
    }
}

export async function updateProfileController(req: Request, res: Response) {
    const email  = "namasatu@student.unsrat.ac.id";
    const updatesData: UpdateProfileInput = req.body as UpdateProfileInput

    // if(!updatesData.bio?.fullName){
    //     return errorResponse(res, 400, 'Full name tidak diberikan!')
    // }
    // if(!updatesData.bio.year){
    //     return errorResponse(res, 400, 'Tahun angkatan tidak diberikan!')
    // }
    // if(!updatesData.bio.birthData){
    //     return errorResponse(res, 400, 'Tanggal lahir tidak diberikan!')
    // }
    // if(!updatesData.bio.gender){
    //     return errorResponse(res, 400, 'Gender tidak diberikan!')
    // }
    // if(!updatesData.bio.address){
    //     return errorResponse(res, 400, 'Alamat tidak diberikan!')
    // }
    // if(!updatesData.contact?.phoneNumber){
    //     return errorResponse(res, 400, 'Nomor telepon tidak diberikan!')
    // }
    // if(!updatesData.contact.instagram){
    //     return errorResponse(res, 400, 'Nama akun instagram tidak diberikan!')
    // }
    // if(!updatesData.contact.linkedin){
    //     return errorResponse(res, 400, 'Nama akun linkedin tidak diberikan!')
    // }
    // if(!updatesData.contact?.github){
    //     return errorResponse(res, 400, 'Nama akun github tidak diberikan!')
    // }
    
    try {
        // Fetch existing user data
        const existingUserData = await getUserProfileByEmailUseCase(email);

        // Validate and process updates
        const updatedUserData = { ...existingUserData };

        if (updatesData.bio) {
            // Validate and update bio data
            if (updatesData.bio.fullName) {
                updatedUserData.bio.fullName = updatesData.bio.fullName;
            }
            if (updatesData.bio.year) {
                const year = updatesData.bio.year;
                if (isNaN(year)     || updatesData.bio.year.toString().length !== 4) {
                    return errorResponse(res, 400, 'Year must be a 4-digit number!');
                }
                updatedUserData.bio.year = year;
            }
            if (updatesData.bio.birthData) {
                const birthDate = new Date(updatesData.bio.birthData);
                if (isNaN(birthDate.getMonth()) || birthDate.getMonth() === 12) {
                    return errorResponse(res, 400, 'Invalid birth date!');
                }
                updatedUserData.bio.birthData = birthDate;
            }
            if (updatesData.bio.gender) {
                updatedUserData.bio.gender = updatesData.bio.gender;
            }
            if (updatesData.bio.address) {
                updatedUserData.bio.address = updatesData.bio.address;
            }
        }

        if (updatesData.contact) {
            // Validate and update contact data
            if (updatesData.contact.phoneNumber) {
                const phoneNumber = updatesData.contact.phoneNumber;
                if (!/^\d{12,13}$/.test(phoneNumber)) {
                    return errorResponse(res, 400, 'Phone number must be 12-13 digits!');
                }
                updatedUserData.contact.phoneNumber = phoneNumber;
            }
            if (updatesData.contact.instagram) {
                updatedUserData.contact.instagram = updatesData.contact.instagram;
            }
            if (updatesData.contact.linkedin) {
                updatedUserData.contact.linkedin = updatesData.contact.linkedin;
            }
            if (updatesData.contact.github) {
                updatedUserData.contact.github = updatesData.contact.github;
            }
        }
        await updateProfileUseCase(email, updatedUserData)
        successResponse(res, 'berhasil cok', null);
        return;
    }
    catch(error: any){
        errorResponse(res, 400, error.message);
        return;
    }
        

}
