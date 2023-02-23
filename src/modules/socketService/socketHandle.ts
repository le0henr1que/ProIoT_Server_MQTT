//socket handle
import { Server } from 'socket.io';
import { io } from "../../app"
import { myEmitter } from "../../shared/event/eventEmmiter"
import { returnDataTopicController } from "./useCase/ReturnDataTopic/index";

export function startSocketServer() {

  io.on('connection', (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    returnDataTopicController.handle()
    .then((result) => {
        result.map((content:string) => {
            socket.join(content);
        })
    })

    returnDataTopicController.handle()
    .then((result) => {
        result.map((content:string) => {
            myEmitter.on(content, (message) => {
                console.log('Evento disparado!', message);

                io.to(content).emit(content, message);
                console.log("ouviu")
            });
        })
    })
    // Quando uma nova mensagem é recebida pelo MQTT, envia para o socket
    // eventEmitter.on('newMessage', (message) => {
    // });
    // myEmitter.on('topico', (topics) => {

    //     console.log("Aqui é antes no socket")
    //         console.log(topics)
    // });

        // console.log("Aqui é depois no socket")

        // myEmitter.on('BCIBotao1', (message) => {
        //     console.log('Evento disparado!', message);

        //     socket.emit('BCIBotao1', message);
        //     console.log("ouviu")
        // });


        // myEmitter.on('BCIBotao1', (message) => {
        //     console.log('Evento disparado!', message);

        //     socket.emit('BCIBotao1', message);
        //     console.log("ouviu")
        // });

      

    // socket.on('disconnect', () => {
    //   console.log(`Socket desconectado: ${socket.id}`);
    // });
  });
}
