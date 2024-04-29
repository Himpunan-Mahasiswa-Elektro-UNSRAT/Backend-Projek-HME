import { Response } from "express";

export const successResponse = (res: Response, message: string, data: any): void => {
	res.status(200).json({
		status: 200,
		message,
		data,
	});
};

export const errorResponse = (
	res: Response,
	status: number,
	message: string
): void => {
	res.status(status).json({
		status,
		message,
		data: null
	});
};