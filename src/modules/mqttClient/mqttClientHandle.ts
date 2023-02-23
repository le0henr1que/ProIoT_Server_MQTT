import mqtt from 'mqtt'
import { myEmitter } from "../../shared/event/eventEmmiter";
import { IoTDataController } from "./useCase/receiveIotData/index";
import { returnDataTopicController } from "./useCase/ReturnDataTopic/index";


export const mqttClientHandle  = () => {

    const clientMqtt  = mqtt.connect(process.env.MQTT_URL)

    returnDataTopicController.handle()
        .then((result) => {
            myEmitter.emit('topico', result);
            // content = result
            clientMqtt.on('connect', function () {
                result.map((content:string) => {
                    clientMqtt.subscribe(content)
                    
                })
                
               
            })
        })
        clientMqtt.on('message', function(topic:string, message:Buffer){

            IoTDataController.handle(topic, message)
            // eventEmitter.emit('newMessage', message);
            myEmitter.emit(topic, message.toString());
        })
        // returnDataTopicController.handle()
        // .then((result) => {{
        //     result.map((content:string[]) => {
        //         myEmitter.emit('messageMqtt', message.toString());
        //     })
        // })
    }
    // console.log(content)
    // clientMqtt.on('connect', function () {
    
    //     clientMqtt.subscribe('BCIBotao1', function (err, message) {
    //         console.log(`MQTT connect in ${process.env.MQTT_URL}, in topic ${message[0].topic}`)
    //     })
    //     clientMqtt.subscribe('teste', function (err, message) {
    //         console.log(`MQTT connect in ${process.env.MQTT_URL}, in topic ${message[0].topic}`)
    //     })
    // })

  

