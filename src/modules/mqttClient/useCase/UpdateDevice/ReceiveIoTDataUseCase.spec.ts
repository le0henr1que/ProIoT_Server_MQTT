import { describe, expect, it, test } from "vitest";
import { ReciveIoTDataUseCase } from "./ReceiveIoTDataUseCase";
import { InMemoryDeviceUpdateRepository } from "../../repositories/UpdateDevice/implementation/InMemoryDeviceRepositoryUpdate";
import { Device, DeviceInfo } from "types";

describe("Update Device channel mqtt", () => {
  it("Should update field value device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceUpdateRepository();

    const updateDeviceUseCase = new ReciveIoTDataUseCase(
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

    await inMemoryDeviceRepository.save(deviceContent);
    const str = "100";
    const buffer = Buffer.from(str, "utf-8");
    const updateDevice = await updateDeviceUseCase.execute("BCIBotao1", buffer);

    expect(updateDevice.deviceInput[0].value).toEqual(buffer);
  });
});
