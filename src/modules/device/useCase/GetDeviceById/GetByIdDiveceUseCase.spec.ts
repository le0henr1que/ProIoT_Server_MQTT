import { describe, expect, it, test } from "vitest";
import { GetByIdDeviceUseCase } from "./GetByIdDeviceUseCase";
import { InMemoryDeviceListRepository } from "../../repositories/GetDeviceById/implementation/InMemoryDeviceRepositoryGetById";
import { Device, DeviceInfo } from "types";

describe("Get By Id device", () => {
  it("Should be get by id a device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceListRepository();
    const getByIdDeviceUseCase = new GetByIdDeviceUseCase(
      inMemoryDeviceRepository
    );

    const deviceInfo: DeviceInfo = {
      nameInput: "temperatura",
      measurement: "ºC",
      value: "25",
      mqttClientTopic: "BCIBotao1",
    };

    const deviceContent: any = {
      name: "My Device",
      deviceInput: [deviceInfo],
      created_at: new Date(),
      updated_at: new Date(),
    };

    const deviceInfo2: DeviceInfo = {
      nameInput: "temperatura",
      measurement: "ºC",
      value: "25",
      mqttClientTopic: "BCIBotao1",
    };

    const deviceContent2: any = {
      _id: "123",
      name: "My Device",
      deviceInput: [deviceInfo2],
      created_at: new Date(),
      updated_at: new Date(),
    };

    await inMemoryDeviceRepository.save(deviceContent);
    await inMemoryDeviceRepository.save(deviceContent2);

    const getByIdDevice = await getByIdDeviceUseCase.execute(deviceContent._id);
    console.log("antes");
    console.log(getByIdDevice);
    console.log("depois");
    expect(getByIdDevice).toEqual(deviceContent);
  });
});
