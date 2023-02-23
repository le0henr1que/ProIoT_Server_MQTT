

import dotenv from 'dotenv';
dotenv.config();
import mqtt from 'mqtt';

const client = mqtt.connect(process.env.MQTT_URL);
const topic = process.argv[2];
const message = process.argv[3];


client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.publish(topic, message);
});

setTimeout(() => {
    client.end();
  }, 1000);