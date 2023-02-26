import { Device } from "../../../../types/types";

export interface IDeviceRepository {
  save(device: Device): Promise<Device>;
}
