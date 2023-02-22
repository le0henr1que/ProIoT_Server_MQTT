import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { DeleteDeviceUseCase } from "./DeleteDeviceUseCase";
import { Device, DeviceInfo } from "types";

export class DeleteDeviceController {
  constructor(private deleteDeviceUseCase: DeleteDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    await this.deleteDeviceUseCase.execute(request.params.id)
    return response.status(201).json({ error: false, message:"successfully deleted device" });
  }
}