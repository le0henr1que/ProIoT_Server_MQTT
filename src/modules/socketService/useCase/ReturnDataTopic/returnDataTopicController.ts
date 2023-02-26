import { Response, Request, NextFunction } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { ReturnDataTopicUseCase } from "./ReturnDataTopicUseCase";
import { Device, DeviceInfo } from "types";
import { myEmitter } from "../../../../shared/event/eventEmmiter";

export class ReturnDataTopicController {
  constructor(private returnDataTopicUseCase: ReturnDataTopicUseCase) {}

  async handle(): Promise<any> {
    const dataTopic = await this.returnDataTopicUseCase.execute();
    return dataTopic;
    // console.log(dataTopic)

    // myEmitter.emit('messageMqtt', message.toString());
    // console.log("evento emitido")
  }
}
