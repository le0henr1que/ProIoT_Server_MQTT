import { Device } from "../../../../types/types"

export interface IDeviceRepositoryUpdate {
    performUpdatingDevice(dataDevice:Device): Promise<Device>;

}