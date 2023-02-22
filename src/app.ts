import express from "express";
import { corsOptions } from "../src/Utils/Config/cors"
import cors from "cors";
import { connectToMongoDb } from "./database/mongo";
import mqtt from 'mqtt'
import http from 'http';
import { Server, Socket } from 'socket.io';
import { errorMiddleware } from "./middlewares/errors/errorMiddleware";
import { deviceRoute } from "./modules/device/routes";
import { configCorsSocket } from "./Utils/Config/corsSocket";

const clientMqtt  = mqtt.connect(process.env.MQTT_URL)

connectToMongoDb();

const app = express();
const server = http.createServer(app);
const io = new Server(server, configCorsSocket);

app.use(cors(corsOptions));
app.use(express.json());
app.use(deviceRoute);
app.use(errorMiddleware);

export { app, clientMqtt, io, server };