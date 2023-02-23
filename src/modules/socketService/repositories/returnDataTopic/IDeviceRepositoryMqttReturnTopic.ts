import { Device } from "../../../../types/types"

export interface IDeviceRepositoryReturnTopic {
    performGetingAllTopic(): Promise<string[]>;

}