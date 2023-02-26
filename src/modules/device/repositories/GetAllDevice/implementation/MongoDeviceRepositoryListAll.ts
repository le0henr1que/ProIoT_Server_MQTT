import { Device } from "../../../../../types/types";
import { DeviceSchema } from "../../../entities/DeviceSchema";
import { IDeviceRepositoryListingAll } from "../IDeviceRepositoryListAll";

export class MongoDeviceRepositoryListAll
  implements IDeviceRepositoryListingAll
{
  async performListingAll(): Promise<Device[]> {
    return await DeviceSchema.find();
  }
}
