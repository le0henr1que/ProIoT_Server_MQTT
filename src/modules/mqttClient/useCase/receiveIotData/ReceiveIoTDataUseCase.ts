import { Device } from "types";
import { IDeviceRepositoryUpdate } from "../../repositories/UpdateDevice/IDeviceRepositoryMqtt"

export class ReciveIoTDataUseCase {
  constructor(private repositoryReciveIoTData: IDeviceRepositoryUpdate) {}

  async execute(topic:string, message:Buffer) {
    // await this.repositoryReciveIoTData.performGetingAllTopic()
    return await this.repositoryReciveIoTData.performUpdatingDevice(topic, message)
  }
}