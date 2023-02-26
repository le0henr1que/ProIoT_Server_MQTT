import { Device } from "../../../../../types/types";
import { IDeviceRepository } from "../IDeviceRepositoryCreate";

export class InMemoryDeviceRepository implements IDeviceRepository {
  private devices: Device[];
  private nextId: number;

  constructor() {
    this.devices = [];
    this.nextId = 1;
  }

  async save(device: Device): Promise<Device> {
    device.id = this.nextId++;
    this.devices.push(device);
    return device;
  }

  async findById(id: number): Promise<Device | undefined> {
    return this.devices.find((device) => device.id === id);
  }
}
