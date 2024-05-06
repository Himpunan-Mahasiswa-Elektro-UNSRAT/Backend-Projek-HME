import { Pengumuman } from "../entities/Pengumuman";
import { createPengumuman, getPengumumanAll, getPengumumanById } from "../repositories/pengumuman.repository";
import { CreatePengumumanInput } from "../interface/createPengumuman.interface";
import { v4 as uuidv4 } from "uuid";
import { getFormattedDate } from "../lib/date";

export const getPengumumanAllUseCase = async () => {

    try {
        const result = await getPengumumanAll();
        return result;
    } catch (error: any) {
        throw error;
    }
}

export const getPengumumanByIdUseCase = async (id: string) => {

    const pengumuman = await getPengumumanById(id);
    

    try {
        const result = await getPengumumanById(id);
        if(!result){
            throw new Error('ID not found');
        }
        return result;
    } catch (error: any) {
        throw error;
    }
}

export const createPengumumanUseCase = async (pengumumanData: CreatePengumumanInput) => {

    const pengumuman: Pengumuman = {
        uuid: uuidv4(),
        title: pengumumanData.title,
        date: getFormattedDate(),
        author: pengumumanData.author,
        tag: pengumumanData.tag,
        content: pengumumanData.content
    }

    try {
        await createPengumuman(pengumuman)
    } catch (error: any) {
        throw error;
    }
}