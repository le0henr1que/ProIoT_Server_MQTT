import { Document } from "mongoose";

export interface Device extends Document {
  _id?: string;
  name: string;
  deviceInput: DeviceInfo[];
  created_at?: Date;
  updated_at?: Date;
}

export interface DeviceInfo {
  nameInput: string;
  measurement: string;
  value: any;
  mqttClientTopic?: string;
}
