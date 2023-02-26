import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { ReciveIoTDataUseCase } from "./ReceiveIoTDataUseCase";
import { Device, DeviceInfo } from "types";
import { myEmitter } from "../../../../shared/event/eventEmmiter";

export class ReciveIoTDataController {
  constructor(private reciveIoTDataUseCase: ReciveIoTDataUseCase) {}

  async handle(topic: string, message: Buffer): Promise<any> {
    await this.reciveIoTDataUseCase.execute(topic, message);
    console.log(message.toString());

    // myEmitter.emit('messageMqtt', message.toString());
    // console.log("evento emitido")
  }
}
