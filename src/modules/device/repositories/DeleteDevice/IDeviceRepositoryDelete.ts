export interface IDeviceRepositoryDelete {
  performDeletion(id: string): Promise<void>;
}
