import { Device } from "types";
import { IDeviceRepositoryListById } from "../../repositories/GetDeviceById/IDeviceRepositoryGetById";

export class GetByIdDeviceUseCase {
  constructor(private deviceRepositoryGetById: IDeviceRepositoryListById) {}

  async execute(id:string): Promise<Device> {
    return await this.deviceRepositoryGetById.performListingById(id)
  }
}