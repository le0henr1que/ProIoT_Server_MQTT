import { Device } from "types";
import { IDeviceRepositoryDelete } from "../../repositories/DeleteDevice/IDeviceRepositoryDelete";

export class DeleteDeviceUseCase {
  constructor(private deviceRepositoryDelete: IDeviceRepositoryDelete) {}

  async execute(id: string) {
    return await this.deviceRepositoryDelete.performDeletion(id);
  }
}
