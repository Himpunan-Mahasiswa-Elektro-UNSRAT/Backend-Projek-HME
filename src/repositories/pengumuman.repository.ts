import { ObjectId } from "mongodb";
import { closeDatabaseConnection, connectToDatabase } from "../config/db";
import { Pengumuman } from "../entities/Pengumuman";

export const getPengumumanAll = async (): Promise<any> => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("Pengumuman");
        const result = await collection.find().toArray();
        return result;

    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection();
    }
}

export const getPengumumanById = async (id: string): Promise<any> => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection<Pengumuman>("Pengumuman");
        
        const result: Pengumuman | null = await collection.findOne({
            _id: new ObjectId(id)
        })
        return result;

    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection();
    }
}

export const createPengumuman = async (pengumumanData: Pengumuman): Promise<any> => {

    try {
        const db = await connectToDatabase();
        const collection = db.collection("Pengumuman");
        await collection.insertOne(pengumumanData);

    } catch (error) {
        throw error;
    } finally {
        await closeDatabaseConnection();
    }
}