import { Router } from "express";
import { resolver } from "../../shared/errors/appError";
import { createDeviceController } from "./useCase/CreateDevice";
import { deleteDeviceController } from "./useCase/DeleteDevice";
import { getAllDeviceController } from "./useCase/GetAllDevice";
import { getByIdDeviceController } from "./useCase/GetDeviceById";
import { updateDeviceController } from "./useCase/UpdateDevice";
;

const deviceRoute = Router();

deviceRoute.post(
  "/device",
  resolver((request, response) => {
    return createDeviceController.handle(request, response);
  })
);

deviceRoute.delete(
    "/device/:id",
    resolver((request, response) => {
        return deleteDeviceController.handle(request, response);
    })
);

deviceRoute.get(
    "/devices",
    resolver((request, response) => {
        return getAllDeviceController.handle(request, response);
    })
);

deviceRoute.get(
    "/devices",
    resolver((request, response) => {
        return getAllDeviceController.handle(request, response);
    })
);
deviceRoute.get(
    "/device/:id",
    resolver((request, response) => {
        return getByIdDeviceController.handle(request, response);
    })
);

deviceRoute.put(
    "/device/:id",
    resolver((request, response) => {
        return updateDeviceController.handle(request, response);
    })
);





export { deviceRoute };