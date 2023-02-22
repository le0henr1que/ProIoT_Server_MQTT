import * as Prisma from "../../repositories/GetDeviceById/implementation/MongoDeviceRepositoryGetById";
import { GetByIdDeviceController } from "./GetByIdDeviceController";
import { GetByIdDeviceUseCase } from "./GetByIdDeviceUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryListById()

const getByIdDeviceUseCase = new GetByIdDeviceUseCase(PrismaDeviceRepository);

const getByIdDeviceController = new GetByIdDeviceController(getByIdDeviceUseCase);

export { getByIdDeviceUseCase, getByIdDeviceController };