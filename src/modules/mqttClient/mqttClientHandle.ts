import { IoTDataController } from "./useCase/receiveIotData/index";
import mqtt from 'mqtt'


export const mqttClientHandle  = () => {

    const clientMqtt  = mqtt.connect(process.env.MQTT_URL)

    clientMqtt.on('connect', function () {
    
        clientMqtt.subscribe('BCIBotao1', function (err, message) {
            console.log(`MQTT connect in ${process.env.MQTT_URL}, in topic ${message[0].topic}`)
        })
    })

    clientMqtt.on('message', function(topic, message){
        IoTDataController.handle(topic, message)
        // eventEmitter.emit('newMessage', message);

    })
}

