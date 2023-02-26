import { Device } from "types";
import { IDeviceRepositoryReturnTopic } from "../IDeviceRepositoryMqttReturnTopic";

export class InMemoryDeviceUpdateRepository
  implements IDeviceRepositoryReturnTopic
{
  private devices: Device[] = [];

  async save(device: Device): Promise<Device> {
    this.devices.push(device);
    return device;
  }

  async performGetingAllTopic(): Promise<any> {
    return this.devices;
  }
}
