import { Device } from "types";
import { IDeviceRepositoryUpdate } from "../IDeviceRepositoryUpdate";

export class InMemoryDeviceUpdateRepository implements IDeviceRepositoryUpdate {
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async performUpdatingDevice(dataDevice: Device): Promise<Device> {
    const { id, name, deviceInput } = dataDevice;

    const index = this.devices.findIndex((device) => device.id === id);

    if (index === -1) {
      throw new Error(`Device with id ${id} not found`);
    }

    delete dataDevice.id;

    const dataDeviceForUpdate: any = {
      name,
      deviceInput,
    };

    console.log(dataDevice);

    const deviceToUpdate = { ...this.devices[index], ...dataDeviceForUpdate };
    this.devices[index] = deviceToUpdate;
    return deviceToUpdate;
  }
}
