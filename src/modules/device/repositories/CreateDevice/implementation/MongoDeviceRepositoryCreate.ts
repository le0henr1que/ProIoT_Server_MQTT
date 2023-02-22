import { Device } from "../../../../../types/types"
import { DeviceSchema } from "../../../entities/DeviceSchema"
import { IDeviceRepository } from "../IDeviceRepositoryCreate";

export class MongoDeviceRepository implements IDeviceRepository {
  async save(device: Device): Promise<Device> {
    return await DeviceSchema.create(device);
  }
}