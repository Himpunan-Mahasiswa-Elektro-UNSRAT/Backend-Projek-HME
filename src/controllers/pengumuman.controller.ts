import { getAllPengumumanUseCase, getPengumumanByIdUseCase } from "../use-cases/pengumuman.use-case";
import { successResponse, errorResponse } from "../utils/response";

export async function getAllPengumumanController(req: any, res: any){
    try {
        const result = await getAllPengumumanUseCase();
        successResponse(res, 'berhasil cok', result);
        return;
    }
    catch(error: any){
        errorResponse(res, 400, error.message);
        return;
    }
}

export async function getPengumumanByIdController(req: any, res: any){

    const { id } = req.params;

    try {
        const result = await getPengumumanByIdUseCase(id);
        successResponse(res, 'berhasil cok', result);
        return;
    }
    catch(error: any){
        errorResponse(res, 400, error.message);
        return;
    }
}