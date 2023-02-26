import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { GetByIdDeviceUseCase } from "./GetByIdDeviceUseCase";

export class GetByIdDeviceController {
  constructor(private getByIdDeviceUseCase: GetByIdDeviceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const device = await this.getByIdDeviceUseCase.execute(request.params.id);
    return response.status(201).json({ error: false, device });
  }
}
