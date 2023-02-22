import { Device } from "types";
import { IDeviceRepository } from "../../repositories/CreateDevice/IDeviceRepositoryCreate";

export class CreateDeviceUseCase {
  constructor(private deviceRepositoryCreate: IDeviceRepository) {}

  async execute(device: Device) {
    return await this.deviceRepositoryCreate.save(device)
  }
}