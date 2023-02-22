import { Device } from "../../../../types/types"

export interface IDeviceRepositoryUpdate {
    performUpdatingDevice(topic:string): Promise<Device>;

}