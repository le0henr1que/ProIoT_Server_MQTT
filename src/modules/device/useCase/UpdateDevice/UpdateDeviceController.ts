import { Response, Request, NextFunction } from "express";
import { Device } from "types";
import { HttpError } from "../../../../shared/errors/appError";
import { UpdateDeviceUseCase } from "./UpdateDeviceUseCase";

export class UpdateDeviceController {
  constructor(private updateDeviceUseCase: UpdateDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, deviceInput } = request.body;
    const { id } = request.params;

    if (!name) {
      throw new HttpError("Property 'name' not found in request body", 404);
    }

    if (deviceInput.length == 0) {
      throw new HttpError(
        "Property 'deviceInput' not found in request body",
        404
      );
    }
    const deviceData: Device = {
      ...request.body,
      id,
    };
    console.log(deviceData);

    const device = await this.updateDeviceUseCase.execute(deviceData);
    return response.status(201).json({ error: false, device });
  }
}
