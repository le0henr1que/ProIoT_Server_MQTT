import { describe, expect, it, test } from "vitest";
import { ReturnDataTopicUseCase } from "./ReturnDataTopicUseCase";
import { InMemoryDeviceUpdateRepository } from "../../repositories/returnDataTopic/implementation/InMemoryDeviceRepositoruReturnDataTopic";
import { Device, DeviceInfo } from "types";

describe("Return array with dataTopic", () => {
  it("Should return data topic", async () => {
    const inMemoryDeviceRepository = new InMemoryDeviceUpdateRepository();

    const returnDataTopicDeviceUseCase = new ReturnDataTopicUseCase(
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
      mqttClientTopic: "BCIBotao2",
    };

    const deviceContent2: any = {
      name: "My Device",
      deviceInput: [deviceInfo2],
      created_at: new Date(),
      updated_at: new Date(),
    };

    await inMemoryDeviceRepository.save(deviceContent);
    await inMemoryDeviceRepository.save(deviceContent2);

    const DataTopic = await returnDataTopicDeviceUseCase.execute();

    expect(DataTopic).toEqual(["BCIBotao1", "BCIBotao2"]);
  });
});
