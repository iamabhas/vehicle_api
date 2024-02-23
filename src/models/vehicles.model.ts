import { Document, Schema, model } from 'mongoose';

export interface IVehicle extends Document {
  make: string;
  vehicleModel: string;
  year: number;
  registrationNumber: string;
  currentStatus: 'Active' | 'Under Maintenance' | 'Retired';
  location: string;
  driver?: string;
  maintenanceTask?: string;
}

export const VehicleSchema = new Schema(
  {
    make: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    year: { type: Number, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    currentStatus: {
      type: String,
      required: true,
      enum: ['Active', 'Under Maintenance', 'Retired'],
    },
    location: { type: String, required: true },
    driver: { type: String, required: false },
    maintenanceTask: { type: String, required: false },
  },
  { collection: 'vehicles' },
);

export const VehicleModel = model<IVehicle>('Vehicle', VehicleSchema);
