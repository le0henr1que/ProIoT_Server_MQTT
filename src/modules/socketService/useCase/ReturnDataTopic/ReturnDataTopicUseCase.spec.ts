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

    await inMemoryDeviceRepository.save(deviceContent);

    const DataTopic = await returnDataTopicDeviceUseCase.execute();
    console.log(DataTopic);
    console.log("SPEC");
    const toExpect = ["BCIBotao1"];
    expect(DataTopic).toEqual(toExpect);
  });
});
