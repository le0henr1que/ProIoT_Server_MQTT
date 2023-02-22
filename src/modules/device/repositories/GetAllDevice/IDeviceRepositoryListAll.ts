import { Device } from "../../../../types/types"

export interface IDeviceRepositoryListingAll {
    performListingAll(): Promise<Device[]>;
}