import * as Prisma from "../../repositories/UpdateDevice/implementation/MongoDeviceRepositoryDelete";
import { ReciveIoTDataController } from "./ReceiveIoTDataController";
import { ReciveIoTDataUseCase } from "./ReceiveIoTDataUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryUpdate()

const reciveIoTDataUseCase = new ReciveIoTDataUseCase(PrismaDeviceRepository);

const reciveIoTDataController = new ReciveIoTDataController(reciveIoTDataUseCase);

export { reciveIoTDataUseCase, reciveIoTDataController };