import { Device } from "types";
import { IDeviceRepositoryDelete } from "../IDeviceRepositoryDelete";

export class InMemoryDeviceDeleteRepository implements IDeviceRepositoryDelete {
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async findById(id: string): Promise<Device | null> {
    const device = this.devices.find((device) => device._id === id);
    return device || null;
  }

  async performDeletion(id: string): Promise<void> {
    const index = this.devices.findIndex((device) => device._id === id);
    if (index >= 0) {
      this.devices.splice(index, 1);
    }
  }
}
