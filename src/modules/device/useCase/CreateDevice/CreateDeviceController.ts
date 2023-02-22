import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { CreateDeviceUseCase } from "./CreateDeviceUseCase";
import { Device, DeviceInfo } from "types";

export class CreateDeviceController {
  constructor(private createDeviceUseCase: CreateDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, deviceInput } = request.body;
    const { measurement, nameInput, value } = deviceInput;

    if (!name) {
      throw new HttpError(
        "Property 'name' not found in request body",
        404
      );
    }
    if (!measurement) {
      throw new HttpError(
        "Property 'measurement' not found in request body",
        404
      );
    }

    if (!nameInput) {
      throw new HttpError(
        "Property 'measurement' not found in request body",
        404
      );
    }
    
    if (!value) {
      throw new HttpError(
        "Property 'measurement' not found in request body",
        404
      );
    }

    const dataDevice = await this.createDeviceUseCase.execute(request.body);
    return response.status(201).json({ error: false, dataDevice });
  }
}