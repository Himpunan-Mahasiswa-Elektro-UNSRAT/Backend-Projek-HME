import { getPengumumanAll, getPengumumanById } from "../repositories/pengumuman.repository";

export const getPengumumanAllUseCase = async () => {

    try {
        const result = await getPengumumanAll();
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