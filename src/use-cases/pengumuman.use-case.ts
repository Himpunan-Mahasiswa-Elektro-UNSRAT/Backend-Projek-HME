import { text } from "express";
import { Pengumuman } from "../entities/Pengumuman";
import { createPengumuman, getPengumumanAll, getPengumumanById } from "../repositories/pengumuman.repository";

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
            throw new Error('ID tidak ditemukan!');
        }
        return result;
    } catch (error: any) {
        throw error;
    }
}

export const createPengumumanUseCase = async (pengumumanData: any) => {

    const pengumuman: Pengumuman = {
        title: pengumumanData.title,
        date: new Date(pengumumanData.date),
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