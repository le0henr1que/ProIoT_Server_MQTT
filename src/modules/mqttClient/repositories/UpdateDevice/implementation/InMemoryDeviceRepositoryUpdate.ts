import { Device } from "types";
import { IDeviceRepositoryUpdate } from "../IDeviceRepositoryMqtt";

export class InMemoryDeviceUpdateRepository implements IDeviceRepositoryUpdate {
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async performUpdatingDevice(topic: string, message: Buffer): Promise<Device> {
    // const { id, name, deviceInput } = dataDevice

    const index = this.devices.findIndex(
      (device) => device.deviceInput[0].mqttClientTopic === topic
    );

    this.devices[index].deviceInput[0].value = message;
    return this.devices[index];
  }
}
