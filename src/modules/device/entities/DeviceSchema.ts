import { model, Schema } from "mongoose";
import { Device, DeviceInfo } from "../../../types/types";

const subdocumentoSchema = new Schema<DeviceInfo>({
    nameInput:{
        type:String
    },
    measurement:{
        type:String
        
    },

    mqttClientTopic:{
      type:String,
    },
    
    value:{
      type:String
    }, 
  
  });

const schemaDevice = new Schema<Device>({
    
  name: {
    type: String,
    required:true
  },
  
  deviceInput:[subdocumentoSchema],

  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});


export const DeviceSchema = model<Device>("Device", schemaDevice);