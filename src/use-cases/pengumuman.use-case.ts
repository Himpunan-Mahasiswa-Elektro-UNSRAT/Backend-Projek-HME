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