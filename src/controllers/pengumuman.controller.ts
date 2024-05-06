import { createPengumumanUseCase, getPengumumanAllUseCase, getPengumumanByIdUseCase } from "../use-cases/pengumuman.use-case";
import { successResponse, errorResponse } from "../utils/response";
import { CreatePengumumanInput } from "../interface/createPengumuman.interface";
import { Request, Response } from "express";
import { error } from "console";

function isValidURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

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
        return errorResponse(res, 400, 'ID tidak diberikan!')
    }

    try {
        const result = await getPengumumanByIdUseCase(id);
        successResponse(res, 'berhasil cok', result);
        return;
    }
    catch(error: any){
        if(error.message == 'ID not found'){
            errorResponse(res, 404, 'ID tidak ditemukan!');
        }else{
            errorResponse(res, 400, error.message);
        }
        return;
    }
}

export async function createPengumumanController(req: Request, res: Response){

    const pengumumanData = req.body;

    // cek panjang inputan
    if(Object.keys(pengumumanData).length > 6 || Object.keys(pengumumanData.content).length > 2){
        return errorResponse(res, 400, 'Too many input!')
    }

    // cek ketersediaan field
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
    
    // cek kesesuaian field
    if(typeof pengumumanData.title !== 'string'){
        return errorResponse(res, 400, 'Title must be a string')
    }

    if(typeof pengumumanData.author !== 'string'){
        return errorResponse(res, 400, 'Author must be a string')
    }
    if(typeof pengumumanData.tag !== 'string'){
        return errorResponse(res, 400, 'Tag must be a string')
    }
    if(!isValidURL(pengumumanData.content.photo)){
        return errorResponse(res, 400, 'URL photo must be a link')
    }

    // cek aturan field
    if(pengumumanData.title.length > 80){
        return errorResponse(res, 400, 'Title too long')
    }
    if(pengumumanData.content.text.length > 300){
        return errorResponse(res, 400, 'Text too long')
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