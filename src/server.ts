import * as dotenv from "dotenv";
dotenv.config();
import { app, clientMqtt, server } from "./app";

const PORT = process.env.PORT || 5000;
const SOCKET_PORT = process.env.SOCKET_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  console.log(`Documentation at http://localhost:${PORT}/api/docs`);
});


clientMqtt.on('connect', function () {
    clientMqtt.subscribe('BCIBotao1', function (err, message) {
        console.log(`MQTT connect in ${process.env.MQTT_URL}, in topic ${message[0].topic}`)
    })
})

server.listen(SOCKET_PORT, () => {
  console.log(`Socket iniciado na porta ${SOCKET_PORT}`);
});

// clientMqtt.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(topic)
//     console.log(message.toString('utf8'))
//     // client.end()
//   })

  