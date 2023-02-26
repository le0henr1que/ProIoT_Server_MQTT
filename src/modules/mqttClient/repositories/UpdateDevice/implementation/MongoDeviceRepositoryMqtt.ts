import { Device } from "../../../../../types/types";
import { DeviceSchema } from "../../../../device/entities/DeviceSchema";
import { IDeviceRepositoryUpdate } from "../IDeviceRepositoryMqtt";

export class MongoDeviceRepositoryUpdate implements IDeviceRepositoryUpdate {
  // performGetingAllTopic(): Promise<any> {
  //   return DeviceSchema.find({}, { 'deviceInput.mqttClientTopic': 1 })
  //     .then(docs => {
  //       const values = docs.map(doc => doc.deviceInput);
  //       // console.log(values);
  //       const result = values.reduce((acc, curr) => {
  //         curr.forEach(item => {
  //           if (item.mqttClientTopic !== '') {
  //             // @ts-ignore
  //             acc.push(item.mqttClientTopic);
  //           }
  //         });
  //         return acc;
  //       }, []);

  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  async performUpdatingDevice(topic: string, message: Buffer): Promise<any> {
    console.log("topic in repositori performUpdating device" + topic);

    DeviceSchema.findOneAndUpdate(
      { "deviceInput.mqttClientTopic": topic },
      { $set: { "deviceInput.$.value": message } },
      { new: true },
      (err: any, doc: any) => {
        if (err) {
          // console.log(err);
        } else {
          // console.log(doc);
        }
      }
    );
  }
}
