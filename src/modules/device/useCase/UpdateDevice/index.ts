import * as Prisma from "../../repositories/UpdateDevice/implementation/MongoDeviceRepositoryUpdate";
import { UpdateDeviceController } from "./UpdateDeviceController";
import { UpdateDeviceUseCase } from "./UpdateDeviceUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryUpdate();

const updateDeviceUseCase = new UpdateDeviceUseCase(PrismaDeviceRepository);

const updateDeviceController = new UpdateDeviceController(updateDeviceUseCase);

export { updateDeviceUseCase, updateDeviceController };
