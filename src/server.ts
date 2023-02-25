import * as dotenv from "dotenv";
dotenv.config();
import { app, server } from "./app";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./utils/Config/swagger.json";

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
const SOCKET_PORT = process.env.SOCKET_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  console.log(`Documentation at http://localhost:${PORT}/api/docs`);
});




server.listen(SOCKET_PORT, () => {
  console.log(`Socket iniciado na porta ${SOCKET_PORT}`);
});

// clientMqtt.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(topic)
//     console.log(message.toString('utf8'))
//     // client.end()
//   })

  