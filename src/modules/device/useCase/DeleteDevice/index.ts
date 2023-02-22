import * as Prisma from "../../repositories/DeleteDevice/implementation/MongoDeviceRepositoryDelete";
import { DeleteDeviceController } from "./DeleteDeviceController";
import { DeleteDeviceUseCase } from "./DeleteDeviceUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryDelete()

const deleteDeviceUseCase = new DeleteDeviceUseCase(PrismaDeviceRepository);

const deleteDeviceController = new DeleteDeviceController(deleteDeviceUseCase);

export { deleteDeviceUseCase, deleteDeviceController };