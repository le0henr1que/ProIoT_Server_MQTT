import { Request, Response, Router } from "express";
import { resolver } from "../../shared/errors/appError";
import { createDeviceController } from "./useCase/CreateDevice";
import { deleteDeviceController } from "./useCase/DeleteDevice";
import { getAllDeviceController } from "./useCase/GetAllDevice";
import { getByIdDeviceController } from "./useCase/GetDeviceById";
import { updateDeviceController } from "./useCase/UpdateDevice";

const deviceRoute = Router();

deviceRoute.post(
  "/device",
  resolver((request:Request, response:Response) => {
    return createDeviceController.handle(request, response);
  })
);

deviceRoute.delete(
    "/device/:id",
    resolver((request:Request, response:Response) => {
        return deleteDeviceController.handle(request, response);
    })
);

deviceRoute.get(
    "/devices",
    resolver((request:Request, response:Response) => {
        return getAllDeviceController.handle(request, response);
    })
);


deviceRoute.get(
    "/device/:id",
    resolver((request:Request, response:Response) => {
        return getByIdDeviceController.handle(request, response);
    })
);

deviceRoute.put(
    "/device/:id",
    resolver((request:Request, response:Response) => {
        return updateDeviceController.handle(request, response);
    })
);





export { deviceRoute };