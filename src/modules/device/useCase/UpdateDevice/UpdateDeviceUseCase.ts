import { Device } from "types";
import { IDeviceRepositoryUpdate } from "../../repositories/UpdateDevice/IDeviceRepositoryUpdate";

export class UpdateDeviceUseCase {
  constructor(private deviceRepositoryUpdate: IDeviceRepositoryUpdate) {}

  async execute(dataDevice:Device): Promise<Device> {
    return await this.deviceRepositoryUpdate.performUpdatingDevice(dataDevice)
  }
}