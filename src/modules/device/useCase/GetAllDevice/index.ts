import * as Prisma from "../../repositories/GetAllDevice/implementation/MongoDeviceRepositoryListAll";
import { GetAllDeviceController } from "./GetAllDeviceController";
import { GetAllDeviceUseCase } from "./GetAllDeviceUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryListAll()

const getAllDeviceUseCase = new GetAllDeviceUseCase(PrismaDeviceRepository);

const getAllDeviceController = new GetAllDeviceController(getAllDeviceUseCase);

export { getAllDeviceUseCase, getAllDeviceController };