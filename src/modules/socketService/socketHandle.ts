//socket handle
import { Server } from "socket.io";
import { io } from "../../app";
import { myEmitter } from "../../shared/event/eventEmmiter";
import { returnDataTopicController } from "./useCase/ReturnDataTopic/index";

export function startSocketServer() {
  io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    returnDataTopicController.handle().then((result) => {
      result.map((content: string) => {
        socket.join(content);
      });
    });

    returnDataTopicController.handle().then((result) => {
      result.map((content: string) => {
        // myEmitter.on(content, (message) => {
        //     console.log('Evento disparado!', message);

        //     io.to(content).emit(content, message);
        //     console.log("ouviu")
        // });
        if (!myEmitter.listenerCount(content)) {
          myEmitter.on(content, (message) => {
            console.log("Evento disparado!", message);
            io.to(content).emit(content, message);
            console.log("ouviu");
          });
        }
      });
    });
  });
}
