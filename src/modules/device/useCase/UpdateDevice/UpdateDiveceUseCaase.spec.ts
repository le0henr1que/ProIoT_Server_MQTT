import { describe, expect, it, test } from "vitest";
import { UpdateDeviceUseCase } from "./UpdateDeviceUseCase";
import { InMemoryDeviceUpdateRepository } from "../../repositories/UpdateDevice/implementation/InMemoryDeviceRepositoryUpdate";
import { Device, DeviceInfo } from "types";

describe("Update Device", () => {
  it("Should be update device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceUpdateRepository();

    const updateDeviceUseCase = new UpdateDeviceUseCase(
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

    const updateDevice = await updateDeviceUseCase.execute(deviceContent);

    expect(updateDevice).toEqual(deviceContent);
  });
});
