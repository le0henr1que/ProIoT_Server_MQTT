import { Device } from "../../../../../types/types"
import { DeviceSchema } from "../../../entities/DeviceSchema"
import { IDeviceRepositoryDelete } from "../IDeviceRepositoryDelete";

export class MongoDeviceRepositoryDelete implements IDeviceRepositoryDelete {
  async performDeletion(id: string): Promise<void> {
    await DeviceSchema.findByIdAndDelete(id);
  }
}