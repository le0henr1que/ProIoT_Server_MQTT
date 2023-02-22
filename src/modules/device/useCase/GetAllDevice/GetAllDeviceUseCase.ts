import { Device } from "types";
import { IDeviceRepositoryListingAll } from "../../repositories/GetAllDevice/IDeviceRepositoryListAll";

export class GetAllDeviceUseCase {
  constructor(private deviceRepositoryGetAll: IDeviceRepositoryListingAll) {}

  async execute(): Promise<Device[]> {
    return await this.deviceRepositoryGetAll.performListingAll()
  }
}