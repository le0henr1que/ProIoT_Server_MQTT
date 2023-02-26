import mqtt from "mqtt";
import { myEmitter } from "../../shared/event/eventEmmiter";
import { IoTDataController } from "./useCase/UpdateDevice/index";
import { returnDataTopicController } from "./useCase/ReturnDataTopic/index";

export const mqttClientHandle = () => {
  const clientMqtt = mqtt.connect(process.env.MQTT_URL);
  const subscribedTopics = new Set<string>();

  returnDataTopicController.handle().then((result) => {
    myEmitter.emit("topico", result);
    // content = result
    clientMqtt.on("connect", function () {
      result.map((content: string) => {
        // clientMqtt.subscribe(content)
        if (!subscribedTopics.has(content)) {
          clientMqtt.subscribe(content);
          subscribedTopics.add(content);
        }
      });
    });
  });
  clientMqtt.on("message", function (topic: string, message: Buffer) {
    IoTDataController.handle(topic, message);
    myEmitter.emit(topic, message.toString());
  });
};
