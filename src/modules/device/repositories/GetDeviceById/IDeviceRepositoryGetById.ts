import { Device } from "../../../../types/types"

export interface IDeviceRepositoryListById {
    performListingById(id: string): Promise<Device>;
}