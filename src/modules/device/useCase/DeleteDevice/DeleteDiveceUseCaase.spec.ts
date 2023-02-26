import { describe, expect, it, test } from "vitest";
import { DeleteDeviceUseCase } from "./DeleteDeviceUseCase";
import { InMemoryDeviceDeleteRepository } from "../../repositories/DeleteDevice/implementation/InMemoryDeviceRepositoryDelete";
import { Device, DeviceInfo } from "types";

describe("Delete device", () => {
  it("Should be dedlete a device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceDeleteRepository();
    const createDeviceUseCase = new DeleteDeviceUseCase(
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
    await createDeviceUseCase.execute(deviceContent._id);

    const deletedDevice = await inMemoryDeviceRepository.findById(
      deviceContent._id
    );
    expect(deletedDevice).toBeNull();
  });
});
