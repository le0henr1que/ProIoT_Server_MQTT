import * as Prisma from "../../repositories/CreateDevice/implementation/MongoDeviceRepositoryCreate";
import { CreateDeviceController } from "./CreateDeviceController";
import { CreateDeviceUseCase } from "./CreateDeviceUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepository()

const createDeviceUseCase = new CreateDeviceUseCase(PrismaDeviceRepository);

const createDeviceController = new CreateDeviceController(createDeviceUseCase);

export { createDeviceUseCase, createDeviceController };