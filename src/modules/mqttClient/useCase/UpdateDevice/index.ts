import * as Prisma from "../../repositories/UpdateDevice/implementation/MongoDeviceRepositoryMqtt";
import { ReciveIoTDataController } from "./ReceiveIoTDataController";
import { ReciveIoTDataUseCase } from "./ReceiveIoTDataUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryUpdate();

const IoTDataUseCase = new ReciveIoTDataUseCase(PrismaDeviceRepository);

const IoTDataController = new ReciveIoTDataController(IoTDataUseCase);

export { IoTDataUseCase, IoTDataController };
