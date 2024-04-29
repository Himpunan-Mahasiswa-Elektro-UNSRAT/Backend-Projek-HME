import { createPengumumanUseCase, getPengumumanAllUseCase, getPengumumanByIdUseCase } from "../use-cases/pengumuman.use-case";
import { successResponse, errorResponse } from "../utils/response";
import { Request, Response } from "express";

export async function getPengumumanAllController(req:any, res: any){
    try {
        const result = await getPengumumanAllUseCase();
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

    if(!id){
        return errorResponse(res, 404, 'ID tidak diberikan!')
    }

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

export async function createPengumumanController(req: Request, res: Response){

    const pengumumanData = req.body;

    if(!pengumumanData.title){
        return errorResponse(res, 400, 'Judul tidak diberikan!')
    }
    if(!pengumumanData.date){
        return errorResponse(res, 400, 'Tanggal tidak diberikan!')
    }
    if(!pengumumanData.author){
        return errorResponse(res, 400, 'Author tidak diberikan!')
    }
    if(!pengumumanData.tag){
        return errorResponse(res, 400, 'Tag tidak diberikan!')
    }
    if(!pengumumanData.content.photo){
        return errorResponse(res, 400, 'Photo tidak diberikan!')
    }
    if(!pengumumanData.content.text){
        return errorResponse(res, 400, 'Text tidak diberikan!')
    }
    
    try {
        await createPengumumanUseCase(pengumumanData);
        successResponse(res, 'berhasil cok', null);
        return;
    }
    catch(error: any){
        errorResponse(res, 400, error.message);
        return;
    }
}

export async function editPengumumanController(req: Request, res: Response){
    return null;
}