//socket handle
import { Server } from 'socket.io';
import { io } from "../../app"
import { myEmitter } from "../../shared/event/eventEmmiter"

export function startSocketServer() {

  io.on('connection', (socket) => {
    console.log(`Socket conectado: ${socket.id}`);
    
    // Quando uma nova mensagem é recebida pelo MQTT, envia para o socket
    // eventEmitter.on('newMessage', (message) => {
    // });
    myEmitter.on('messageMqtt', (message) => {
        console.log('Evento disparado!', message);

        socket.emit('newMessage', message);
        console.log("ouviu")
    });
      

    // socket.on('disconnect', () => {
    //   console.log(`Socket desconectado: ${socket.id}`);
    // });
  });
}
