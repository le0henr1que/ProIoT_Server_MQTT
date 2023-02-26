import { describe, expect, it, test } from "vitest";
import { CreateDeviceUseCase } from "./CreateDeviceUseCase";
import { InMemoryDeviceRepository } from "../../repositories/CreateDevice/implementation/InMemoryDeviceRepositoruCreate";
import { Device, DeviceInfo } from "types";

describe("Create device", () => {
  it("Should be create a new device", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceRepository();
    const createDeviceUseCase = new CreateDeviceUseCase(
      inMemoryDeviceRepository
    );

    const deviceInfo: DeviceInfo = {
      nameInput: "temperatura",
      measurement: "ºC",
      value: "25",
      mqttClientTopic: "BCIBotao1",
    };

    const deviceContent: any = {
      name: "Meu dispositivo",
      deviceInput: [deviceInfo],
    };

    const device = await createDeviceUseCase.execute(deviceContent);

    // console.log(device)

    expect(device).toHaveProperty("id");
  });
});
