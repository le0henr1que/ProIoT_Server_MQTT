import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { ReciveIoTDataUseCase } from "./ReceiveIoTDataUseCase";
import { Device, DeviceInfo } from "types";

export class ReciveIoTDataController {
  constructor(private reciveIoTDataUseCase: ReciveIoTDataUseCase) {}

  async handle(topic:string, message:string): Promise<any> {
    
    await this.reciveIoTDataUseCase.execute(topic)
    console.log(message.toString())
  }
}
