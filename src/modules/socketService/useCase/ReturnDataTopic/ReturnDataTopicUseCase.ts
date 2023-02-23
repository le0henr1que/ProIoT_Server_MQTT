import { Device } from "types";
import { IDeviceRepositoryReturnTopic } from "../../repositories/returnDataTopic/IDeviceRepositoryMqttReturnTopic"

export class ReturnDataTopicUseCase {
  constructor(private repositoryReturnDataTopic: IDeviceRepositoryReturnTopic) {}

  async execute(): Promise<any> {
    var mqqtTopic:string[] = []
    const docs = await this.repositoryReturnDataTopic.performGetingAllTopic()
      .then((docs) => {
      
        // console.log(docs[0])
        docs.map((content) => {
          // @ts-ignore
          content.deviceInput.map((content) => {
              // console.log(content.mqttClientTopic)
              if(content.mqttClientTopic){
                mqqtTopic.push(content.mqttClientTopic)
              }
          })
        })
      })
      return mqqtTopic

  
  }
}