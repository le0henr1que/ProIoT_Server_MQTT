import * as Prisma from "../../repositories/returnDataTopic/implementation/MongoDeviceRepositoryReturnDataTopic";
import { ReturnDataTopicController } from "./returnDataTopicController";
import { ReturnDataTopicUseCase } from "./ReturnDataTopicUseCase";

const PrismaDeviceRepository = new Prisma.MongoDeviceRepositoryReturnDataTopic()

const returnDataTopicUseCase = new ReturnDataTopicUseCase(PrismaDeviceRepository);

const returnDataTopicController = new ReturnDataTopicController(returnDataTopicUseCase);

export { returnDataTopicUseCase, returnDataTopicController };