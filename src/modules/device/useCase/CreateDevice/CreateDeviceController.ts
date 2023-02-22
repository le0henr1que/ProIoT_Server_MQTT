import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { CreateDeviceUseCase } from "./CreateDeviceUseCase";
import { Device, DeviceInfo } from "types";

export class CreateDeviceController {
  constructor(private createDeviceUseCase: CreateDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, deviceInput } = request.body;

    if (!name) {
      throw new HttpError(
        "Property 'name' not found in request body",
        404
      );
    }

    if (deviceInput.length == 0) {
      throw new HttpError(
        "Property 'deviceInput' not found in request body",
        404
      );
    }
    // console.log(request.body)

    const dataDevice = await this.createDeviceUseCase.execute(request.body);
    return response.status(201).json({ error: false, dataDevice });
  }
}