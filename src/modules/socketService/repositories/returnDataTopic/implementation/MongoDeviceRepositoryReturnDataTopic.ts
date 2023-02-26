import { Device } from "../../../../../types/types";
import { DeviceSchema } from "../../../../device/entities/DeviceSchema";
import { IDeviceRepositoryReturnTopic } from "../IDeviceRepositoryMqttReturnTopic";

export class MongoDeviceRepositoryReturnDataTopic
  implements IDeviceRepositoryReturnTopic
{
  performGetingAllTopic(): Promise<any> {
    return DeviceSchema.find({}, { "deviceInput.mqttClientTopic": 1 }).catch(
      (err) => console.log(err)
    );
  }
}
