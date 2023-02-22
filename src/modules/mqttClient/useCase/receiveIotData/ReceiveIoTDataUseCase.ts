import { Device } from "types";
import { IDeviceRepositoryUpdate } from "../../repositories/UpdateDevice/IDeviceRepositoryUpdate"

export class ReciveIoTDataUseCase {
  constructor(private repositoryReciveIoTData: IDeviceRepositoryUpdate) {}

  async execute(topic:string, message:Buffer) {
    return await this.repositoryReciveIoTData.performUpdatingDevice(topic, message)
  }
}