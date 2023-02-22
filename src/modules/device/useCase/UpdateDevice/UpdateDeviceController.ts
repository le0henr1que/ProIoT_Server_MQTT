import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { UpdateDeviceUseCase } from "./UpdateDeviceUseCase";

export class UpdateDeviceController {
  constructor(private updateDeviceUseCase: UpdateDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const device = await this.updateDeviceUseCase.execute(request.body)
    return response.status(201).json({ error: false, device });
  }
}