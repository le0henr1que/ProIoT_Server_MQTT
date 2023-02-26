import { describe, expect, it, test } from "vitest";
import { GetAllDeviceUseCase } from "./GetAllDeviceUseCase";
import { InMemoryDeviceListRepository } from "../../repositories/GetAllDevice/implementation/InMemoryDeviceRepositoryListAll";
import { Device, DeviceInfo } from "types";

describe("Get All device", () => {
  it("Should be get all device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceListRepository();
    const getAllDeviceUseCase = new GetAllDeviceUseCase(
      inMemoryDeviceRepository
    );

    const deviceInfo: DeviceInfo = {
      nameInput: "temperatura",
      measurement: "ºC",
      value: "25",
      mqttClientTopic: "BCIBotao1",
    };

    const deviceContent: any = {
      _id: "123",
      name: "My Device",
      deviceInput: [deviceInfo],
      created_at: new Date(),
      updated_at: new Date(),
    };

    await inMemoryDeviceRepository.save(deviceContent);
    // await inMemoryDeviceRepository.save(deviceContent)
    const getallDevice = await getAllDeviceUseCase.execute();
    // console.log(getallDevice)
    // const deletedDevice = await inMemoryDeviceRepository.findById(deviceContent._id);
    expect(getallDevice).toHaveLength(1);
  });
});
