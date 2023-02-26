import { Device } from "../../../../../types/types";
import { DeviceSchema } from "../../../entities/DeviceSchema";
import { IDeviceRepositoryListById } from "../IDeviceRepositoryGetById";

export class MongoDeviceRepositoryListById
  implements IDeviceRepositoryListById
{
  async performListingById(id: string): Promise<any> {
    return await DeviceSchema.findById(id);
  }
}
