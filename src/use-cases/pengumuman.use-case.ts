import { getAllPengumuman, getPengumumanById } from "../repositories/pengumuman.repository";

export const getAllPengumumanUseCase = async () => {

    try {
        const result = await getAllPengumuman();
        return result;
    } catch (error: any) {
        throw error;
    }
}

export const getPengumumanByIdUseCase = async (id: string) => {

    try {
        const result = await getPengumumanById(id);
        return result;
    } catch (error: any) {
        throw error;
    }
}