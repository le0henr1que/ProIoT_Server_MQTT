import { Document } from "mongoose";


export interface Device extends Document {
    _id?:string;
    name:string;
    deviceInput:DeviceInfo[];
    created_at?:Date;
    updated_at?:Date;
}

type name = "temperatura" | "umidade" | "luminosidade";
type measurement = "ºC" | "%" | null;

export interface DeviceInfo {
    nameInput:name;
    measurement:measurement;
    value:any
}