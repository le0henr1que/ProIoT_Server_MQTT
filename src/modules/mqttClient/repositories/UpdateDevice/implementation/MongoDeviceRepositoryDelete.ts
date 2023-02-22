import { Device } from "../../../../../types/types"
import { DeviceSchema } from "../../../entities/DeviceSchema"
import { IDeviceRepositoryUpdate } from "../IDeviceRepositoryUpdate";

export class MongoDeviceRepositoryUpdate implements IDeviceRepositoryUpdate {

  async performUpdatingDevice(topic:string): Promise<any> {
    console.log("topic in repositori performUpdating device"+ topic)
    // const {id, name, deviceInput } = dataDevice;
    // return await DeviceSchema.findByIdAndUpdate({ _id: id },{name: name});
  }
}