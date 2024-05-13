import { ObjectId } from "mongodb";
import { closeDatabaseConnection, connectToDatabase } from "../config/db";
import { User } from "../entities/User";
import { UpdateProfileInput } from "../interface/updateProfile";

export const getUserProfileByEmail = async (email: string): Promise<any> => { 
    try {
        const db = await connectToDatabase();
        const collection = db.collection<User>("users");
        
        const result: User | null = await collection.findOne({email})
        return result;

    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection();
    }
}

export const updateProfileById = async (email: string, updates: UpdateProfileInput): Promise<any> => {
    try{
        const db = await connectToDatabase();
        const collection = db.collection<User>("users")

        const result = await collection.findOneAndUpdate(
            { email:email },
            { $set: updates },
            { returnDocument: 'after' }
        );
        return result;
    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection();
    } 
}

