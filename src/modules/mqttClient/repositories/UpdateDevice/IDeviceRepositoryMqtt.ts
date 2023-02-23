import { Device } from "../../../../types/types"

export interface IDeviceRepositoryUpdate {
    performUpdatingDevice(topic:string, message:Buffer): Promise<Device>;
    // performGetingAllTopic(): Promise<string[]>;

}