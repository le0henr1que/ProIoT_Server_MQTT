import { Device } from "../../../../../types/types"
import { DeviceSchema } from "../../../../device/entities/DeviceSchema"
import { IDeviceRepositoryUpdate } from "../IDeviceRepositoryUpdate";

export class MongoDeviceRepositoryUpdate implements IDeviceRepositoryUpdate {

  async performUpdatingDevice(topic:string, message:Buffer): Promise<any> {
    console.log("topic in repositori performUpdating device"+ topic)
    // const {id, name, deviceInput } = dataDevice;
    // const idEement = DeviceSchema.findOne().populate(topic);
    // console.log(idEement)

    DeviceSchema.findOneAndUpdate(
      {'deviceInput.mqttClientTopic': topic},
      {$set: {'deviceInput.$.value': message}},
      {new: true},
      (err:any, doc:any) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
        }
      }
    );
    // const idEement = DeviceSchema.findOne({deviceInput:[{mqttTopic:topic}]})
    // console.log(idEement)
    // return await DeviceSchema.findByIdAndUpdate({ deviceInput: [{mqttTopic:topic}, {value:message}] });
  }
}