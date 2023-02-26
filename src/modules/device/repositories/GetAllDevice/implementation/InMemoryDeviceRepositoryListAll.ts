import { Device } from "types";
import { IDeviceRepositoryListingAll } from "../IDeviceRepositoryListAll";

export class InMemoryDeviceListRepository
  implements IDeviceRepositoryListingAll
{
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async performListingAll(): Promise<Device[]> {
    return [...this.devices];
  }
}
