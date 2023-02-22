import { Device } from "types";
import { IDeviceRepository } from "../../repositories/CreateDevice/IDeviceRepositoryCreate";

export class CreateDeviceUseCase {
  constructor(private deviceRepositoryCreate: IDeviceRepository) {}

  async execute(device: Device) {
    // console.log(device)
    return await this.deviceRepositoryCreate.save(device)
  }
}