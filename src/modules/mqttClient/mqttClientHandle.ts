import { clientMqtt } from "../../app";
import { reciveIoTDataController } from "./useCase/receiveIotData/index";

// const handleMqtt = ('message', reciveIoTDataController)

export const handleMqtt = () => {reciveIoTDataController}
clientMqtt.on("message", handleMqtt)

// clientMqtt.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(topic)
//     console.log(message.toString('utf8'))
//     // client.end()
//   })
