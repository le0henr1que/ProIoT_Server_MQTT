import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { GetAllDeviceUseCase } from "./GetAllDeviceUseCase";

export class GetAllDeviceController {
  constructor(private getAllDeviceUseCase: GetAllDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const device = await this.getAllDeviceUseCase.execute()
    return response.status(201).json({ error: false, device });
  }
}