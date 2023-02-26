import { Device } from "types";
import { IDeviceRepositoryListById } from "../IDeviceRepositoryGetById";

export class InMemoryDeviceListRepository implements IDeviceRepositoryListById {
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async performListingById(id: string): Promise<Device> {
    const device = this.devices.find((device) => device.id === id);
    return device;
  }
}
